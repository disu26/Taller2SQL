package com.taller2.controller;

import com.taller2.service.ContactService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.taller2.util.Response;

import java.util.List;
import java.util.regex.Pattern;

@Slf4j
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT,RequestMethod.PATCH})
public class Contact {

    @Autowired
    private ContactService contactService;

    private Response response = new Response();


    @GetMapping(path = "/")
    public String index(){
        return "Hola Mundo java";
    }

    @GetMapping(path = "/contacts")
    public List<com.taller2.domain.Contact> lista(){
        return contactService.list();
    }

    @PostMapping(path = "/contact")
    public ResponseEntity<Response> create(@RequestBody com.taller2.domain.Contact contact){
        response.data = contact;
        try{
            log.info("Contacto a crear: {}", contact);
            contactService.save(contact);
            return new ResponseEntity<Response>(response, HttpStatus.CREATED);
        }catch (Exception exc){
            response.status = exc.getCause().toString();
            response.error = true;
            if (Pattern.compile("(contact.cont_name_UNIQUE)").matcher(exc.getMessage()).find()){
                response.message = "nombre duplicado";
                return new ResponseEntity<Response>(response, HttpStatus.CONFLICT);
            }else {
                response.message = exc.getMessage();
                return new ResponseEntity<Response>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    @DeleteMapping(path = "/contact/{id}")
    public ResponseEntity<com.taller2.domain.Contact> delete(com.taller2.domain.Contact contact){
        log.info("Contacto a Borrar: {}", contact);
        contactService.delete(contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PutMapping(path = "/contact/{id}")
    public ResponseEntity<com.taller2.domain.Contact> update(@RequestBody com.taller2.domain.Contact contact, @PathVariable("id") Long id){
        log.info("Contacto a modificar: {}", contact);
        contactService.update(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/name/{id}")
    public ResponseEntity<com.taller2.domain.Contact> updateName(@RequestBody com.taller2.domain.Contact contact, @PathVariable("id") Long id) {
        log.info("Contacto a modificar nombre: {}", contact);
        contactService.updateName(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/phone/{id}")
    public ResponseEntity<com.taller2.domain.Contact> updatePhone(@RequestBody com.taller2.domain.Contact contact, @PathVariable("id") Long id) {
        log.info("Contacto a modificar telefono: {}", contact);
        contactService.updatePhone(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/email/{id}")
    public ResponseEntity<com.taller2.domain.Contact> updateEmail(@RequestBody com.taller2.domain.Contact contact, @PathVariable("id") Long id){
        log.info("Contacto a modificar email: {}", contact);
        contactService.updateEmail(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/dateBirth/{id}")
    public ResponseEntity<com.taller2.domain.Contact> updateDateBirth(@RequestBody com.taller2.domain.Contact contact, @PathVariable("id") Long id){
        log.info("Contacto a modificar fecha de nacimiento: {}", contact);
        contactService.updateDateBirth(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }
}

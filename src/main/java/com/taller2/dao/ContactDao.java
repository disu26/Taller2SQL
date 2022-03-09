package com.taller2.dao;

import com.taller2.domain.Contact;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;

public interface ContactDao extends CrudRepository<Contact, Long> {

    @Modifying
    @Query("update Contact cont set cont.name = :name where cont.id = :id")
    public void updateName(
            @Param(value = "id") Long id,
            @Param(value = "name") String name
    );

    @Modifying
    @Query("update Contact cont set cont.phone = :phone where cont.id = :id")
    public void updatePhone(
            @Param(value = "id") Long id,
            @Param(value = "phone") String phone
    );

    @Modifying
    @Query("update Contact cont set cont.email = :email where cont.id = :id")
    public void updateEmail(
            @Param(value = "id") Long id,
            @Param(value = "email") String email
    );

    @Modifying
    @Query("update Contact cont set cont.dateBirth = :dateBirth where cont.id = :id")
    public void updateDateBirth(
            @Param(value = "id") Long id,
            @Param(value = "dateBirth") Date dateBirth
    );
}

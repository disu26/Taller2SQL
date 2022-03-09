package com.taller2.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "contact")
public class Contact implements Serializable {

    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cont_id")
    private Long id;

    @Column(name = "cont_name")
    private String name;

    @Column(name = "cont_phone")
    private String phone;

    @Column(name = "cont_email")
    private String email;

    @Column(name = "cont_date_birth")
    private String dateBirth;
}

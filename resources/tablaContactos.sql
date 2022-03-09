-- -----------------------------------------------------
-- Schema contact
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS contact DEFAULT CHARACTER SET utf8 ;
USE contact ;

-- -----------------------------------------------------
-- Table contact
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS contact(
  cont_id INT NOT NULL AUTO_INCREMENT,
  cont_name VARCHAR(45) NOT NULL,
  cont_phone VARCHAR(15) NOT NULL,
  cont_email VARCHAR(45) NOT NULL,
  cont_date_birth VARCHAR(15) NULL,
  PRIMARY KEY (cont_id),
  UNIQUE INDEX cont_name_UNIQUE (cont_name ASC) VISIBLE
) ENGINE = InnoDB;
CREATE TABLE contact(
	id INT PRIMARY KEY auto_increment NOT NULL,
	name_complete VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	subject VARCHAR(70) NOT NULL,
	message VARCHAR(300) NOT NULL,
    date_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- fecha de creacion del registro
	state BOOLEAN DEFAULT TRUE,
    date_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- fecha de actualizacion del registro
);
DESCRIBE contacto;

/*


*/
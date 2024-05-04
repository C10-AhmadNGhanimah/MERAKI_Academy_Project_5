-- Build Your Tables Here --

CREATE TABLE roles (
id SERIAL PRIMARY KEY,
name_role VARCHAR(255) NOT NULL
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
full_name VARCHAR(255),
age TINYINT,
phone_number VARCHAR(255),
email VARCHAR(255) UNIQUE,
password VARCHAR(255),
role_id INT,
gender TINYINT,
diagnostics_id INT,
deletedAt DATE NULL,
FOREIGN KEY (role_id) REFERENCES roles(id),

);

CREATE TABLE ratings (
id SERIAL PRIMARY KEY,
user_id INT,
doctor_id INT,
rating TINYINT,
comment TEXT,
rating_date DATE,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);


CREATE TABLE doctor (
id SERIAL PRIMARY KEY,
full_name VARCHAR(255),
phone_number VARCHAR(255),
email VARCHAR(255) UNIQUE,
password VARCHAR(255),
role_id INT,
gender TINYINT,
deletedAt DATE NULL,
FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE clinic (
id SERIAL PRIMARY KEY,
name VARCHAR(255),
specialization VARCHAR(255),
location VARCHAR(255),
doctor_id INT,
FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

CREATE TABLE appointment (
id SERIAL PRIMARY KEY,
date_time TIMESTAMP,
status TINYINT,
user_id INT,
doctor_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);
--  //  0 , 1 ,2 ,3 pending , completed , reject , is_completed

CREATE TABLE diagnostics (
id SERIAL PRIMARY KEY,
diagnostics VARCHAR(255),
image_diagnostics VARCHAR(255),
user_id INT,
doctor_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);



CREATE TABLE specialization (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image_specialization VARCHAR(255),
  clinic_id INT,
  FOREIGN KEY (clinic_id) REFERENCES clinic(id)
);
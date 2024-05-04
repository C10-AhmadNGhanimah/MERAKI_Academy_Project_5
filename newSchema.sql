CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    age INT,
    phone_number VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    gender VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE roles (
id SERIAL PRIMARY KEY,
name_role VARCHAR(255) NOT NULL
);
CREATE TABLE specialization (
    id SERIAL PRIMARY KEY,
    name_specialization VARCHAR(255),
    image_specialization VARCHAR(255)
);
CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    phone_number VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    gender VARCHAR(255),
    image_doctor VARCHAR(255) NOT NULL,
    specialization_doctor INT,  
    deletedAt DATE NULL,
    role_id INT,
    FOREIGN KEY (specialization_doctor) REFERENCES specialization(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);



CREATE TABLE clinics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    image_clinic VARCHAR(255),
    description VARCHAR(255),
    specialization INT,
    FOREIGN KEY (specialization) REFERENCES specialization(id)
);

-- Status = appending  -- regect -- complete -- approve -- isCompleted
CREATE TABLE appointment (
    id SERIAL PRIMARY KEY,
    date_time TIMESTAMP,
    status VARCHAR(255),
    user_id INT, 
    doctor_id INT, 
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE diagnostics (
    id SERIAL PRIMARY KEY,
    diagnostics VARCHAR(255),
    image_diagnostics VARCHAR(255),
    user_id INT,  
    doctor_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);
 



CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    rating SMALLINT,
    comment TEXT,
    rating_date TIMESTAMP,
    doctor_id INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);


DROP TABLE roles
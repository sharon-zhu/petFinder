
DROP TABLE IF EXISTS petList;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    _id serial PRIMARY KEY,
    firstName varchar NOT NULL,
    lastName varchar NOT NULL,
    email varchar NOT NULL UNIQUE,
    psword varchar NOT NULL,
    zipcode varchar NOT NULL
);

CREATE TABLE petList(
    user_id integer NOT NULL,
    pet_id varchar NOT NULL,
    PRIMARY KEY (user_id, pet_id),
    FOREIGN KEY (user_id) REFERENCES users(_id)
);

insert into users (_id, firstName, lastName, email, psword, zipcode) values (DEFAULT, 'Anthony', 'Martinez','anthony@petfinder.com', 'ilovepets', '90210');  
insert into petList (user_id, pet_id) values ('1', '50563543' );
insert into petList (user_id, pet_id) values ('1', '50563546' );


{
   "firstName": "Ruben",
    "lastName": "Kirsh",
    "email": "ruben@petfinder.com",
    "psword": "1234",
    "zipcode": "90210"
}

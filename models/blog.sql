-- CREATE TABLE categories(
-- id SERIAL NOT NULL PRIMARY KEY,
-- name varchar(50)
-- );

-- CREATE TABLE authors(
-- id SERIAL NOT NULL PRIMARY KEY,
-- name varchar(50),
-- bio varchar(100)
-- );

-- CREATE TABLE blogs(
-- id SERIAL NOT NULL PRIMARY KEY,
-- title varchar(75),
-- authorid integer REFERENCES authors(id),
-- categoryid integer REFERENCES categories(id),
-- body varchar,
-- date date
-- );

-- INSERT INTO categories VALUES
-- (DEFAULT, 'Coding'),
-- (DEFAULT, 'Swimming'),
-- (DEFAULT, 'Food'),
-- (DEFAULT, 'Sports');

-- INSERT INTO authors VALUES
-- (DEFAULT, 'Matt Ryan', '20 year old from Chicago'),
-- (DEFAULT, 'Alex Plaetzer', 'Coach-learning to code');
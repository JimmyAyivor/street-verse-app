DROP DATABASE IF EXISTS street_verse_db;
CREATE DATABASE street_verse_db;

\c street_verse_db;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT
);

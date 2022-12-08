DROP DATABASE IF EXISTS street_verse_db;
CREATE DATABASE street_verse_db;

\c street_verse_db;

create or replace function set_updated_at() RETURNS trigger
  LANGUAGE plpgsql
  AS $$
begin
  new.updated_at := current_timestamp;
  return new;
end;
$$;
DROP TABLE IF EXISTS users;
create table if not exists users (
  id         serial primary key,
  uid      text unique,
  wallet_id  char(42) unique not null,
  username   text unique,
  firstname  text not null,
  lastname    text not null,
  img        text not null,
  email      text unique not null,
  address  text,
  city       text,
  country    text,
  postalcode int ,
  occupation text,
  bio        text,
  facebook   text,
  twitter    text,
  instagram  text,
  google     text,
  website    text,
  status     text not null default 'ACTIVE',
  roles      text not null default 'USER',
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);


  


create trigger updated_at before update on users for each row execute procedure set_updated_at();




DROP TABLE IF EXISTS events;
create table if not exists events (
  id    serial primary key,
  title text not null,
  short_desc text not null,
  thumbnail text not null,
  img       text not null,
  long_desc text not null,
  date      date not null,
  location  text not null,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);
DROP TABLE IF EXISTS meassges;
create table if not exists messages (
  id          serial primary key,
  fullname    text not null,
  email       text not null,
  message     text not null,
  created_at  timestamp not null default now(),
  updated_at  timestamp not null default now()
);
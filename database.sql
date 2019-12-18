CREATE DATABASE library;
CREATE TABLE books(section INT, title TEXT, author TEXT);
CREATE TABLE users(username TEXT, password TEXT);
INSERT INTO books
VALUES
  (1, 'Foundation', 'Issasc Asimov'),
  (2, 'Digital Fortress', 'Dan Brown'),
  (3, 'World War z', 'Max Brooks');
INSERT INTO users
VALUES
  ('joe', 'joe123'),
  ('ryan', 'ryan123'),
  ('cameron', 'cameron123');
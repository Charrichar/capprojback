CREATE DATABASE pernstore;

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY, image TEXT, price DECIMAL, name VARCHAR(40), description TEXT
);

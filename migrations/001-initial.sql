----------------------------
-- Up
----------------------------
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	fullname VARCHAR(255) NOT NULL,
	ordertype VARCHAR(5) NOT NULL,
	quantity FLOAT,
	price FLOAT
);

CREATE TABLE processed_orders (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	buyer VARCHAR(255) NOT NULL,
  seller VARCHAR(255) NOT NULL,
	quantity VARCHAR(255) NOT NULL,
	price VARCHAR(255) NOT NULL,
  time VARCHAR(255) NOT NULL
);
----------------------------
-- Down
----------------------------
DROP TABLE users;
DROP TABLE orders;
DROP TABLE processed_orders;

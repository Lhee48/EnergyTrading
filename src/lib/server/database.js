import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';
import bcrypt from 'bcrypt';

let database = null;
/**
 *
 * @returns {Promise<import('sqlite').Database>}
 */
export async function getDatabase() {
  if (!database) {
    database = await open({
      filename: path.join(process.cwd(), 'database.db'),
      driver: sqlite3.Database
    });
    console.log(path.join(process.cwd()));
  }
  return database;
}

export async function createUser({fullname, password, email}) {
  const db = await getDatabase();
  const encryptPass = await bcrypt.hash(password, 10);
  const result = await db.run(
    'INSERT INTO users (fullname, password, email) VALUES (?,?,?)',
    fullname,
    encryptPass,
    email
  );
  return result.lastID;
}

export async function getUserByID(id) {
  const db = await getDatabase();
  const result = await db.get('SELECT fullname FROM users WHERE id = ?', id);
  return result;
}

export async function getUserByEmail(email) {
  const db = await getDatabase();
  const result = await db.get('SELECT * FROM users WHERE email = ?', email);
  return result;
}

export async function getOrder({fullname, ordertype, quantity, price}) {
  const db = await getDatabase();
  const result = await db.run(
    'INSERT INTO orders (fullname, ordertype, quantity, price) VALUES (?,?,?,?)',
    fullname,
    ordertype,
    quantity,
    price
  );
}

export async function getProcOrder({buyer, seller, quantity, price, time}) {
  const db = await getDatabase();
  const result = await db.run(
    'INSERT INTO processed_orders (buyer, seller, quantity, price, time) VALUES (?,?,?,?,?)',
    buyer,
    seller,
    quantity,
    price,
    time
  );
}

export async function getAllOrders() {
  const db = await getDatabase();
  const sql = "SELECT fullname as 'name', ordertype as 'type', quantity as 'quantity (kwh)', price as 'price (p/kwh)' FROM orders;";
  const result = db.all(sql);
  return result;
}

export async function getTableOrders() {
  const db = await getDatabase();
  const sql = "SELECT buyer, seller, quantity, price, time FROM processed_orders"
  const result = db.all(sql);
  return result;
}

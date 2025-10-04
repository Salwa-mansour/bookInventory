const dotenv =require('dotenv');
const { Client } = require("pg");

dotenv.config({ path: 'config.env' });

const SQL = `
CREATE TABLE IF NOT EXISTS  bookCategory (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
categoryName  VARCHAR (255)

 );

CREATE TABLE IF NOT EXISTS  bookAuthor (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
authorName  VARCHAR (255)

 );
CREATE TABLE IF NOT EXISTS  books (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
bookName  VARCHAR (255),
author_id INTEGER NOT NULL,
category_id INTEGER NOT NULL,
    CONSTRAINT fk_author
    FOREIGN KEY (author_id)
    REFERENCES bookAuthor (id),
    CONSTRAINT fk_category
    FOREIGN KEY (category_id)
    REFERENCES bookCategory (id)

 );
 INSERT INTO bookCategory (categoryName)
 VALUES
 ('series'),
 ('novel'),
 ('nature');
 INSERT INTO bookAuthor (authorName)
 VALUES
 ('Ahmed Shadeed'),
 ('Sara Soiedan'),
 ('Chris Couir');

`;
async function main() {
    console.log("seeding...");
    const client = new Client({
        host:process.env.HOST,
        user:process.env.USER,
        database:process.env.DATABASE,
        password:process.env.PASSWORD,
        port:process.env.dbPORT
    });
    await client.connect();
    await client.query(SQL);
    await client.end;
    console.log("done");
    
}

main();
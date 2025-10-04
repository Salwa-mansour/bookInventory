const dotenv =require('dotenv');
const {Pool} =require("pg");

dotenv.config({ path: 'config.env' });
module.exports = new Pool({
    host:process.env.HOST,
    user:process.env.USER,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.dbPORT
});

// module.exports = new Pool({
//   connectionString:`postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`
// //   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
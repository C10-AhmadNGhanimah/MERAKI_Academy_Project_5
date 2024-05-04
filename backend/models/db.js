<<<<<<< HEAD
const { Pool }=require('pg')
const connectionString=process.env.CONNECTION_STRING
console.log(connectionString)
const pool=new Pool({
    connectionString,
})
pool.connect((err,pool)=>{
    if(err)
    {
        console.error('Pool error:',err.message,err.stack)
        return
    }
    console.error("Pool connected on: ", pool.user)
})
module.exports={
    pool,
}
=======
const { Pool } = require("pg");
const connectionString = process.env.CONNECTION_STRING;
const pool = new Pool({
  connectionString,
});
pool
  .connect()
  .then((res) => {
    console.log(`DB connected to ${res.database}`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;
>>>>>>> 81ecaca2689e9e47a56b06d9d7e9cb208d36a3f2

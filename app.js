const db =require("sqlite3").verbose();

const sqlite3 = new db.Database("./database.db");

// sqlite3. run (
//   "CREATE TABLE zootopia(id integer primary key, name text  not null )"
// );

// const insertStmt = sqlite3.prepare("INSERT INTO zootopia (id, name) VALUES (?, ?)");
// insertStmt.run("1234", "alicem");
// insertStmt.run("5678", "bob@example.com");
// insertStmt.finalize();

sqlite3.all ("SELECT * FROM zootopia", (err,rows) => {
  if(err) {
    throw new Error;
  }
  
    rows.forEach((row)=> {
      console.log(`${row.id}: ${row.name} `);
    }
)
}) 
const updateStmt = sqlite3.prepare ("UPDATE zootopia SET name = ? WHERE id = ?");
updateStmt.run("matomabo", "1234");
updateStmt.finalize();

const deleteStmt = sqlite3.prepare ("DELETE FROM zootopia WHERE name = ?");
deleteStmt.run("matomabo");
deleteStmt.finalize();

sqlite3.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
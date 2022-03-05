const database = require('better-sqlite3');

const db = new database('main.db',{verbose:console.log});

const insert = db.prepare(`INSERT INTO catNames(name,sex) VALUES(?,?)`);

//insert.run('sophie',0)

const insertMany = db.prepare(`
    INSERT INTO catNames(name,sex)
    VALUES(@name,@sex)
    `)


const get = db.prepare(`SELECT name,sex FROM catNames WHERE id = ?`);



// 0 = female

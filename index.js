const database = require('better-sqlite3');

const db = new database('main.db',{verbose:console.log});

const insert = db.prepare(`INSERT INTO catNames(name,sex) VALUES(?,?)`);

//insert.run('sophie',0)

const insertManyPrepare = db.prepare(`
    INSERT INTO catNames(name,sex)
    VALUES(@name,@sex)
    `);

const insertMany = db.transaction((cats)=>{
    for (const cat of cats) insertManyPrepare.run(cat);
});

//insertMany([
//    {name:'joey',sex:1},
//    {name:'sally',sex:0},
//    {name:'Junior',sex:1}
//]);


const get = db.prepare(`SELECT name,sex FROM catNames WHERE id = ?`);

console.log(get.run(2))

// 0 = female

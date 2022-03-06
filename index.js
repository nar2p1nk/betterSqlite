const database = require('better-sqlite3');

const db = new database('main.db');

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


const get = db.prepare(`SELECT * FROM catNames WHERE id = ?`);

const getAll = db.prepare(`SELECT * FROM catNames`);

function getAllFormal(){
    const rows = db.prepare(`SELECT * FROM  catNames`);
    rows.all().map(row=>{
        if(row.sex == 1){
            console.log(`${row.name} is a boy!`)
        }
        else{console.log(`${row.name} is a girl!`)}
    })
}

console.log(getAllFormal())

// 0 = female

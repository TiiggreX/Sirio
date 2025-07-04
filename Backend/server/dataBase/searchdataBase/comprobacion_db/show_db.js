function Users(db){
    db.all('SELECT * FROM Users', (err, info) => {
        if(err) throw err;
        console.log(info)
    })
}

function Activity(db){
    db.all('SELECT * FROM Activity', (err, info) => {
        if(err) throw err;
        console.log(info)
    })
}

function Book(db){
    db.all(`SELECT * FROM Book`, (err, info) => {
        if(err) throw err;
        console.log(info)
    })
}

module.exports = { Users, Activity, Book }
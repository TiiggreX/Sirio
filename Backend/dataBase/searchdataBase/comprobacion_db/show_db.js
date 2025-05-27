const db = '../searchdataBase/searchDataBase.js'

db.all('SELECT * FROM Users', (err, info) => {
    if(err) throw err;
    console.log(info)
})
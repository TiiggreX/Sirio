const db = require("../searchdataBase/searchDataBase");

async function ShowUsers(res){
    db.all('SELECT IdUser, Name, Age, Gender, Description FROM Users', (err, row) => {
        if(err) throw err;
        return res.json( row )
    })
}

module.exports = ShowUsers
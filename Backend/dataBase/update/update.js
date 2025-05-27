const db = require('../searchdataBase/searchDataBase')

async function UpdateDate(paramet, date, id){
    db.run(`UPDATE Users SET "${paramet}" = "${date}" WHERE IdUser = ${id}`, 
        (err) => {
            if(err) throw err
            console.log(`Nuevo ${paramet}: `, date)
        })
}

async function UpdateUser(req, res){
    const datos = req.body;
    await UpdateDate('Name', datos.newName, datos.id);
    await UpdateDate('Gender', datos.newGender, datos.id);
    await UpdateDate('Description', datos.newDescription, datos.id);
}

module.exports = UpdateUser;
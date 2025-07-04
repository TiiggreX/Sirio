const db = require('../../dataBase/searchdataBase/searchDataBase')

async function SearchMyBook( req = new Promise ){
    const data = req.body
    const res = await new Promise((resolve, reject) => {
        db.all(`SELECT * FROM Book WHERE Book.IdUser = ?`, 
            [data.id], 
            (err, row) => {
                if(err) return reject(err);
                resolve(row)
            }
        )
    })
    
    return res.map(res => ({
        IdBook: res.IdBook,
        Name: res.Name,
        Gender: res.Gender,
        Description: res.Description,
        IdUser: res.IdUser
    }))
}

module.exports = { SearchMyBook }
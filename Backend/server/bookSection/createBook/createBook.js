const db = require('../../dataBase/searchdataBase/searchDataBase')
const fs = require('fs')

function CreateFile(data, direction){
    fs.mkdirSync( `${direction}` , {recursive: true});
    fs.writeFileSync(`${direction}/${data.Name}.txt`, '');
}

function ActivityBook(data){
    db.all(`SELECT Books FROM Activity WHERE IdUser = ?`, 
        [data.IdUser], 
        (err, row) => {
            if(err){
                console.log('Error al obtener los datos del autor')
                throw err
            };
            const Books = [row, data.IdBook]
            db.run(`UPDATE Activity SET Books = ? WHERE IdUser = ?`, 
                [Books, data.IdUser],
                (err) => {
                    if(err){
                        console.log('Error al actualizar los datos del autor')
                        throw err
                    }
                })
        })
}

async function CreateBook(req, ruta){
    const data = req.body;
    try{
        db.run(`INSERT INTO Book ("Name", "Gender", "Description", "IdUser") VALUES (?,?,?,?)`, 
            [data.Name, data.Gender, data.Description, data.IdUser], 
            function(err) {
                if(err){
                    console.log('Error en el codigo SQL en CreateBook')
                    throw err
                };
                const direction = `${ruta}/${this.lastID}`
                CreateFile(data, direction)
                ActivityBook(data)
        })
    } catch(err) {
        console.log('fallo en la funcion CreateBook')
        throw err
    }
}

module.exports = { CreateBook }
const db = require('../searchdataBase/searchDataBase')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { ExportInfoUser } = require('../searchInformation/searchInformation')

async function Login (req, res){
    const KEY = 'pwPqD9Rn';
    const { Email , Password } = req.body;
    db.get(`SELECT * FROM Users WHERE Mail = ?`,
        [Email],
        async (err, user) => {
            if(err || !user){
                return res.status(400).json({ error: 'Credenciales invalidas' })
            };
            console.log('usuario correcto...');
            const validacion = await bcrypt.compare(Password, user.Password);
            if(!validacion){
                return res.status(400).json({ error: 'Credenciales invalidas' })
            }
            console.log('contraseña y validacion correctas...');

            const usuario = ExportInfoUser(user)

            const token = jwt.sign({ 
                usuario
            }, KEY , {
                expiresIn: '1h'
            })
            return res.json({ token })
        }
    )
}

module.exports = Login
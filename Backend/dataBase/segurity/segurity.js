//Seguridad de comunicación, autorización y encriptamiento
const jwt = require('jsonwebtoken')

function Segurity() {
    const KEY = 'pwPqD9Rn';
    const AuthorizationToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
    
        if(!token) return res.sendStatus(401);
    
        jwt.verify(token, KEY, (err, user) => {
            if(err) return sendStatus(403);
            req.user = user;
            next();
        });
    };
}

module.export = Segurity
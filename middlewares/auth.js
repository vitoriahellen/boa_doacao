const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = {
    eAdmin: async function (req, res, next){
        const authHeader = req.headers.authorization;
        //console.log(authHeader);
        if(!authHeader){
            return res.status(400).json({
                erro: true,
                mensagem: "Efetue o Login para acessar essa pagina"
            });
        }

        const [, token] = authHeader.split (' ');
        console.log(" Token: " +token);

        if(!token){
            return res.status(400).json({
                erro: true,
                mensagem: "Efetue o Login para acessar essa pagina"
            });
        }

        try{
            const decode = await promisify(jwt.verify)(token, "D62ST92Y7A6V7K5C6W9ZU6W8KS3");
            req.useId = decode.id;
            return next();
        }catch(err){
            return res.status(400).json({
                erro: true,
                mensagem: "Token Invalido"
            });
        }


}
}
// Verify Token Function
const verifyToken = (req, res, next)=> {
    //To Get tokens back
    const header = req.cookies.auth;
    
    //error message
    const error_msg = "Please Sign In";

    if (typeof header !== "undefined") {
        console.log('Tokens Verified');

       
        next();
        return header;
    } else {
        console.log("Komasi Tokeni");
        res.render('error', {
            message: error_msg
        });
    }
}
module.exports ={
    verifyToken
}

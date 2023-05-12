function authentification(req,res,next){
 if(req.body) {
    console.log(req.body);
 } else {
    console.log("No body");
    next();
 }
}

// module.exports = authentification
export default authentification;
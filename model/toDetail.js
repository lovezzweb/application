const mysql=require("../mysql");
let toDetail=(req,res,next)=>{
    let userId=req.query.userId;
    mysql("select * from loglist where userid=?",[userId]).then(detail=>{
        res.send({code:1,detail})
    })
}
module.exports=toDetail;
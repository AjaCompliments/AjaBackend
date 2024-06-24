const questRefModel=require("../models/questRefModel");
module.exports={
    getAllQuestRefs:(req,res)=>{
        questRefModel.getAllQuestRefs((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[])
    }
}
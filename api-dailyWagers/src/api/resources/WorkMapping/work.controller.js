import work from './work.models';
import workService from './work.service';
export default{
    findAll(req,res,next){
        // res.json({msg:"FInd all users!!"})
        work.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async create(req,res){
          try {
              const {error,value}= workService.validationSchema(req.body);
              if(error && error.details){
                  return res.status(500).json(error);
              }
              //create user
            await work.create(value)
            .then(item => res.json(item))
            .catch(err=> res.status(500).json(err));
              console.log(value);
          } catch (err) {
              console.log(err);
          }
      },
      findOne(req,res){
        const id = req.params.id;
        work.findById(id).then(data => {
            if(!data){
                return res.status(400).json({err: "emp not found."});
            }
            return res.json(data);
        })
        .catch(err => res.status(500).json(err));
    },
    update(req,res){
        const id = req.params.id
        work.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp=>{
            if(!emp){
                return res.status(400).json({err: "emp not found."});
            }
            return res.json(emp);
        })
        .catch(err => res.status(500).json(err));
    },
    delete(req,res){
        const id = req.params.id;
        work.findByIdAndRemove(id).then(data => {
            if(!data){
                return res.status(400).json({err: "user not found."});
            }
            return res.json(data);
        })
        .catch(err => res.status(500).json(err));
    },

}
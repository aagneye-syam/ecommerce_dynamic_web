var connectDB=require('../config/connection')

module.exports={

    addProduct:(product,callback)=>{
       
        connectDB.get.collection('product').insertOne(product).then((data)=>{
            callback(data.ops[0]._id)

        })
    }

}
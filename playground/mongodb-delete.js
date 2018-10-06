const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
    if(err){
        return console.log(`Unable to connect to db ${err}`);
     }

    console.log('connected to db');
    const db = client.db('ToDoApp');
     
    db.collection('Todos').deleteMany({completed:false}).then((result)=>{
        console.log(result);
        console.log(result.CommandResult.result.n);
    });



});
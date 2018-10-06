const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
    if(err){
        return console.log(`Unable to connect to db ${err}`);
     }

    console.log('connected to db');
    const db = client.db('ToDoApp');
    // db.collection('Todos').insertOne({
    //     'text':'Something here',
    //     'completed':false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Problem while inserting '+err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });



    //fetching data from DB
    const collection  = db.collection('Todos');
    var query = {completed:false};

    var cursor = collection.find(query);

    cursor.forEach((doc)=>{
       
        if(doc){
            console.log(doc);
        }else{
            console.log('no');
        }
    });

   
    client.close();
});
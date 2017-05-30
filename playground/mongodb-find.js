// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to db server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({
    //     _id: new ObjectID('592de0ece5e563441d5367e3')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

        db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({
        name: 'Celina'
    }).toArray().then((docs) => {
        if(docs.length > 0) {
            console.log('Users with selected name: ');
            console.log(JSON.stringify(docs, undefined, 2));
        } else {
            console.log('Sorry no users with selected name');
        }
        
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    db.close();
});
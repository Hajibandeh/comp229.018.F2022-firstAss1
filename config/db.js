let atlasDB="mongodb+srv://Hajibandeh:a9QCe0F97fF7lVmm@cluster018.qxx0hxo.mongodb.net/dbapp?retryWrites=true&w=majority"
let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}
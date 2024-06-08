const mongoose = require('mongoose');


const connectToDatabase = async () => {
    try {
        
        const mongoURL =  'mongodb+srv://anshumanchaturvedi91:anshu123@cluster0.vsno3mz.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0';
        if (!mongoURL) {
            throw new Error('MONGO_URL not defined in environment variables');
        }

        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        
        const db = mongoose.connection.db;

        
        const detailsCollection = db.collection("Details");
        const data = await detailsCollection.find({}).toArray();

        
        const details2Collection = db.collection("Details2");
        const catData = await details2Collection.find({}).toArray();

        
        global.Details = data;
        global.Details2 = catData;

        
        console.log(global.Details);
        console.log(global.Details2);

    } catch (error) {
        
        console.error('Database connection error:', error);
    }
};

module.exports = connectToDatabase;
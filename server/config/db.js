"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');

class Db {

    constructor() {
        this.mongoClient = mongodb.MongoClient;
        this.ObjectID = mongodb.ObjectID;
    }

    onConnect() {
        const mongoURL = "mongodb://dbuser:test@cluster0-shard-00-00-692ns.mongodb.net:27017,cluster0-shard-00-01-692ns.mongodb.net:27017,cluster0-shard-00-02-692ns.mongodb.net:27017/Whatsapp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
        console.log("connecting to db");
        return new Promise((resolve, reject) => {
            this.mongoClient.connect(mongoURL, (err, db) => {
                if (err) {
                    console.log('error here');
                    reject(err);
                } else {
                    assert.equal(null, err);
                    resolve([db, this.ObjectID]);
                }
            });
        });
    }
}
module.exports = new Db();
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIA5AWC66UR6WB2GCTF",
  secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Resumee_Users"

var params = {
    TableName: table,
    Key:{
        "userName": "Name1",
    }
};

async function getUserInfo(params){
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            JSON.stringify(data, null, 2)
        }
    });
}

async function queryUserInfo(username){
    docClient.query(username, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("QueryItem succeeded:", JSON.stringify(data, null, 2));
            JSON.stringify(data, null, 2)
        }
    });
}

async function putUserInfo(params){
    var p = {
        TableName: table,
        Item:params
    }
    docClient.put(p, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            return "Unable to read item. Error JSON:";
        } else {
            console.log("PutItem succeeded:", JSON.stringify(data, null, 2));
            return JSON.stringify(data, null, 2);
        }
    });
}

async function updateUserInfo(params){
    docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", JSON.stringify(data, null, 2));
            JSON.stringify(data, null, 2)
        }
    });    
}

export {getUserInfo, putUserInfo, queryUserInfo, updateUserInfo};



"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import required AWS SDK clients and commands for Node.js.
const client_s3_1 = require("@aws-sdk/client-s3");
const sampleClient_1 = require("./sampleClient");
// Set the parameters
const params = {
    Bucket: "BUCKET_NAME",
    Key: "KEY",
    Body: "BODY", // The content of the object. For example, 'Hello world!".
};
const run = async () => {
    // Create an Amazon S3 bucket.
    try {
        const data = await sampleClient_1.s3Client.send(new client_s3_1.CreateBucketCommand({ Bucket: params.Bucket }));
        console.log(data);
        console.log("Successfully created a bucket called ", data.Location);
        return data; // For unit tests.
    }
    catch (err) {
        console.log("Error", err);
    }
    // Create an object and upload it to the Amazon S3 bucket.
    try {
        const results = await sampleClient_1.s3Client.send(new client_s3_1.PutObjectCommand(params));
        console.log("Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key);
        return results; // For unit tests.
    }
    catch (err) {
        console.log("Error", err);
    }
};
run();

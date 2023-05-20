import { S3Client } from "@aws-sdk/client-s3";

const REGION = process.env.AWS_REGION; 

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });

const configs3 = {
    region: process.env.AWS_REGION,                                    
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    }
};

export { s3Client, configs3 };

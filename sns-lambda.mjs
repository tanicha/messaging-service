const AWS = require('aws-sdk');

const topicArn = "arn:aws:sns:us-west-1:916558475642:sns-test";

async function sendSNS(message, subject) {
    try {
        const sns = new AWS.SNS();
        const params = {
            TopicArn: topicArn,
            Message: message,
            Subject: subject
        };
        const result = await sns.publish(params).promise();

        if (result.ResponseMetadata.HTTPStatusCode === 200) {
            console.log(result);
            console.log("Notification sent successfully..!!!");
            return true;
        }
    } catch (error) {
        console.error("Error occurred while publishing notifications and the error is: ", error);
        return false;
    }
}

exports.lambdaHandler = async (event, context) => {
    console.log(`Event collected is ${JSON.stringify(event)}`);

    for (const record of event.Records) {
        const s3Bucket = record.s3.bucket.name;
        console.log(`Bucket name is ${s3Bucket}`);

        const s3Key = record.s3.object.key;
        console.log(`Bucket key name is ${s3Key}`);

        const fromPath = `s3://${s3Bucket}/${s3Key}`;
        console.log(`From path ${fromPath}`);

        const message = `The file is uploaded at S3 bucket path ${fromPath}`;
        const subject = "Processes completion Notification";

        const snsResult = await sendSNS(message, subject);

        if (snsResult) {
            console.log("Notification Sent..");
            return snsResult;
        } else {
            return false;
        }
    }
};

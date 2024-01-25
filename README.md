# sms-lambda
Multiverse Elective Project: Automating Text Messages with Amazon SNS and AWS Lambda

This project uses AWS S3 bucket as a source to be able to upload files, which will then trigger the AWS Lambda which will execute the sendSNS() and publish a notification to an AWS SNS topic where we have configured a phone number to recieve a message whenever a subscription is published to the SNS.   

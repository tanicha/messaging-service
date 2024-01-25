## Multiverse Elective Project: Automating Text Messages with Amazon SNS and AWS Lambda:

This project uses powerful AWS services for a fully automated system for sending SMS notifications. In this documentation, we will go over the steps of this project - the idea is that we use an S3 bucket as a source to be able to upload files, which will then trigger the AWS Lambda which will execute the `sendSNS()` and publish a notification to an AWS SNS topic where we have configured a phone number to recieve a message whenever a subscription is published to the SNS.

### How this service works: 

1. **AWS S3** - First, I had to create an S3 bucket, which is where all objects in S3 are stored. This is where I can upload files and folders to S3.

![image](https://github.com/tanicha/sms-lambda/assets/91624779/9420f067-cd7d-466d-a67d-0db33a3bbbd4)

---

2. **AWS Lambda** - Secondly, I had to create my Lambda function, this is where the processing of the event is occurring, it is framing and creating that specific SMS message that will be sent to the configured phone numbers that we have setup in our SNS. This Lambda function has a trigger set up to invoke the given JavaScript code (can also be found in this repo).

![image](https://github.com/tanicha/sms-lambda/assets/91624779/dfad4fa3-fefc-4dd2-b988-474b3b7722f0)

![image](https://github.com/tanicha/sms-lambda/assets/91624779/8e80a338-e189-47a4-b2c9-38b47ee2845e)

---

3. **AWS SNS** - Most importantly, I had to create an SNS topic which is a logical access point that acts as a communication channel. Then to receive messages published to a topic, I had to create a subscription to an endpoint to the topic. When you subscribe an endpoint to a topic, the endpoint begins to receive messages published to the associated topic.
![image](https://github.com/tanicha/sms-lambda/assets/91624779/d996dc78-505b-4401-b53f-8698e398126b)

---

4. Lastly, to test our service, we go back to our trigger point (the S3 bucket we created) and from here, I uploaded a dummy json file to trigger our messaging service.

![image](https://github.com/tanicha/sms-lambda/assets/91624779/0db3b5db-9ac8-4cd2-b9fa-df11022e735c)

---

5. As you can see here, as soon as that file was uploaded - I received an SMS message discussing the content of the file and a link to the file itself.

![image](https://github.com/tanicha/sms-lambda/assets/91624779/68e67943-a3d3-46e0-8306-d5992b37d13e)



# lambda-hello

## Description

Simple RestAPI
which takes requests of the following format:

`POST <host>?input=<a_string>`

And returns:

A 200 HTTP response with the following body:

`Hello, you just won 1.000.000$ for being the 1000th person to write: <a_string>. Claim your prize today!'`

The RestApi is an ApiGateway resource which uses a Lambda Function written in python 3.9 as a backend.

## Deploying the application

The resources are being deployed using AWS CDK.

To deploy use the following instructions:

1. Install CDK (see https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html).
2. Make sure you have AWS credentials profile configured in ~/.aws/credentials.
3. `export AWS_PROFILE=<profile>`
4. `cd cdk`
5. Bootstrap the cdk app your AWS account by using:
   `cdk bootstrap`
6. Deploy the application using: `cdk deploy`

## Running tests

We have tests for both the Lambda Function logic and CDK infrastructure.

### CDK tests

1. `cd cdk`
2. `npm run test`

### Python tests

1. Install pytest module by running:

`pip install pytest`

2. Run tests with:

`pytest lambda/test`

See https://docs.pytest.org/en/7.1.x/how-to/usage.html for further invokation settings.

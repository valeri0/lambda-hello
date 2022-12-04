import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

var path = require("path");

export class CdkStack extends cdk.Stack {
  private readonly LAMBDA_DIRECTORY = path.resolve(
    __dirname,
    "../../lambda/src"
  );

  private lambda: lambda.Function;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.createLambda();
    this.createApiGateway();
  }

  private createLambda() {
    this.lambda = new lambda.Function(
      this,
      `${this.stackName}-lambda-function`,
      {
        code: lambda.Code.fromAsset(this.LAMBDA_DIRECTORY),
        handler: "index.lambda_handler",
        runtime: lambda.Runtime.PYTHON_3_9,
      }
    );
  }

  private createApiGateway() {
    const api = new apigateway.LambdaRestApi(
      this,
      `${this.stackName}-api-gateway`,
      {
        handler: this.lambda,
        proxy: false,
      }
    );

    // will allow only POST <url>/hello?input=<x> requests for the lambda
    const hello_resource = api.root.addResource("hello");
    hello_resource.addMethod("POST");
  }
}

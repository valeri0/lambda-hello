import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

var path = require("path");

export class CdkStack extends cdk.Stack {
  private readonly LAMBDA_DIRECTORY = path.resolve(__dirname, "../../lambda/");

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const scammer_layer = new lambda.LayerVersion(
      this,
      `${this.stackName}-lambda-layer`,
      {
        code: lambda.Code.fromAsset(path.join(this.LAMBDA_DIRECTORY, "src")),
        compatibleRuntimes: [lambda.Runtime.PYTHON_3_9],
        description: "Scammer class layer for the hello lambda python",
      }
    );

    const lambda_function = new lambda.Function(
      this,
      `${this.stackName}-lambda-function`,
      {
        code: lambda.Code.fromAsset(
          path.join(this.LAMBDA_DIRECTORY, "index.py")
        ),
        handler: "index.lambda_handler",
        runtime: lambda.Runtime.PYTHON_3_9,
        layers: [scammer_layer],
      }
    );
  }
}

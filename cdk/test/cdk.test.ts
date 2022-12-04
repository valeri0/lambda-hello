import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as Cdk from "../lib/cdk-stack";

test("Lambda Function created", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Cdk.CdkStack(app, "MyTestStack");
  // THEN
  const template = Template.fromStack(stack);
  template.hasResourceProperties("AWS::Lambda::Function", {});
});

test("ApiGateway RestApi created", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Cdk.CdkStack(app, "MyTestStack");
  // THEN
  const template = Template.fromStack(stack);
  template.hasResourceProperties("AWS::ApiGateway::RestApi", {});
});

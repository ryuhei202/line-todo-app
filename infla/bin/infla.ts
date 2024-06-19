#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { FrontStack } from "../lib/front-stack";

const app = new cdk.App();
new FrontStack(app, "FrontStack");

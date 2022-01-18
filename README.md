# github-opat-audit #

Organization Personal Access Token Security Audit

## Overview ##

An AWS Lambda function that locates PATs (Personal Access Token(s)), and writes the results into an S3 bucket; the
audit is contained only to the GitHub organization's namespace.

## Extension(s) ##

In addition to the Lambda Function, users can optionally locally invoke the execution handler.

AUDIT_BUCKET=XXX GITHUB_ORGANIZATION_ID=YYY GITHUB_ACCESS_TOKEN=ZZZ $(npm bin)/serverless deploy

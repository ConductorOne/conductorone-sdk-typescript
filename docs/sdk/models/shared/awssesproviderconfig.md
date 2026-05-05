# AWSSESProviderConfig

AWSSESProviderConfig configures sending via a customer's AWS SES account.

## Example Usage

```typescript
import { AWSSESProviderConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AWSSESProviderConfig = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `configurationSetName`                                                                                                                 | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Optional SES configuration set name for tracking/metrics.                                                                              |
| `region`                                                                                                                               | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | AWS region where SES identities are verified (e.g., "us-east-1").                                                                      |
| `roleArn`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | IAM role ARN for sts:AssumeRole. The trust policy should require the<br/> tenant's AWS External ID (GET /api/v1/settings/aws-external-id). |
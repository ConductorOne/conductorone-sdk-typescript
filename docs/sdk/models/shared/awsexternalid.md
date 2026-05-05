# AWSExternalID

AWSExternalID contains the tenant's external ID for AWS IAM role trust policies.

## Example Usage

```typescript
import { AWSExternalID } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AWSExternalID = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `externalId`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | The external ID value to include in the AWS IAM role trust policy condition. |
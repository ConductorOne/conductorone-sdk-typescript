# SelfApprovalInput

The self approval object describes the configuration of a policy step that needs to be approved by the target of the request.

## Example Usage

```typescript
import { SelfApprovalInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SelfApprovalInput = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `fallback`                                                                                                                                     | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | Configuration to allow a fallback if the identity user of the target app user cannot be determined.                                            |
| `fallbackUserIds`                                                                                                                              | *string*[]                                                                                                                                     | :heavy_minus_sign:                                                                                                                             | Configuration to specific which users to fallback to if fallback is enabled and the identity user of the target app user cannot be determined. |
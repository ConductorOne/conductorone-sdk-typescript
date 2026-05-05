# WorkloadFederationServiceTestCELResponse

The WorkloadFederationServiceTestCELResponse message.

## Example Usage

```typescript
import { WorkloadFederationServiceTestCELResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceTestCELResponse = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `error`                                            | *string*                                           | :heavy_minus_sign:                                 | Error message if compilation or evaluation failed. |
| `expression`                                       | *string*                                           | :heavy_minus_sign:                                 | The expression that was evaluated (echo back).     |
| `matched`                                          | *boolean*                                          | :heavy_minus_sign:                                 | Whether the expression matched (returned true).    |
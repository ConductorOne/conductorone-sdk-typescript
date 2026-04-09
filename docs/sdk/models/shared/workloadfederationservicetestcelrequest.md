# WorkloadFederationServiceTestCELRequest

The WorkloadFederationServiceTestCELRequest message.

## Example Usage

```typescript
import { WorkloadFederationServiceTestCELRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceTestCELRequest = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `claimsJson`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | The claims to evaluate against, as a JSON string.<br/> Parsed into map[string]any for CEL evaluation. |
| `expression`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | The CEL expression to evaluate. Must return bool.                                                 |
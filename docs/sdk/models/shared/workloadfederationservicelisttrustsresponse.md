# WorkloadFederationServiceListTrustsResponse

The WorkloadFederationServiceListTrustsResponse message.

## Example Usage

```typescript
import { WorkloadFederationServiceListTrustsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceListTrustsResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.WorkloadFederationTrust](../../../sdk/models/shared/workloadfederationtrust.md)[] | :heavy_minus_sign:                                                                        | The list field.                                                                           |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | The nextPageToken field.                                                                  |
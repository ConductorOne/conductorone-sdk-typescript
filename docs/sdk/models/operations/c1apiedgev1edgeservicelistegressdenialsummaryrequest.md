# C1ApiEdgeV1EdgeServiceListEgressDenialSummaryRequest

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListEgressDenialSummaryRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListEgressDenialSummaryRequest = {
  appId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `appId`                 | *string*                | :heavy_check_mark:      | N/A                     |
| `id`                    | *string*                | :heavy_check_mark:      | N/A                     |
| `destHost`              | *string*                | :heavy_minus_sign:      | N/A                     |
| `destHostSuffix`        | *string*                | :heavy_minus_sign:      | N/A                     |
| `egressEnforcementMode` | *string*                | :heavy_minus_sign:      | N/A                     |
| `egressPolicyVerdict`   | *string*                | :heavy_minus_sign:      | N/A                     |
| `limit`                 | *number*                | :heavy_minus_sign:      | N/A                     |
| `principalUserId`       | *string*                | :heavy_minus_sign:      | N/A                     |
| `since`                 | *number*                | :heavy_minus_sign:      | N/A                     |
| `until`                 | *number*                | :heavy_minus_sign:      | N/A                     |
# C1ApiEdgeV1EdgeServiceGetEgressTrafficEventRequest

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceGetEgressTrafficEventRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceGetEgressTrafficEventRequest = {
  appId: "<id>",
  id: "<id>",
  eventId: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `appId`                       | *string*                      | :heavy_check_mark:            | N/A                           |
| `id`                          | *string*                      | :heavy_check_mark:            | N/A                           |
| `eventId`                     | *string*                      | :heavy_check_mark:            | N/A                           |
| `eventTime`                   | *number*                      | :heavy_minus_sign:            | N/A                           |
| `includeParsedVerdictReasons` | *boolean*                     | :heavy_minus_sign:            | N/A                           |
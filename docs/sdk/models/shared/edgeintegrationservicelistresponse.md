# EdgeIntegrationServiceListResponse

EdgeIntegrationServiceListResponse is one page of integration metadata.

## Example Usage

```typescript
import { EdgeIntegrationServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeIntegrationServiceListResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `list`                                                                    | [shared.EdgeIntegration](../../../sdk/models/shared/edgeintegration.md)[] | :heavy_minus_sign:                                                        | Integrations in the requested application.                                |
| `nextPageToken`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | Token for the next page; empty when complete.                             |
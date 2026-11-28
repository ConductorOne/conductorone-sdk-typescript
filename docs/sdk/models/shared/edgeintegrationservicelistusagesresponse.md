# EdgeIntegrationServiceListUsagesResponse

EdgeIntegrationServiceListUsagesResponse contains matching Edges in a candidate page.

## Example Usage

```typescript
import { EdgeIntegrationServiceListUsagesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeIntegrationServiceListUsagesResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `list`                                                                              | [shared.EdgeIntegrationUsage](../../../sdk/models/shared/edgeintegrationusage.md)[] | :heavy_minus_sign:                                                                  | Saved references found in this page. May be empty even when another page exists.    |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | Continue scanning with this token, even if list is empty.                           |
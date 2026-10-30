# GetAttributionRollupsResponse

GetAttributionRollupsResponse contains one page of ranked attribution groups.

## Example Usage

```typescript
import { GetAttributionRollupsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAttributionRollupsResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `groups`                                                                    | [shared.AttributionGroup](../../../sdk/models/shared/attributiongroup.md)[] | :heavy_minus_sign:                                                          | Groups ordered by settled spend descending, then key ascending.             |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token for the next page. Empty when no more groups remain.                  |
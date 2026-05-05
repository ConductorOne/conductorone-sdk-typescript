# SearchEmailAuditEventsResponse

The SearchEmailAuditEventsResponse message.

## Example Usage

```typescript
import { SearchEmailAuditEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchEmailAuditEventsResponse = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `list`                                                      | Record<string, *any*>[]                                     | :heavy_minus_sign:                                          | OCSF EmailActivity events as Struct for frontend rendering. |
| `nextPageToken`                                             | *string*                                                    | :heavy_minus_sign:                                          | Token for next page. Empty when no more pages.              |
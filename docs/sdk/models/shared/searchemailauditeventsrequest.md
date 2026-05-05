# SearchEmailAuditEventsRequest

The SearchEmailAuditEventsRequest message.

## Example Usage

```typescript
import { SearchEmailAuditEventsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchEmailAuditEventsRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `pageSize`                                              | *number*                                                | :heavy_minus_sign:                                      | Maximum results per page (0 = server default, max 100). |
| `pageToken`                                             | *string*                                                | :heavy_minus_sign:                                      | Pagination token from previous response.                |
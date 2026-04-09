# PaperSecretServiceSearchAuditEventsRequest

PaperSecretServiceSearchAuditEventsRequest searches audit events for a secret
 owned by the calling user. Only the secret creator may query events. Results
 are sanitized to include only time, event type, and actor information.

## Example Usage

```typescript
import { PaperSecretServiceSearchAuditEventsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretServiceSearchAuditEventsRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `pageSize`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | Maximum number of results per page (0 uses server default, max 100). |
| `pageToken`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | Pagination token from a previous response's next_page_token.         |
| `vaultId`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | Required. The vault ID of the secret whose audit events to retrieve. |
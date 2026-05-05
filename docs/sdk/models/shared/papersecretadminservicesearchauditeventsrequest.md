# PaperSecretAdminServiceSearchAuditEventsRequest

The PaperSecretAdminServiceSearchAuditEventsRequest message.

## Example Usage

```typescript
import { PaperSecretAdminServiceSearchAuditEventsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretAdminServiceSearchAuditEventsRequest = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `actorEmail`                                                  | *string*                                                      | :heavy_minus_sign:                                            | Filter by external email (partial match via full-text search) |
| `actorUserId`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Filter by C1 user ID (internal users)                         |
| `clientIp`                                                    | *string*                                                      | :heavy_minus_sign:                                            | Filter by client IP (exact match)                             |
| `pageSize`                                                    | *number*                                                      | :heavy_minus_sign:                                            | The pageSize field.                                           |
| `pageToken`                                                   | *string*                                                      | :heavy_minus_sign:                                            | The pageToken field.                                          |
| `vaultId`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Filter by specific vault                                      |
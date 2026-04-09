# PaperSecretAdminServiceSearchAuditEventsResponse

The PaperSecretAdminServiceSearchAuditEventsResponse message.

## Example Usage

```typescript
import { PaperSecretAdminServiceSearchAuditEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretAdminServiceSearchAuditEventsResponse = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                               | Record<string, *any*>[]                                                                                              | :heavy_minus_sign:                                                                                                   | List contains OCSF events directly as JSON structs.<br/> Follows the same pattern as SystemLogServiceListEventsResponse. |
| `nextPageToken`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The nextPageToken field.                                                                                             |
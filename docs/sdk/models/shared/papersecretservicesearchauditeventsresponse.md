# PaperSecretServiceSearchAuditEventsResponse

PaperSecretServiceSearchAuditEventsResponse contains a page of audit events
 for the requested secret.

## Example Usage

```typescript
import { PaperSecretServiceSearchAuditEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretServiceSearchAuditEventsResponse = {};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                                                    | Record<string, *any*>[]                                                                                                                                   | :heavy_minus_sign:                                                                                                                                        | Sanitized OCSF events containing only time, event type, and actor fields.<br/> Sensitive fields such as IP addresses, messages, and raw payloads are removed. |
| `nextPageToken`                                                                                                                                           | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Token to retrieve the next page of results. Empty when no more pages exist.                                                                               |
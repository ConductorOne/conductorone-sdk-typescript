# GetSyncErrorDigestResponse

GetSyncErrorDigestResponse contains a fresh bounded summary of recent errors, using structured errors and heuristic activity matching.

## Example Usage

```typescript
import { GetSyncErrorDigestResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetSyncErrorDigestResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `entries`                                                                           | [shared.SyncErrorDigestEntry](../../../sdk/models/shared/syncerrordigestentry.md)[] | :heavy_minus_sign:                                                                  | Most frequent distinct redacted messages, with deterministic tie ordering.          |
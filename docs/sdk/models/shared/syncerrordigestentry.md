# SyncErrorDigestEntry

SyncErrorDigestEntry groups occurrences sharing the same redacted text.

## Example Usage

```typescript
import { SyncErrorDigestEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncErrorDigestEntry = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `count`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Occurrences observed in the bounded scan, not an exhaustive log count.                        |
| `errorClass`                                                                                  | [shared.ErrorClass](../../../sdk/models/shared/errorclass.md)                                 | :heavy_minus_sign:                                                                            | Likely failure family.                                                                        |
| `firstSeenAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastSeenAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `step`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Known sync step name, absent if it cannot be established.                                     |
| `summary`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Distinct redacted message, capped at 256 bytes.                                               |
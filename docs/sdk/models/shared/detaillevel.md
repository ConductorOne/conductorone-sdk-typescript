# ~~DetailLevel~~

Deprecated: no longer honored. Every finding notification renders full
 detail. Still accepted and round-tripped so a stored value is not
 destroyed.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { DetailLevel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DetailLevel = "FINDING_NOTIFY_DETAIL_LEVEL_FULL_DETAIL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FINDING_NOTIFY_DETAIL_LEVEL_UNSPECIFIED" | "FINDING_NOTIFY_DETAIL_LEVEL_SUMMARY" | "FINDING_NOTIFY_DETAIL_LEVEL_FULL_DETAIL" | Unrecognized<string>
```
# LinkFilterConfigAction

Action taken on a disallowed link. Unspecified = REDACT.

## Example Usage

```typescript
import { LinkFilterConfigAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LinkFilterConfigAction = "LINK_FILTER_ACTION_REDACT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"LINK_FILTER_ACTION_UNSPECIFIED" | "LINK_FILTER_ACTION_REDACT" | "LINK_FILTER_ACTION_ANNOTATE" | Unrecognized<string>
```
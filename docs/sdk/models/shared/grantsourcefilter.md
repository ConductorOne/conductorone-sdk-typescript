# GrantSourceFilter

Restricts the step to grants of either DIRECT (grants the user holds directly,
 including grants that are also inherited) or UNSPECIFIED (all grants).
 Composes with every inclusion mode, including inclusion_list_cel.

## Example Usage

```typescript
import { GrantSourceFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantSourceFilter = "GRANT_SOURCE_FILTER_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"GRANT_SOURCE_FILTER_UNSPECIFIED" | "GRANT_SOURCE_FILTER_DIRECT" | Unrecognized<string>
```
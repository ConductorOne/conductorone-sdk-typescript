# GroupBy

How requests are combined into entries. Defaults to GROUP_BY_API_KEY.

## Example Usage

```typescript
import { GroupBy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GroupBy = "GROUP_BY_API_KEY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"GROUP_BY_UNSPECIFIED" | "GROUP_BY_API_KEY" | "GROUP_BY_USER" | Unrecognized<string>
```
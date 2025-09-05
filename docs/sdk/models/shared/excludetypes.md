# ExcludeTypes

## Example Usage

```typescript
import { ExcludeTypes } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExcludeTypes = "USER_TYPE_SERVICE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"USER_TYPE_UNSPECIFIED" | "USER_TYPE_SYSTEM" | "USER_TYPE_HUMAN" | "USER_TYPE_SERVICE" | "USER_TYPE_AGENT" | Unrecognized<string>
```
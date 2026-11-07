# Window

How the limit counts requests.

## Example Usage

```typescript
import { Window } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Window = "WINDOW_CONCURRENT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"WINDOW_UNSPECIFIED" | "WINDOW_PER_HOUR" | "WINDOW_CONCURRENT" | Unrecognized<string>
```
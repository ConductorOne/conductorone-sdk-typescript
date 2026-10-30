# MySpendBlockState

Whether this denial episode remains open.

## Example Usage

```typescript
import { MySpendBlockState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MySpendBlockState = "SPEND_BLOCK_STATE_CLOSED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SPEND_BLOCK_STATE_UNSPECIFIED" | "SPEND_BLOCK_STATE_OPEN" | "SPEND_BLOCK_STATE_CLOSED" | Unrecognized<string>
```
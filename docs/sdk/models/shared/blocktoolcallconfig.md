# BlockToolCallConfig

BlockToolCallConfig unconditionally denies the tool call when its hook's
 filter matches. Only valid for HOOK_EVENT_TYPE_POST_TOOL_USE.

## Example Usage

```typescript
import { BlockToolCallConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BlockToolCallConfig = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `message`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | Message shown when the tool call is denied. Empty falls back to a<br/> generic default. |
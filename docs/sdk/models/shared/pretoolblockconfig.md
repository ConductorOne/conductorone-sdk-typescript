# PreToolBlockConfig

PreToolBlockConfig unconditionally denies the tool call before it executes
 when its hook's filter matches. Only valid for HOOK_EVENT_TYPE_PRE_TOOL_USE.

## Example Usage

```typescript
import { PreToolBlockConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PreToolBlockConfig = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `message`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | Message shown when the tool call is denied. Empty falls back to a<br/> generic default. |
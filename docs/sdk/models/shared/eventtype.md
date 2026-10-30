# EventType

Event the stamped hook fires on. When UNSPECIFIED, instantiation falls
 back to post_hook. Required to mint a pre-output hook, which post_hook
 cannot express.

## Example Usage

```typescript
import { EventType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EventType = "HOOK_SPEC_EVENT_TYPE_PRE_TOOL_USE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"HOOK_SPEC_EVENT_TYPE_UNSPECIFIED" | "HOOK_SPEC_EVENT_TYPE_PRE_TOOL_USE" | "HOOK_SPEC_EVENT_TYPE_POST_TOOL_USE" | "HOOK_SPEC_EVENT_TYPE_PRE_OUTPUT" | Unrecognized<string>
```
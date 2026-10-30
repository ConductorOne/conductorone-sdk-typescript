# BlockOutputConfig

BlockOutputConfig denies the in-flight response chunk when its hook's
 filter matches. Only valid for HOOK_EVENT_TYPE_PRE_OUTPUT.

## Example Usage

```typescript
import { BlockOutputConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BlockOutputConfig = {};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                                                     | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Message shown to the user when this hook blocks the response. Empty<br/> falls back to the curating AgentGuardrailRule's deny_reason, then to a<br/> generic default. |
| `surfaces`                                                                                                                                                    | [shared.Surfaces](../../../sdk/models/shared/surfaces.md)[]                                                                                                   | :heavy_minus_sign:                                                                                                                                            | Output surfaces this hook applies to. Empty means none — the hook is<br/> inert until at least one surface is explicitly selected.                            |
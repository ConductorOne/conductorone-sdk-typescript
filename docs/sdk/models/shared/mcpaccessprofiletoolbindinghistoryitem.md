# MCPAccessProfileToolBindingHistoryItem

list_index is the mcp_tool_id on the per-profile surface, or the
 access_profile_id on the per-tool surface.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingHistoryItem } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingHistoryItem = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `changeKind`                                                                                                                              | [shared.MCPAccessProfileToolBindingHistoryItemChangeKind](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryitemchangekind.md) | :heavy_minus_sign:                                                                                                                        | The changeKind field.                                                                                                                     |
| `listIndex`                                                                                                                               | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The listIndex field.                                                                                                                      |
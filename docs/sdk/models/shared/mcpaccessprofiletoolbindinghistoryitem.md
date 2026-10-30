# MCPAccessProfileToolBindingHistoryItem

MCPAccessProfileToolBindingHistoryItem is a single binding added or removed in
 a transaction.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingHistoryItem } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingHistoryItem = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `changeKind`                                                                                                                                     | [shared.MCPAccessProfileToolBindingHistoryItemChangeKind](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryitemchangekind.md)        | :heavy_minus_sign:                                                                                                                               | Whether this binding was added or removed.                                                                                                       |
| `listIndex`                                                                                                                                      | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The identifier of the other side of the binding: the tool ID when viewing a<br/> toolset's history, or the toolset ID when viewing a tool's history. |
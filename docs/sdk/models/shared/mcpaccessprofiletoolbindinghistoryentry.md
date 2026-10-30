# MCPAccessProfileToolBindingHistoryEntry

MCPAccessProfileToolBindingHistoryEntry is a single change-history record
 capturing the tool bindings added or removed in one transaction.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingHistoryEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingHistoryEntry = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                 | [shared.MCPAccessProfileToolBindingHistoryItem](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryitem.md)[] | :heavy_minus_sign:                                                                                                      | The bindings added or removed in this change.                                                                           |
| `metadata`                                                                                                              | [shared.ListHistoryEntryMetadata](../../../sdk/models/shared/listhistoryentrymetadata.md)                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
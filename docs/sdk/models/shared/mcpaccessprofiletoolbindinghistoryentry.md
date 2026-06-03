# MCPAccessProfileToolBindingHistoryEntry

MCPAccessProfileToolBindingHistoryEntry is one Tx.Commit's worth of
 adds/removes against the binding list. No snapshot field: the lists
 declare snapshot = false.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingHistoryEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingHistoryEntry = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                 | [shared.MCPAccessProfileToolBindingHistoryItem](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryitem.md)[] | :heavy_minus_sign:                                                                                                      | The items field.                                                                                                        |
| `listHistoryEntryMetadata`                                                                                              | [shared.ListHistoryEntryMetadata](../../../sdk/models/shared/listhistoryentrymetadata.md)                               | :heavy_minus_sign:                                                                                                      | ListHistoryEntryMetadata is the per-transaction metadata envelope.                                                      |
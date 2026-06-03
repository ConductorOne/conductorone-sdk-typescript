# MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse

The MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse message.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse =
  {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                    | [shared.MCPAccessProfileToolBindingHistoryEntry](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryentry.md)[] | :heavy_minus_sign:                                                                                                        | The list field.                                                                                                           |
| `nextPageToken`                                                                                                           | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The nextPageToken field.                                                                                                  |
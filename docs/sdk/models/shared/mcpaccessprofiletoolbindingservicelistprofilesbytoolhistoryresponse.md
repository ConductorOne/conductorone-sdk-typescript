# MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse

The MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse message.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse =
  {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                    | [shared.MCPAccessProfileToolBindingHistoryEntry](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryentry.md)[] | :heavy_minus_sign:                                                                                                        | The list field.                                                                                                           |
| `nextPageToken`                                                                                                           | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The nextPageToken field.                                                                                                  |
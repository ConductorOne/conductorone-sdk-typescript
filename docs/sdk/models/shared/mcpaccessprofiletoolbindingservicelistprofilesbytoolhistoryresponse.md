# MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse

Contains a page of change-history entries for the toolsets one tool has belonged to,
 sorted newest first.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse =
  {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                    | [shared.MCPAccessProfileToolBindingHistoryEntry](../../../sdk/models/shared/mcpaccessprofiletoolbindinghistoryentry.md)[] | :heavy_minus_sign:                                                                                                        | The page of history entries, newest first.                                                                                |
| `nextPageToken`                                                                                                           | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Pagination token for the next page, or empty if there are no more results.                                                |
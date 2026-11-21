# MCPPromptServiceListHistoryResponse

MCPPromptServiceListHistoryResponse contains one page of prompt history.

## Example Usage

```typescript
import { MCPPromptServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPPromptServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `list`                                                                                | [shared.MCPPromptHistoryEntry](../../../sdk/models/shared/mcpprompthistoryentry.md)[] | :heavy_minus_sign:                                                                    | Snapshots and change metadata, newest first.                                          |
| `nextPageToken`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | Token for the next page, or empty for the final page.                                 |
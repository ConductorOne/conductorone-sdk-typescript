# MCPPromptServiceListResponse

MCPPromptServiceListResponse contains one page of stored prompts.

## Example Usage

```typescript
import { MCPPromptServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPPromptServiceListResponse = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `nextPageToken`                                               | *string*                                                      | :heavy_minus_sign:                                            | Token for the next page, or empty for the final page.         |
| `prompts`                                                     | [shared.MCPPrompt](../../../sdk/models/shared/mcpprompt.md)[] | :heavy_minus_sign:                                            | Stored prompts.                                               |
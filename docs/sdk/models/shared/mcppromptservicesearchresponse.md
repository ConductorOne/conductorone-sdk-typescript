# MCPPromptServiceSearchResponse

MCPPromptServiceSearchResponse contains matching prompt metadata.

## Example Usage

```typescript
import { MCPPromptServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPPromptServiceSearchResponse = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `list`                                                        | [shared.MCPPrompt](../../../sdk/models/shared/mcpprompt.md)[] | :heavy_minus_sign:                                            | Matching prompts.                                             |
| `nextPageToken`                                               | *string*                                                      | :heavy_minus_sign:                                            | Token for the next page, or empty for the final page.         |
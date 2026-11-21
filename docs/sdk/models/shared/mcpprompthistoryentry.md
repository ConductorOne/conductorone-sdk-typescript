# MCPPromptHistoryEntry

MCPPromptHistoryEntry contains one version of a prompt and its change metadata.

## Example Usage

```typescript
import { MCPPromptHistoryEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPPromptHistoryEntry = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `metadata`                                                                        | [shared.HistoryEntryMetadata](../../../sdk/models/shared/historyentrymetadata.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `snapshot`                                                                        | [shared.MCPPrompt](../../../sdk/models/shared/mcpprompt.md)                       | :heavy_minus_sign:                                                                | N/A                                                                               |
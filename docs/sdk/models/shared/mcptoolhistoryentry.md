# MCPToolHistoryEntry

MCPToolHistoryEntry is one version of an MCP tool and its history metadata.

## Example Usage

```typescript
import { MCPToolHistoryEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolHistoryEntry = {};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `historyEntryMetadata`                                                                                                                                                                         | [shared.HistoryEntryMetadata](../../../sdk/models/shared/historyentrymetadata.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                             | HistoryEntryMetadata is the shared metadata envelope embedded on every<br/> per-service HistoryEntry. The strongly-typed snapshot lives on the<br/> per-service entry message alongside this envelope. |
| `mcpTool`                                                                                                                                                                                      | [shared.MCPTool](../../../sdk/models/shared/mcptool.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | MCPTool represents metadata about individual tools discovered from an MCP server.                                                                                                              |
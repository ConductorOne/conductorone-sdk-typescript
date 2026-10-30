# MCPResourceHistoryEntry

MCPResourceHistoryEntry is one version of an MCP resource and its history metadata.

## Example Usage

```typescript
import { MCPResourceHistoryEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPResourceHistoryEntry = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `metadata`                                                                        | [shared.HistoryEntryMetadata](../../../sdk/models/shared/historyentrymetadata.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `snapshot`                                                                        | [shared.MCPResource](../../../sdk/models/shared/mcpresource.md)                   | :heavy_minus_sign:                                                                | N/A                                                                               |
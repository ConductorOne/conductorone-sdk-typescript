# MCPToolEnablementConfig

MCPToolEnablementConfig controls what happens when a new tool is discovered on an MCP server.
 Tools that already exist are not affected.

## Example Usage

```typescript
import { MCPToolEnablementConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolEnablementConfig = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `classificationRules`                                                                           | [shared.MCPToolEnablementRules](../../../sdk/models/shared/mcptoolenablementrules.md)           | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `mode`                                                                                          | [shared.MCPToolEnablementConfigMode](../../../sdk/models/shared/mcptoolenablementconfigmode.md) | :heavy_minus_sign:                                                                              | How newly discovered tools are enabled.                                                         |
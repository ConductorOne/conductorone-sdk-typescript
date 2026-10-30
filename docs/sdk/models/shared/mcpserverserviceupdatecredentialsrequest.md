# MCPServerServiceUpdateCredentialsRequest

MCPServerServiceUpdateCredentialsRequest updates the auth credentials and config fields
 for an existing MCP server. Secrets are sealed before storage.

## Example Usage

```typescript
import { MCPServerServiceUpdateCredentialsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerServiceUpdateCredentialsRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `externalConfig`                                                                        | [shared.MCPServerExternalConfig](../../../sdk/models/shared/mcpserverexternalconfig.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `hostedConfig`                                                                          | [shared.MCPServerHostedConfig](../../../sdk/models/shared/mcpserverhostedconfig.md)     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `updateMask`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
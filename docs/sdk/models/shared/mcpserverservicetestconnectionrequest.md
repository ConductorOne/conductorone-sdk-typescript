# MCPServerServiceTestConnectionRequest

MCPServerServiceTestConnectionRequest exercises a configured external or
 hosted MCP server against the upstream and reports whether credentials accept
 a real initialize + tools/list round trip.

## Example Usage

```typescript
import { MCPServerServiceTestConnectionRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerServiceTestConnectionRequest = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | App ID of an existing external MCP connector. When set together with<br/> connector_id, the request runs in edit mode (see above). |
| `connectorId`                                                                                                                  | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Connector ID of an existing external MCP connector. When set together<br/> with app_id, the request runs in edit mode (see above). |
| `externalConfig`                                                                                                               | [shared.MCPServerExternalConfig](../../../sdk/models/shared/mcpserverexternalconfig.md)                                        | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `hostedConfig`                                                                                                                 | [shared.MCPServerHostedConfig](../../../sdk/models/shared/mcpserverhostedconfig.md)                                            | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `updateMask`                                                                                                                   | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
# MCPAccessProfileServiceListRequestableConnectorsResponse

MCPAccessProfileServiceListRequestableConnectorsResponse returns connector references
 that have requestable MCP access profiles.

## Example Usage

```typescript
import { MCPAccessProfileServiceListRequestableConnectorsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileServiceListRequestableConnectorsResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `connectors`                                                                        | [shared.RequestableConnector](../../../sdk/models/shared/requestableconnector.md)[] | :heavy_minus_sign:                                                                  | List of connectors with requestable MCP access profiles.                            |
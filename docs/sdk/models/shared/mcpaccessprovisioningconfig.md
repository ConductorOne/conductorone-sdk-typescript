# MCPAccessProvisioningConfig

MCPAccessProvisioningConfig selects toolsets and how users receive access.

## Example Usage

```typescript
import { MCPAccessProvisioningConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProvisioningConfig = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `accessLevel`                                                                                                                   | [shared.AccessLevel](../../../sdk/models/shared/accesslevel.md)                                                                 | :heavy_minus_sign:                                                                                                              | Legacy shared level used when a nested access level is unspecified.<br/> Unspecified defaults to read-only access for provisioning. |
| `automatic`                                                                                                                     | [shared.MCPAutomaticAccessProvisioning](../../../sdk/models/shared/mcpautomaticaccessprovisioning.md)                           | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `request`                                                                                                                       | [shared.MCPRequestAccessProvisioning](../../../sdk/models/shared/mcprequestaccessprovisioning.md)                               | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
# VirtualMCPServerServiceCreateRequest

VirtualMCPServerServiceCreateRequest creates an active Virtual MCP Server
 with Raw tool presentation and either a mapped source or explicit tool
 assignments.

This message contains a oneof named composition. Only a single field of the following list may be set at a time:
  - mappedSource
  - assignedTools


## Example Usage

```typescript
import { VirtualMCPServerServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPServerServiceCreateRequest = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `allowPersonalSources`                                                                                                               | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | Permit owner-scoped personal MCP sources on supported compositions.                                                                  |
| `assignedTools`                                                                                                                      | [shared.VirtualMCPAssignedTools](../../../sdk/models/shared/virtualmcpassignedtools.md)                                              | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `displayName`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Human-readable name shown to administrators and users.                                                                               |
| `mappedSource`                                                                                                                       | [shared.VirtualMCPMappedSource](../../../sdk/models/shared/virtualmcpmappedsource.md)                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `presentation`                                                                                                                       | [shared.VirtualMCPPresentation](../../../sdk/models/shared/virtualmcppresentation.md)                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `requireDeviceTrust`                                                                                                                 | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | When true, require an active ConductorOne-managed device in addition to<br/> DPoP. require_device_trust=true requires require_dpop=true. |
| `requireDpop`                                                                                                                        | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | When true, require DPoP proof-of-possession for OAuth access tokens.                                                                 |
| `slug`                                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Initial canonical lowercase route segment, unique for the tenant.                                                                    |
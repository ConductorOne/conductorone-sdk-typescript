# VirtualMCPServerServiceSummaryResponse

VirtualMCPServerServiceSummaryResponse contains tenant-wide counts for
 Virtual MCP Servers that are not deleted.

## Example Usage

```typescript
import { VirtualMCPServerServiceSummaryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPServerServiceSummaryResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `activeCount`                                                                                  | *number*                                                                                       | :heavy_minus_sign:                                                                             | Number of active servers.                                                                      |
| `activeWithoutRequirementsCount`                                                               | *number*                                                                                       | :heavy_minus_sign:                                                                             | Number of active servers that require neither DPoP nor device trust.                           |
| `disabledCount`                                                                                | *number*                                                                                       | :heavy_minus_sign:                                                                             | Number of disabled servers.                                                                    |
| `mappedSources`                                                                                | [shared.VirtualMCPMappedSource](../../../sdk/models/shared/virtualmcpmappedsource.md)[]        | :heavy_minus_sign:                                                                             | Distinct mapped sources used by servers. Use these values to build source<br/> filters for Search. |
| `usersWithAccessCount`                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | Number of distinct users with a `use` grant on at least one active server.                     |
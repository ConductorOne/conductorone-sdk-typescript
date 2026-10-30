# VirtualMCPMappedSource

VirtualMCPMappedSource identifies one app-scoped MCP source.

## Example Usage

```typescript
import { VirtualMCPMappedSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPMappedSource = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `appId`                                                        | *string*                                                       | :heavy_minus_sign:                                             | Application that owns the MCP source.                          |
| `connectorId`                                                  | *string*                                                       | :heavy_minus_sign:                                             | Connector that provides the MCP source within the application. |
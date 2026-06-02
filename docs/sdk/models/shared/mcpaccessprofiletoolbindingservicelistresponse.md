# MCPAccessProfileToolBindingServiceListResponse

MCPAccessProfileToolBindingServiceListResponse returns tool bindings.

## Example Usage

```typescript
import { MCPAccessProfileToolBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfileToolBindingServiceListResponse = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `bindings`                                                                                        | [shared.MCPAccessProfileToolBinding](../../../sdk/models/shared/mcpaccessprofiletoolbinding.md)[] | :heavy_minus_sign:                                                                                | List of tool bindings.                                                                            |
| `nextPageToken`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | Token for next page.                                                                              |
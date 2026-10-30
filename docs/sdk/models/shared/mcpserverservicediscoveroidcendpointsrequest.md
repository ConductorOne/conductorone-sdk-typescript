# MCPServerServiceDiscoverOIDCEndpointsRequest

MCPServerServiceDiscoverOIDCEndpointsRequest fetches the OpenID Connect discovery
 document for a given issuer URL.

## Example Usage

```typescript
import { MCPServerServiceDiscoverOIDCEndpointsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerServiceDiscoverOIDCEndpointsRequest = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `issuerUrl`                                                                                                             | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The issuer URL (e.g. "https://accounts.google.com"). The server appends<br/> /.well-known/openid-configuration to this URL. |
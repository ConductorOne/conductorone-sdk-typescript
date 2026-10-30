# C1ApiAiGovernanceV1MCPServerServiceDiscoverOIDCEndpointsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPServerServiceDiscoverOIDCEndpointsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPServerServiceDiscoverOIDCEndpointsResponse = {
  contentType: "<value>",
  statusCode: 654205,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `mcpServerServiceDiscoverOIDCEndpointsResponse`                                                                                     | [shared.MCPServerServiceDiscoverOIDCEndpointsResponse](../../../sdk/models/shared/mcpserverservicediscoveroidcendpointsresponse.md) | :heavy_minus_sign:                                                                                                                  | MCPServerServiceDiscoverOIDCEndpointsResponse returns the discovered OAuth2 endpoints.                                              |
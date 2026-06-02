# C1ApiAiGovernanceV1MCPAccessProfileServiceGetByAppEntitlementIdResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceGetByAppEntitlementIdResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileServiceGetByAppEntitlementIdResponse = {
    contentType: "<value>",
    statusCode: 86440,
  };
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                     | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response content type for this operation                                                                                                     |
| `statusCode`                                                                                                                                      | *number*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response status code for this operation                                                                                                      |
| `rawResponse`                                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                             | :heavy_check_mark:                                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                                           |
| `mcpAccessProfileServiceGetByAppEntitlementIdResponse`                                                                                            | [shared.MCPAccessProfileServiceGetByAppEntitlementIdResponse](../../../sdk/models/shared/mcpaccessprofileservicegetbyappentitlementidresponse.md) | :heavy_minus_sign:                                                                                                                                | MCPAccessProfileServiceGetByAppEntitlementIdResponse returns the matched profile.                                                                 |
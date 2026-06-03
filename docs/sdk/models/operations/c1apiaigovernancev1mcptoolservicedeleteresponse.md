# C1ApiAiGovernanceV1MCPToolServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPToolServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPToolServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 626392,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `mcpToolServiceDeleteResponse`                                                                    | [shared.MCPToolServiceDeleteResponse](../../../sdk/models/shared/mcptoolservicedeleteresponse.md) | :heavy_minus_sign:                                                                                | MCPToolServiceDeleteResponse confirms deletion.                                                   |
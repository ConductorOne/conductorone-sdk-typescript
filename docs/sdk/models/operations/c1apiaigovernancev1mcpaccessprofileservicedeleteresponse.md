# C1ApiAiGovernanceV1MCPAccessProfileServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPAccessProfileServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 446944,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `mcpAccessProfileServiceDeleteResponse`                                                                             | [shared.MCPAccessProfileServiceDeleteResponse](../../../sdk/models/shared/mcpaccessprofileservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                  | MCPAccessProfileServiceDeleteResponse confirms deletion.                                                            |
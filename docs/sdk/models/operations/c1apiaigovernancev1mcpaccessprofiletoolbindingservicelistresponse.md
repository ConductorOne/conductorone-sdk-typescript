# C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListResponse = {
  contentType: "<value>",
  statusCode: 224958,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `mcpAccessProfileToolBindingServiceListResponse`                                                                                      | [shared.MCPAccessProfileToolBindingServiceListResponse](../../../sdk/models/shared/mcpaccessprofiletoolbindingservicelistresponse.md) | :heavy_minus_sign:                                                                                                                    | MCPAccessProfileToolBindingServiceListResponse returns tool bindings.                                                                 |
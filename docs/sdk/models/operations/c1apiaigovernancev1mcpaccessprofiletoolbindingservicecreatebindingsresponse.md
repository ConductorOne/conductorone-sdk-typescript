# C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceCreateBindingsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceCreateBindingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceCreateBindingsResponse =
    {
      contentType: "<value>",
      statusCode: 263501,
    };
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response content type for this operation                                                                                             |
| `statusCode`                                                                                                                              | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response status code for this operation                                                                                              |
| `rawResponse`                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                     | :heavy_check_mark:                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                   |
| `mcpAccessProfileToolBindingServiceCreateResponse`                                                                                        | [shared.MCPAccessProfileToolBindingServiceCreateResponse](../../../sdk/models/shared/mcpaccessprofiletoolbindingservicecreateresponse.md) | :heavy_minus_sign:                                                                                                                        | MCPAccessProfileToolBindingServiceCreateResponse returns created bindings.                                                                |
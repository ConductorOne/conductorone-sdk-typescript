# C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceDeleteBindingsResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceDeleteBindingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceDeleteBindingsResponse =
    {
      contentType: "<value>",
      statusCode: 173292,
    };
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response content type for this operation                                                                                             |
| `statusCode`                                                                                                                              | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response status code for this operation                                                                                              |
| `rawResponse`                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                     | :heavy_check_mark:                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                   |
| `mcpAccessProfileToolBindingServiceDeleteResponse`                                                                                        | [shared.MCPAccessProfileToolBindingServiceDeleteResponse](../../../sdk/models/shared/mcpaccessprofiletoolbindingservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                                        | MCPAccessProfileToolBindingServiceDeleteResponse confirms deletion.                                                                       |
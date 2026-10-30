# C1ApiAiGovernanceV1ToolGatesServiceCreateResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1ToolGatesServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1ToolGatesServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 930719,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `toolGatesServiceCreateResponse`                                                                      | [shared.ToolGatesServiceCreateResponse](../../../sdk/models/shared/toolgatesservicecreateresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |
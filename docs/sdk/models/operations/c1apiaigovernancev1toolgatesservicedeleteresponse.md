# C1ApiAiGovernanceV1ToolGatesServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1ToolGatesServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1ToolGatesServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 627086,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `toolGatesServiceDeleteResponse`                                                                      | [shared.ToolGatesServiceDeleteResponse](../../../sdk/models/shared/toolgatesservicedeleteresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |
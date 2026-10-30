# C1ApiAiGovernanceV1ToolGatesServiceGetResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1ToolGatesServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1ToolGatesServiceGetResponse = {
  contentType: "<value>",
  statusCode: 146766,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `toolGatesServiceGetResponse`                                                                   | [shared.ToolGatesServiceGetResponse](../../../sdk/models/shared/toolgatesservicegetresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |
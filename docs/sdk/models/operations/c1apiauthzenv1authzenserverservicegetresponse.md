# C1ApiAuthzenV1AuthzenServerServiceGetResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceGetResponse = {
  contentType: "<value>",
  statusCode: 506616,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `authzenServerServiceGetResponse`                                                                       | [shared.AuthzenServerServiceGetResponse](../../../sdk/models/shared/authzenserverservicegetresponse.md) | :heavy_minus_sign:                                                                                      | AuthzenServerServiceGetResponse returns the requested AuthZEN server.                                   |
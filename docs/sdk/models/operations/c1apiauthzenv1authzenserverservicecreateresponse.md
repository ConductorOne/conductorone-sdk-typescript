# C1ApiAuthzenV1AuthzenServerServiceCreateResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 149301,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | HTTP response content type for this operation                                                                  |
| `statusCode`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | HTTP response status code for this operation                                                                   |
| `rawResponse`                                                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                          | :heavy_check_mark:                                                                                             | Raw HTTP response; suitable for custom response parsing                                                        |
| `authzenServerServiceCreateResponse`                                                                           | [shared.AuthzenServerServiceCreateResponse](../../../sdk/models/shared/authzenserverservicecreateresponse.md)  | :heavy_minus_sign:                                                                                             | AuthzenServerServiceCreateResponse returns the newly minted server,<br/> including its capability entitlement ids. |
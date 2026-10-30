# C1ApiAuthzenV1AuthzenServerServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 473841,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | HTTP response content type for this operation                                                                                                        |
| `statusCode`                                                                                                                                         | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | HTTP response status code for this operation                                                                                                         |
| `rawResponse`                                                                                                                                        | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                | :heavy_check_mark:                                                                                                                                   | Raw HTTP response; suitable for custom response parsing                                                                                              |
| `authzenServerServiceDeleteResponse`                                                                                                                 | [shared.AuthzenServerServiceDeleteResponse](../../../sdk/models/shared/authzenserverservicedeleteresponse.md)                                        | :heavy_minus_sign:                                                                                                                                   | AuthzenServerServiceDeleteResponse confirms deletion. The server's<br/> entitlement stack cascade-deletes; a replacement server mints an all-new<br/> stack. |
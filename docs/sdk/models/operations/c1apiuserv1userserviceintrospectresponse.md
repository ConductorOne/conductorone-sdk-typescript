# C1ApiUserV1UserServiceIntrospectResponse

## Example Usage

```typescript
import { C1ApiUserV1UserServiceIntrospectResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV1UserServiceIntrospectResponse = {
  contentType: "<value>",
  statusCode: 10150,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `userIntrospectResponse`                                                              | [shared.UserIntrospectResponse](../../../sdk/models/shared/userintrospectresponse.md) | :heavy_minus_sign:                                                                    | Successful response                                                                   |
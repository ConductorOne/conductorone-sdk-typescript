# C1ApiIamV1RolesGetResponse

## Example Usage

```typescript
import { C1ApiIamV1RolesGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1RolesGetResponse = {
  contentType: "<value>",
  statusCode: 709341,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |
| `getRolesResponse`                                                        | [shared.GetRolesResponse](../../../sdk/models/shared/getrolesresponse.md) | :heavy_minus_sign:                                                        | The GetRolesResponse message contains the retrieved role.                 |
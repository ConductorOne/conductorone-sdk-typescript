# C1ApiUserV1UserAttributeManagementServiceListAttributeTypesResponse

## Example Usage

```typescript
import { C1ApiUserV1UserAttributeManagementServiceListAttributeTypesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV1UserAttributeManagementServiceListAttributeTypesResponse =
  {
    contentType: "<value>",
    statusCode: 759221,
  };
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                             | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | HTTP response content type for this operation                                                                                                             |
| `statusCode`                                                                                                                                              | *number*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | HTTP response status code for this operation                                                                                                              |
| `rawResponse`                                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                     | :heavy_check_mark:                                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                                   |
| `userAttributeManagementServiceListAttributeTypesResponse`                                                                                                | [shared.UserAttributeManagementServiceListAttributeTypesResponse](../../../sdk/models/shared/userattributemanagementservicelistattributetypesresponse.md) | :heavy_minus_sign:                                                                                                                                        | Successful response                                                                                                                                       |
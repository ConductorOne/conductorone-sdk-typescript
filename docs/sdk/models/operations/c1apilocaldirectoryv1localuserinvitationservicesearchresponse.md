# C1ApiLocalDirectoryV1LocalUserInvitationServiceSearchResponse

## Example Usage

```typescript
import { C1ApiLocalDirectoryV1LocalUserInvitationServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiLocalDirectoryV1LocalUserInvitationServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 156445,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `localUserInvitationServiceSearchResponse`                                                                                | [shared.LocalUserInvitationServiceSearchResponse](../../../sdk/models/shared/localuserinvitationservicesearchresponse.md) | :heavy_minus_sign:                                                                                                        | Successful response                                                                                                       |
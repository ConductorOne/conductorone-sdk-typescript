# C1ApiFundsV1SubjectAppLimitServiceSetLimitResponse

## Example Usage

```typescript
import { C1ApiFundsV1SubjectAppLimitServiceSetLimitResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1SubjectAppLimitServiceSetLimitResponse = {
  contentType: "<value>",
  statusCode: 477958,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `subjectAppLimitServiceSetLimitResponse`                                                                              | [shared.SubjectAppLimitServiceSetLimitResponse](../../../sdk/models/shared/subjectapplimitservicesetlimitresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |
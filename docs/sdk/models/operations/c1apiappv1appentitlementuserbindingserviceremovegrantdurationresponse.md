# C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse = {
    contentType: "<value>",
    statusCode: 561575,
  };
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `removeGrantDurationResponse`                                                                   | [shared.RemoveGrantDurationResponse](../../../sdk/models/shared/removegrantdurationresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |
# C1ApiAppV1AppOwnersSetResponse

## Example Usage

```typescript
import { C1ApiAppV1AppOwnersSetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppOwnersSetResponse = {
  contentType: "<value>",
  statusCode: 932098,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `setAppOwnersResponse`                                                            | [shared.SetAppOwnersResponse](../../../sdk/models/shared/setappownersresponse.md) | :heavy_minus_sign:                                                                | The empty response message for setting the app owners.                            |
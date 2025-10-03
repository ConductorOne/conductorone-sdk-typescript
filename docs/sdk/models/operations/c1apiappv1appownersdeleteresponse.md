# C1ApiAppV1AppOwnersDeleteResponse

## Example Usage

```typescript
import { C1ApiAppV1AppOwnersDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppOwnersDeleteResponse = {
  contentType: "<value>",
  statusCode: 575673,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `deleteAppOwnersResponse`                                                               | [shared.DeleteAppOwnersResponse](../../../sdk/models/shared/deleteappownersresponse.md) | :heavy_minus_sign:                                                                      | the empty response message for deleting app owners.                                     |
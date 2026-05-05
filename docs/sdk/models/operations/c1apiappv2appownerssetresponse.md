# C1ApiAppV2AppOwnersSetResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersSetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersSetResponse = {
  contentType: "<value>",
  statusCode: 799138,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `setAppOwnersResponseV2`                                                              | [shared.SetAppOwnersResponseV2](../../../sdk/models/shared/setappownersresponsev2.md) | :heavy_minus_sign:                                                                    | SetAppOwnersResponse is the empty response for setting app owners.                    |
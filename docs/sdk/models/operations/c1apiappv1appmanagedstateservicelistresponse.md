# C1ApiAppV1AppManagedStateServiceListResponse

## Example Usage

```typescript
import { C1ApiAppV1AppManagedStateServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppManagedStateServiceListResponse = {
  contentType: "<value>",
  statusCode: 15977,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `listAppManagedStateBindingsResponse`                                                                           | [shared.ListAppManagedStateBindingsResponse](../../../sdk/models/shared/listappmanagedstatebindingsresponse.md) | :heavy_minus_sign:                                                                                              | ListAppManagedStateBindingsResponse contains one page of discovered application managed states.                 |
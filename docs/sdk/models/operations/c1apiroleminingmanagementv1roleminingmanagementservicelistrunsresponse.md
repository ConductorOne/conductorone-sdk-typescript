# C1ApiRoleMiningManagementV1RoleMiningManagementServiceListRunsResponse

## Example Usage

```typescript
import { C1ApiRoleMiningManagementV1RoleMiningManagementServiceListRunsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceListRunsResponse = {
    contentType: "<value>",
    statusCode: 776914,
  };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |
| `listRunsResponse`                                                        | [shared.ListRunsResponse](../../../sdk/models/shared/listrunsresponse.md) | :heavy_minus_sign:                                                        | Successful response                                                       |
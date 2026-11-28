# C1ApiAppV1AppUserMergeRulesServiceListSourcesResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUserMergeRulesServiceListSourcesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUserMergeRulesServiceListSourcesResponse = {
  contentType: "<value>",
  statusCode: 727671,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `appUserMergeRulesServiceListSourcesResponse`                                                                                   | [shared.AppUserMergeRulesServiceListSourcesResponse](../../../sdk/models/shared/appusermergerulesservicelistsourcesresponse.md) | :heavy_minus_sign:                                                                                                              | The AppUserMergeRulesServiceListSourcesResponse message contains the records that make up an account.                           |
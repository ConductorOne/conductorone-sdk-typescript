# C1ApiAppV1AppUserMergeRulesServiceGetResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUserMergeRulesServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUserMergeRulesServiceGetResponse = {
  contentType: "<value>",
  statusCode: 813463,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `appUserMergeRulesServiceGetResponse`                                                                           | [shared.AppUserMergeRulesServiceGetResponse](../../../sdk/models/shared/appusermergerulesservicegetresponse.md) | :heavy_minus_sign:                                                                                              | The AppUserMergeRulesServiceGetResponse message contains the application's account merge rules.                 |
# C1ApiAppV1AppUserMergeRulesServiceResetToDefaultsResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUserMergeRulesServiceResetToDefaultsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUserMergeRulesServiceResetToDefaultsResponse = {
  contentType: "<value>",
  statusCode: 761066,
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `appUserMergeRulesServiceResetToDefaultsResponse`                                                                                       | [shared.AppUserMergeRulesServiceResetToDefaultsResponse](../../../sdk/models/shared/appusermergerulesserviceresettodefaultsresponse.md) | :heavy_minus_sign:                                                                                                                      | The AppUserMergeRulesServiceResetToDefaultsResponse message contains the saved rules.                                                   |
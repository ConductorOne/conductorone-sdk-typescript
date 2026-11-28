# C1ApiAppV1AppUserMergeRulesServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUserMergeRulesServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUserMergeRulesServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 675763,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `appUserMergeRulesServiceUpdateResponse`                                                                              | [shared.AppUserMergeRulesServiceUpdateResponse](../../../sdk/models/shared/appusermergerulesserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                    | The AppUserMergeRulesServiceUpdateResponse message contains the saved rules.                                          |
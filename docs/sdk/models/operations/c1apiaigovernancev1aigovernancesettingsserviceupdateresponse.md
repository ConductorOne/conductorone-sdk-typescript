# C1ApiAIGovernanceV1AIGovernanceSettingsServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAIGovernanceV1AIGovernanceSettingsServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAIGovernanceV1AIGovernanceSettingsServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 599068,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `updateAIGovernanceSettingsResponse`                                                                          | [shared.UpdateAIGovernanceSettingsResponse](../../../sdk/models/shared/updateaigovernancesettingsresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |
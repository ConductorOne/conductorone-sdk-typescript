# C1ApiAIGovernanceV1AIGovernanceSettingsServiceGetResponse

## Example Usage

```typescript
import { C1ApiAIGovernanceV1AIGovernanceSettingsServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAIGovernanceV1AIGovernanceSettingsServiceGetResponse = {
  contentType: "<value>",
  statusCode: 504254,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `getAIGovernanceSettingsResponse`                                                                       | [shared.GetAIGovernanceSettingsResponse](../../../sdk/models/shared/getaigovernancesettingsresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |
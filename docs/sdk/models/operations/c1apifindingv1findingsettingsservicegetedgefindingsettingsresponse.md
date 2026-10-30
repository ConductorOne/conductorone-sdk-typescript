# C1ApiFindingV1FindingSettingsServiceGetEdgeFindingSettingsResponse

## Example Usage

```typescript
import { C1ApiFindingV1FindingSettingsServiceGetEdgeFindingSettingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFindingV1FindingSettingsServiceGetEdgeFindingSettingsResponse =
  {
    contentType: "<value>",
    statusCode: 225540,
  };
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `getEdgeFindingSettingsResponse`                                                                      | [shared.GetEdgeFindingSettingsResponse](../../../sdk/models/shared/getedgefindingsettingsresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |
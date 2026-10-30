# C1APIAPIKeyV1APIKeySearchServiceSearchResponse

## Example Usage

```typescript
import { C1APIAPIKeyV1APIKeySearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1APIAPIKeyV1APIKeySearchServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 58073,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `apiKeySearchServiceSearchResponse`                                                                         | [shared.APIKeySearchServiceSearchResponse](../../../sdk/models/shared/apikeysearchservicesearchresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |
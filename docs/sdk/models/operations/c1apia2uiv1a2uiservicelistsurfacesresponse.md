# C1ApiA2uiV1A2UIServiceListSurfacesResponse

## Example Usage

```typescript
import { C1ApiA2uiV1A2UIServiceListSurfacesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiA2uiV1A2UIServiceListSurfacesResponse = {
  contentType: "<value>",
  statusCode: 140655,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `a2UIServiceListSurfacesResponse`                                                                       | [shared.A2UIServiceListSurfacesResponse](../../../sdk/models/shared/a2uiservicelistsurfacesresponse.md) | :heavy_minus_sign:                                                                                      | A2UIServiceListSurfacesResponse returns active surfaces.                                                |
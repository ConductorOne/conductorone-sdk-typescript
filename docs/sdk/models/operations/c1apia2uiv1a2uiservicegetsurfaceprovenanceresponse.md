# C1ApiA2uiV1A2UIServiceGetSurfaceProvenanceResponse

## Example Usage

```typescript
import { C1ApiA2uiV1A2UIServiceGetSurfaceProvenanceResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiA2uiV1A2UIServiceGetSurfaceProvenanceResponse = {
  contentType: "<value>",
  statusCode: 455291,
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                     | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response content type for this operation                                                                                                     |
| `statusCode`                                                                                                                                      | *number*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response status code for this operation                                                                                                      |
| `rawResponse`                                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                             | :heavy_check_mark:                                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                                           |
| `a2UIServiceGetSurfaceProvenanceResponse`                                                                                                         | [shared.A2UIServiceGetSurfaceProvenanceResponse](../../../sdk/models/shared/a2uiservicegetsurfaceprovenanceresponse.md)                           | :heavy_minus_sign:                                                                                                                                | A2UIServiceGetSurfaceProvenanceResponse returns what a surface was built<br/> from: the steps its program ran, and the sources its components report. |
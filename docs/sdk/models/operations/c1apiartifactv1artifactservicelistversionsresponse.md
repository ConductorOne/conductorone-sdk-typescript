# C1ApiArtifactV1ArtifactServiceListVersionsResponse

## Example Usage

```typescript
import { C1ApiArtifactV1ArtifactServiceListVersionsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiArtifactV1ArtifactServiceListVersionsResponse = {
  contentType: "<value>",
  statusCode: 368273,
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response content type for this operation                                                                                                       |
| `statusCode`                                                                                                                                        | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response status code for this operation                                                                                                        |
| `rawResponse`                                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                               | :heavy_check_mark:                                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                                             |
| `artifactServiceListVersionsResponse`                                                                                                               | [shared.ArtifactServiceListVersionsResponse](../../../sdk/models/shared/artifactservicelistversionsresponse.md)                                     | :heavy_minus_sign:                                                                                                                                  | ArtifactServiceListVersionsResponse contains currently authorized history.<br/> Discovery is eventual; use GetVersion for canonical publication status. |
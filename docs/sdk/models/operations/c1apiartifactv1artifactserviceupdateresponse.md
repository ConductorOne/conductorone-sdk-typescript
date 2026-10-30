# C1ApiArtifactV1ArtifactServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiArtifactV1ArtifactServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiArtifactV1ArtifactServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 230888,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `artifactServiceUpdateResponse`                                                                     | [shared.ArtifactServiceUpdateResponse](../../../sdk/models/shared/artifactserviceupdateresponse.md) | :heavy_minus_sign:                                                                                  | ArtifactServiceUpdateResponse contains the updated catalog metadata.                                |
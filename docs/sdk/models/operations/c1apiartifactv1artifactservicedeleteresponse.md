# C1ApiArtifactV1ArtifactServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiArtifactV1ArtifactServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiArtifactV1ArtifactServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 929400,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `artifactServiceDeleteResponse`                                                                     | [shared.ArtifactServiceDeleteResponse](../../../sdk/models/shared/artifactservicedeleteresponse.md) | :heavy_minus_sign:                                                                                  | ArtifactServiceDeleteResponse confirms deletion without returning metadata.                         |
# C1ApiArtifactV1ArtifactServiceGetVersionResponse

## Example Usage

```typescript
import { C1ApiArtifactV1ArtifactServiceGetVersionResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiArtifactV1ArtifactServiceGetVersionResponse = {
  contentType: "<value>",
  statusCode: 560537,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `artifactServiceGetVersionResponse`                                                                         | [shared.ArtifactServiceGetVersionResponse](../../../sdk/models/shared/artifactservicegetversionresponse.md) | :heavy_minus_sign:                                                                                          | ArtifactServiceGetVersionResponse contains the canonical publication outcome.                               |
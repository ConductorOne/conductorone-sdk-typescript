# C1ApiArtifactV1ArtifactServiceGetResponse

## Example Usage

```typescript
import { C1ApiArtifactV1ArtifactServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiArtifactV1ArtifactServiceGetResponse = {
  contentType: "<value>",
  statusCode: 635957,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `artifactServiceGetResponse`                                                                  | [shared.ArtifactServiceGetResponse](../../../sdk/models/shared/artifactservicegetresponse.md) | :heavy_minus_sign:                                                                            | ArtifactServiceGetResponse contains current-authorized catalog metadata.                      |
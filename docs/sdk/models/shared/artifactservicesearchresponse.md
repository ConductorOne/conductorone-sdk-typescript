# ArtifactServiceSearchResponse

ArtifactServiceSearchResponse contains only currently authorized metadata.
 Readers see published Artifacts; Owners may also see their unpublished entries.
 No raw candidate totals, denied/scanned counts or global facets are exposed.

## Example Usage

```typescript
import { ArtifactServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ArtifactServiceSearchResponse = {};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                                                    | [shared.Artifact](../../../sdk/models/shared/artifact.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                        | Authorized Artifacts in descending creation-time and ID order.                                                                                            |
| `nextPageToken`                                                                                                                                           | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Sealed continuation token, empty when scanning is complete. A short or empty<br/> page can still continue; this token does not promise another visible match. |
# ArtifactServiceUpdateRequest

ArtifactServiceUpdateRequest changes only selected audience-visible metadata.
 Consumers must require a nonempty unique mask relative to Artifact, drawn
 exactly from display_name, description and tags. Wildcards, nested paths,
 unknown paths and output-only fields (including the publication pointer) are
 rejected; only selected fields are applied.
 Recursive Artifact validation is skipped so description-only or tags-only
 updates do not require a name. Consumers must manually validate artifact.id
 and selected fields after normal hooks: ID shape, field byte bounds, tag
 grammar, count and uniqueness, and a nonempty, non-Unicode-whitespace-only
 display_name when selected. Names must not be automatically trimmed.
 Generated validation checks only artifact and update_mask message presence;
 it does not enforce mask semantics or selected-field validation.

## Example Usage

```typescript
import { ArtifactServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ArtifactServiceUpdateRequest = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `artifact`                                                          | [shared.ArtifactInput](../../../sdk/models/shared/artifactinput.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `updateMask`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
# ArtifactInput

Artifact is audience-visible catalog metadata, not an authoring package.
 It contains no source identities, storage references, cells or arguments.

## Example Usage

```typescript
import { ArtifactInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ArtifactInput = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Optional audience-visible description; never guarded draft text.                                                                                             |
| `displayName`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Current Owner-managed catalog name, independent of pinned-version source text.<br/> Consumers reject Unicode-whitespace-only names without trimming valid names. |
| `tags`                                                                                                                                                       | *string*[]                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                           | Optional unique lowercase ASCII topic tokens, not permissions or classifications.                                                                            |
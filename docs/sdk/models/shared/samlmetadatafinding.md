# SAMLMetadataFinding

SAMLMetadataFinding is one thing ConductorOne noticed while parsing a service
 provider's metadata document.

## Example Usage

```typescript
import { SAMLMetadataFinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SAMLMetadataFinding = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `component`                                                                               | [shared.Component](../../../sdk/models/shared/component.md)                               | :heavy_minus_sign:                                                                        | Where the finding fits in the parsed document.                                            |
| `level`                                                                                   | [shared.SAMLMetadataFindingLevel](../../../sdk/models/shared/samlmetadatafindinglevel.md) | :heavy_minus_sign:                                                                        | The severity of this finding.                                                             |
| `reason`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | Plain-language explanation of why the finding was raised.                                 |
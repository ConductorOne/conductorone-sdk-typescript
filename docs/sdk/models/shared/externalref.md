# ExternalRef

A reference to an external source. This value is unused currently, but may be brought back.

## Example Usage

```typescript
import { ExternalRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalRef = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `externalRefSource`                                                         | [shared.ExternalRefSource](../../../sdk/models/shared/externalrefsource.md) | :heavy_minus_sign:                                                          | The source of the external reference.                                       |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | The name of the external reference.                                         |
| `url`                                                                       | *string*                                                                    | :heavy_minus_sign:                                                          | The URL to the external reference.                                          |
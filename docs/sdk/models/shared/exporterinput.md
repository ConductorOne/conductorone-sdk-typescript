# ExporterInput

The Exporter message.

This message contains a oneof named export_to. Only a single field of the following list may be set at a time:
  - datasource


## Example Usage

```typescript
import { ExporterInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExporterInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `exportToDatasource`                                                          | [shared.ExportToDatasource](../../../sdk/models/shared/exporttodatasource.md) | :heavy_minus_sign:                                                            | The ExportToDatasource message.                                               |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The displayName field.                                                        |
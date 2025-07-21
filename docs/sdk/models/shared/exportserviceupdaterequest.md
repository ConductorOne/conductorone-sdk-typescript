# ExportServiceUpdateRequest

The ExportServiceUpdateRequest message.

## Example Usage

```typescript
import { ExportServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExportServiceUpdateRequest = {};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `exporter`                                                                                                                                            | [shared.ExporterInput](../../../sdk/models/shared/exporterinput.md)                                                                                   | :heavy_minus_sign:                                                                                                                                    | The Exporter message.<br/><br/>This message contains a oneof named export_to. Only a single field of the following list may be set at a time:<br/>  - datasource<br/> |
| `updateMask`                                                                                                                                          | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |
# ExportServiceCreateResponse

The ExportServiceCreateResponse message.

## Example Usage

```typescript
import { ExportServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExportServiceCreateResponse = {};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `exporter`                                                                                                                                            | [shared.Exporter](../../../sdk/models/shared/exporter.md)                                                                                             | :heavy_minus_sign:                                                                                                                                    | The Exporter message.<br/><br/>This message contains a oneof named export_to. Only a single field of the following list may be set at a time:<br/>  - datasource<br/> |
# Exporter

The Exporter message.

This message contains a oneof named export_to. Only a single field of the following list may be set at a time:
  - datasource


## Example Usage

```typescript
import { Exporter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Exporter = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `datasource`                                                                                  | [shared.ExportToDatasource](../../../sdk/models/shared/exporttodatasource.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The displayName field.                                                                        |
| `exportId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The exportId field.                                                                           |
| `state`                                                                                       | [shared.ExporterState](../../../sdk/models/shared/exporterstate.md)                           | :heavy_minus_sign:                                                                            | The state field.                                                                              |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `watermarkEventId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | we've synchorized this far                                                                    |
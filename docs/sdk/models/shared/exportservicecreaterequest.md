# ExportServiceCreateRequest

The ExportServiceCreateRequest message is used to create a new system log exporter.

This message contains a oneof named export_to. Only a single field of the following list may be set at a time:
  - datasource


## Example Usage

```typescript
import { ExportServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExportServiceCreateRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `datasource`                                                                  | [shared.ExportToDatasource](../../../sdk/models/shared/exporttodatasource.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The display name of the new policy.                                           |
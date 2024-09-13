# ExportsSearchServiceSearchRequest

The ExportsSearchServiceSearchRequest message.

## Example Usage

```typescript
import { ExportsSearchServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExportsSearchServiceSearchRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `displayName`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | Search for system log exporters with a case insensitive match on the display name. |
| `pageSize`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | The pageSize field.                                                                |
| `pageToken`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | The pageToken field.                                                               |
| `query`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The query field.                                                                   |
| `refs`                                                                             | [shared.ExporterRef](../../../sdk/models/shared/exporterref.md)[]                  | :heavy_minus_sign:                                                                 | The refs field.                                                                    |
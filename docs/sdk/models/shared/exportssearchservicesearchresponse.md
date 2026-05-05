# ExportsSearchServiceSearchResponse

ExportsSearchServiceSearchResponse is the response for searching system log exports.

## Example Usage

```typescript
import { ExportsSearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExportsSearchServiceSearchResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `list`                                                                                 | [shared.Exporter](../../../sdk/models/shared/exporter.md)[]                            | :heavy_minus_sign:                                                                     | The list of system log exports matching the search criteria.                           |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The token to retrieve the next page of results, or empty if there are no more results. |
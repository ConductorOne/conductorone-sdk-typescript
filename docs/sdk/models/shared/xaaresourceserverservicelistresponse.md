# XAAResourceServerServiceListResponse

XAAResourceServerServiceListResponse returns a page of resource servers.

## Example Usage

```typescript
import { XAAResourceServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAResourceServerServiceListResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | Token for the next page, or empty if there are no more results.               |
| `resourceServers`                                                             | [shared.XAAResourceServer](../../../sdk/models/shared/xaaresourceserver.md)[] | :heavy_minus_sign:                                                            | The page of resource servers.                                                 |
# XAAResourceServerServiceSearchResponse

XAAResourceServerServiceSearchResponse returns matching resource servers.

## Example Usage

```typescript
import { XAAResourceServerServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAResourceServerServiceSearchResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `list`                                                                        | [shared.XAAResourceServer](../../../sdk/models/shared/xaaresourceserver.md)[] | :heavy_minus_sign:                                                            | Matching resource servers.                                                    |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | Token for the next page.                                                      |
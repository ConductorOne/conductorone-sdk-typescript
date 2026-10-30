# XAAAccessProfileServiceSearchResponse

XAAAccessProfileServiceSearchResponse returns matching access profiles.

## Example Usage

```typescript
import { XAAAccessProfileServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileServiceSearchResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `list`                                                                      | [shared.XAAAccessProfile](../../../sdk/models/shared/xaaaccessprofile.md)[] | :heavy_minus_sign:                                                          | Matching access profiles.                                                   |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token for the next page.                                                    |
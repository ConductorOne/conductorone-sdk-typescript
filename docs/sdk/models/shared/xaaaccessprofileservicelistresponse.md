# XAAAccessProfileServiceListResponse

XAAAccessProfileServiceListResponse returns a page of access profiles.

## Example Usage

```typescript
import { XAAAccessProfileServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileServiceListResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accessProfiles`                                                            | [shared.XAAAccessProfile](../../../sdk/models/shared/xaaaccessprofile.md)[] | :heavy_minus_sign:                                                          | The page of access profiles.                                                |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token for the next page, or empty if there are no more results.             |
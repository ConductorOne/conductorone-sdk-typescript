# XAAClientAudienceMappingServiceSearchResponse

XAAClientAudienceMappingServiceSearchResponse returns matching mappings.

## Example Usage

```typescript
import { XAAClientAudienceMappingServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAClientAudienceMappingServiceSearchResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `list`                                                                                      | [shared.XAAClientAudienceMapping](../../../sdk/models/shared/xaaclientaudiencemapping.md)[] | :heavy_minus_sign:                                                                          | Matching mappings.                                                                          |
| `nextPageToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | Token for the next page.                                                                    |
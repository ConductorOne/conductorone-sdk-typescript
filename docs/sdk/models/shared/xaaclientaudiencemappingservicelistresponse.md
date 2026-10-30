# XAAClientAudienceMappingServiceListResponse

XAAClientAudienceMappingServiceListResponse returns a page of mappings.

## Example Usage

```typescript
import { XAAClientAudienceMappingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAClientAudienceMappingServiceListResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `clientAudienceMappings`                                                                    | [shared.XAAClientAudienceMapping](../../../sdk/models/shared/xaaclientaudiencemapping.md)[] | :heavy_minus_sign:                                                                          | The page of mappings.                                                                       |
| `nextPageToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | Token for the next page, or empty if there are no more results.                             |
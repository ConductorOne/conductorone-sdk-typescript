# EdgeServiceGetInferenceUsageAttributionRollupResponse

The EdgeServiceGetInferenceUsageAttributionRollupResponse message.

## Example Usage

```typescript
import { EdgeServiceGetInferenceUsageAttributionRollupResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceGetInferenceUsageAttributionRollupResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `edgeCount`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Number of authorized Edges included. Zero means the caller manages no<br/> Edges, as distinct from Edges that have no traffic yet. |
| `rows`                                                                                                                         | [shared.TBUsageAttributionRow](../../../sdk/models/shared/tbusageattributionrow.md)[]                                          | :heavy_minus_sign:                                                                                                             | Ordered by (input_tokens + output_tokens) descending, limited to<br/> page_size.                                               |
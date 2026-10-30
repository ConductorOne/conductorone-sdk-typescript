# EdgeServiceGetInferenceUsageAttributionResponse

The EdgeServiceGetInferenceUsageAttributionResponse message.

## Example Usage

```typescript
import { EdgeServiceGetInferenceUsageAttributionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceGetInferenceUsageAttributionResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `rows`                                                                                | [shared.TBUsageAttributionRow](../../../sdk/models/shared/tbusageattributionrow.md)[] | :heavy_minus_sign:                                                                    | Ordered by (input_tokens + output_tokens) descending, limited to<br/> page_size.      |
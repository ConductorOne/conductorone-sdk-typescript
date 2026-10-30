# EdgeServiceListInferenceTopToolsResponse

The EdgeServiceListInferenceTopToolsResponse message.

## Example Usage

```typescript
import { EdgeServiceListInferenceTopToolsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListInferenceTopToolsResponse = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `tools`                                                                                                                  | [shared.TBTopTool](../../../sdk/models/shared/tbtoptool.md)[]                                                            | :heavy_minus_sign:                                                                                                       | Ordered by call_count descending, limited to page_size. No pagination<br/> cursor -- this is a fixed top-N, not a full list. |
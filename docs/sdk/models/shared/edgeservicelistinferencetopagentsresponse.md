# EdgeServiceListInferenceTopAgentsResponse

The EdgeServiceListInferenceTopAgentsResponse message.

## Example Usage

```typescript
import { EdgeServiceListInferenceTopAgentsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListInferenceTopAgentsResponse = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `agents`                                                                                                                 | [shared.TBTopAgent](../../../sdk/models/shared/tbtopagent.md)[]                                                          | :heavy_minus_sign:                                                                                                       | Ordered by call_count descending, limited to page_size. No pagination<br/> cursor -- this is a fixed top-N, not a full list. |
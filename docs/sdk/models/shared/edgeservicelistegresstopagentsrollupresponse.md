# EdgeServiceListEgressTopAgentsRollupResponse

The EdgeServiceListEgressTopAgentsRollupResponse message.

## Example Usage

```typescript
import { EdgeServiceListEgressTopAgentsRollupResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListEgressTopAgentsRollupResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `agents`                                                                                                                       | [shared.TBTopAgent](../../../sdk/models/shared/tbtopagent.md)[]                                                                | :heavy_minus_sign:                                                                                                             | Ordered by call_count descending, limited to page_size. No pagination<br/> cursor -- this is a fixed top-N, not a full list.   |
| `edgeCount`                                                                                                                    | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Number of authorized Edges included. Zero means the caller manages no<br/> Edges, as distinct from Edges that have no traffic yet. |
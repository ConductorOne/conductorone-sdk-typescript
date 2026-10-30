# EdgeServiceListEgressDenialSummaryResponse

The EdgeServiceListEgressDenialSummaryResponse message.

## Example Usage

```typescript
import { EdgeServiceListEgressDenialSummaryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListEgressDenialSummaryResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `groups`                                                                             | [shared.TBEgressDenialGroup](../../../sdk/models/shared/tbegressdenialgroup.md)[]    | :heavy_minus_sign:                                                                   | Ordered by count descending.                                                         |
| `truncated`                                                                          | *boolean*                                                                            | :heavy_minus_sign:                                                                   | True when more groups matched than were returned; narrow the filters or<br/> the window. |
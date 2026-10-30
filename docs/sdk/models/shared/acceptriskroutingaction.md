# AcceptRiskRoutingAction

AcceptRiskRoutingAction accepts the risk for a matched finding for a
 relative duration (resolved to risk_acceptance_expires_at = now + duration
 at execution time).

## Example Usage

```typescript
import { AcceptRiskRoutingAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AcceptRiskRoutingAction = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `duration`         | *string*           | :heavy_minus_sign: | N/A                |
| `reason`           | *string*           | :heavy_minus_sign: | The reason field.  |
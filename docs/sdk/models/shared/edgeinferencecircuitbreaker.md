# EdgeInferenceCircuitBreaker

The EdgeInferenceCircuitBreaker message.

## Example Usage

```typescript
import { EdgeInferenceCircuitBreaker } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceCircuitBreaker = {};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `cooldownMs`                | *number*                    | :heavy_minus_sign:          | The cooldownMs field.       |
| `failureThreshold`          | *number*                    | :heavy_minus_sign:          | The failureThreshold field. |
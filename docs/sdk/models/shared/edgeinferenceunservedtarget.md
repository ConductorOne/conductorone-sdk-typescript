# EdgeInferenceUnservedTarget

EdgeInferenceUnservedTarget is a target of a configured inference route that connected Edge processes report
 they cannot serve.

## Example Usage

```typescript
import { EdgeInferenceUnservedTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceUnservedTarget = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `partial`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | True when some connected Edge processes can still serve it. |
| `reason`                                                    | *string*                                                    | :heavy_minus_sign:                                          | The reason field.                                           |
| `routeId`                                                   | *string*                                                    | :heavy_minus_sign:                                          | The routeId field.                                          |
| `targetId`                                                  | *string*                                                    | :heavy_minus_sign:                                          | The targetId field.                                         |
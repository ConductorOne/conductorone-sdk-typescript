# Allow

Allow permits the sign-in.

## Example Usage

```typescript
import { Allow } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Allow = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `floorLevel`                                                                             | [shared.AllowFloorLevel](../../../sdk/models/shared/allowfloorlevel.md)                  | :heavy_minus_sign:                                                                       | The minimum assurance level that satisfies this rule. Required on enforced<br/> Allow rules. |
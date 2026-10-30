# FindingTarget

The finding an inert TYPE_MANUAL action ticket remediates.

## Example Usage

```typescript
import { FindingTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingTarget = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `findingId`                      | *string*                         | :heavy_minus_sign:               | Reference to the source finding. |
| `findingType`                    | *string*                         | :heavy_minus_sign:               | The finding type discriminator.  |
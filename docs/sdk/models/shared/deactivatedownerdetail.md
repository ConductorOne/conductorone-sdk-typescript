# DeactivatedOwnerDetail

DeactivatedOwnerDetail is one deactivated owner found for the target at
 detection time. A target can have more than one owner, and more than one
 can read as deactivated.

## Example Usage

```typescript
import { DeactivatedOwnerDetail } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeactivatedOwnerDetail = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `reason`                                                                                          | [shared.DeactivatedOwnerDetailReason](../../../sdk/models/shared/deactivatedownerdetailreason.md) | :heavy_minus_sign:                                                                                | The reason field.                                                                                 |
| `userId`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | The userId field.                                                                                 |
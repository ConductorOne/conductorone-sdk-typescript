# DeactivatedOwnerType

DeactivatedOwnerType: the human responsible for a target -- either the
 AppUser's own correlated identity, an ownership_v2-assigned owner, or a
 secret's run-as identity is deactivated. Target: AppUserTarget or
 AppResourceTarget.

## Example Usage

```typescript
import { DeactivatedOwnerType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeactivatedOwnerType = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `source`                                                                                      | [shared.DeactivatedOwnerTypeSource](../../../sdk/models/shared/deactivatedownertypesource.md) | :heavy_minus_sign:                                                                            | The source field.                                                                             |
# UpdateManuallyManagedResourceTypeRequest

The UpdateManuallyManagedResourceTypeRequest message.

## Example Usage

```typescript
import { UpdateManuallyManagedResourceTypeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateManuallyManagedResourceTypeRequest = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `appResourceType`                                                                                                        | [shared.AppResourceTypeInput](../../../sdk/models/shared/appresourcetypeinput.md)                                        | :heavy_minus_sign:                                                                                                       | The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role. |
| `updateMask`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
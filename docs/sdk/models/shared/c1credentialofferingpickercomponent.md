# C1CredentialOfferingPickerComponent

C1CredentialOfferingPickerComponent selects one of the caller's requestable credential offerings.
 Writes the selected offering ref {id, appId, catalogId, displayName} to the value path.

## Example Usage

```typescript
import { C1CredentialOfferingPickerComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1CredentialOfferingPickerComponent = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `appId`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | The appId field.                                                    |
| `label`                                                             | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `required`                                                          | *boolean*                                                           | :heavy_minus_sign:                                                  | The required field.                                                 |
| `value`                                                             | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
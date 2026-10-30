# ClassifierBinding

ClassifierBinding attaches one Classifier to one enforcement target.
 surface must be AGENT or GATEWAY; UNSPECIFIED and BOTH are invalid here. Attach a shared
 classifier twice to use the same classifier_id on both surfaces. Each call
 resolves only its originating surface, never both cascades.

## Example Usage

```typescript
import { ClassifierBinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ClassifierBinding = {
  classifierId: "<id>",
  surface: "CLASSIFIER_TYPE_AGENT",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `classifierId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The classifierId field.                                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `surface`                                                                                     | [shared.Surface](../../../sdk/models/shared/surface.md)                                       | :heavy_check_mark:                                                                            | The surface field.                                                                            |
| `targetId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The targetId field.                                                                           |
| `tenantId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The tenantId field.                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
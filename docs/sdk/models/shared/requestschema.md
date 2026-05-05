# RequestSchema

A request schema defines a form template that users fill out when requesting access.

## Example Usage

```typescript
import { RequestSchema } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestSchema = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `deletedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `form`                                                                                                            | [shared.RequestSchemaForm](../../../sdk/models/shared/requestschemaform.md)                                       | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The unique identifier of this request schema.                                                                     |
| `justificationVisibility`                                                                                         | [shared.RequestSchemaJustificationVisibility](../../../sdk/models/shared/requestschemajustificationvisibility.md) | :heavy_minus_sign:                                                                                                | Controls whether the justification field is shown or hidden on the request form.                                  |
| `modifiedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
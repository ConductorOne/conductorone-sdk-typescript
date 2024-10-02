# AttributeValue

AttributeValue is the value of an attribute of a defined type.

## Example Usage

```typescript
import { AttributeValue } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AttributeValue = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attributeTypeId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the AttributeType that this AttributeValue belongs to.                              |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the AttributeValue.                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The value of the AttributeValue. This is the string that will be displayed to the user.       |
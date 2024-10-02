# GetAttributeValueResponse

GetAttributeValueResponse is the response for getting an attribute value by id.

## Example Usage

```typescript
import { GetAttributeValueResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAttributeValueResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `attributeValue`                                                      | [shared.AttributeValue](../../../sdk/models/shared/attributevalue.md) | :heavy_minus_sign:                                                    | AttributeValue is the value of an attribute of a defined type.        |
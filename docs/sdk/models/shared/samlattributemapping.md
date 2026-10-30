# SAMLAttributeMapping

SAMLAttributeMapping releases one user attribute to the service provider
 as one Attribute in the assertion's AttributeStatement.

## Example Usage

```typescript
import { SAMLAttributeMapping } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SAMLAttributeMapping = {
  name: "<value>",
  userAttributeMappingId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `friendlyName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Optional FriendlyName, for service providers that display it.                      |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The Name attribute, dictated by the service provider.                              |
| `nameFormat`                                                                       | [shared.NameFormat](../../../sdk/models/shared/nameformat.md)                      | :heavy_minus_sign:                                                                 | The NameFormat attribute.                                                          |
| `userAttributeMappingId`                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The user attribute mapping that resolves the value, including its fallback<br/> chain. |
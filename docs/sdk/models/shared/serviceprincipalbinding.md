# ServicePrincipalBinding

ServicePrincipalBinding is one row in the binding store, naming a
 subject's link to a single service principal.

## Example Usage

```typescript
import { ServicePrincipalBinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalBinding = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `servicePrincipalId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The servicePrincipalId field.                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
# XAAAccessProfileScopeBinding

XAAAccessProfileScopeBinding is a binding between an access profile and a
 scope. Both ends belong to one resource server.

## Example Usage

```typescript
import { XAAAccessProfileScopeBinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileScopeBinding = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accessProfileId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The access profile end of the binding.                                                        |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The application that owns the resource server.                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `xaaResourceServerId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The resource server both ends belong to.                                                      |
| `xaaScopeId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The scope end of the binding.                                                                 |
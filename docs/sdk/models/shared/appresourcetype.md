# AppResourceType

The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role.

## Example Usage

```typescript
import { AppResourceType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceType = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app that is associated with the app resource type                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the app resource type.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID for the app resource type.                                                      |
| `traitIds`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Associated trait ids                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
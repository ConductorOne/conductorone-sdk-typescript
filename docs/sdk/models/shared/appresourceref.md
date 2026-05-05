# AppResourceRef

A reference to a specific app resource by its composite key.

## Example Usage

```typescript
import { AppResourceRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceRef = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `appId`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The ID of the app that owns the resource.                  |
| `appResourceTypeId`                                        | *string*                                                   | :heavy_minus_sign:                                         | The ID of the resource type that classifies this resource. |
| `id`                                                       | *string*                                                   | :heavy_minus_sign:                                         | The unique ID of the app resource.                         |
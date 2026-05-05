# ResourceTypeIdRef

A reference to a resource type within an application.

## Example Usage

```typescript
import { ResourceTypeIdRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResourceTypeIdRef = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `appId`                                                | *string*                                               | :heavy_minus_sign:                                     | The ID of the application that owns the resource type. |
| `resourceTypeId`                                       | *string*                                               | :heavy_minus_sign:                                     | The ID of the resource type.                           |
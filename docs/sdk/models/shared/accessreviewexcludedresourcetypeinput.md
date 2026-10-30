# AccessReviewExcludedResourceTypeInput

Identifies a resource type to exclude from a user-first campaign's scope.

## Example Usage

```typescript
import { AccessReviewExcludedResourceTypeInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewExcludedResourceTypeInput = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `appId`                                                | *string*                                               | :heavy_minus_sign:                                     | The ID of the application that owns the resource type. |
| `resourceTypeId`                                       | *string*                                               | :heavy_minus_sign:                                     | The ID of the resource type to exclude.                |
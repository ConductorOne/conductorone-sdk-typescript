# RemoveAppResourceOwnerRequest

The request message for removing an owner from an app resource.

## Example Usage

```typescript
import { RemoveAppResourceOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RemoveAppResourceOwnerRequest = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `userId`                              | *string*                              | :heavy_minus_sign:                    | The C1 user ID to remove as an owner. |
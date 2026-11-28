# AppUserServiceMergeRequest

The AppUserServiceMergeRequest names the app and the two app users to merge.

## Example Usage

```typescript
import { AppUserServiceMergeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceMergeRequest = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `sourceAppUserId`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | The ID of the app user whose records move to the target. Must differ from the target. |
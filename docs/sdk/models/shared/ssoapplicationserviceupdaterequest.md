# SSOApplicationServiceUpdateRequest

SSOApplicationServiceUpdateRequest updates an SSO application.

## Example Usage

```typescript
import { SSOApplicationServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceUpdateRequest = {
  application: {},
  updateMask: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `application`                                                         | [shared.SSOApplication](../../../sdk/models/shared/ssoapplication.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `updateMask`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
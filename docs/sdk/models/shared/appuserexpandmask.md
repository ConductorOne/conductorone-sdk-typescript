# AppUserExpandMask

The AppUserExpandMask message contains a list of paths to expand in the response.

## Example Usage

```typescript
import { AppUserExpandMask } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserExpandMask = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `paths`                                                                                                             | *string*[]                                                                                                          | :heavy_minus_sign:                                                                                                  | The paths to expand in the response. May be any combination of "*", "identity_user_id", "app_id", and "last_usage". |
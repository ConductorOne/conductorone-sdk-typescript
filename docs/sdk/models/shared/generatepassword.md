# GeneratePassword

The GeneratePassword message.

## Example Usage

```typescript
import { GeneratePassword } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GeneratePassword = {};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`passwordPolicyId`~~                                                                                                                                                            | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: password policy ID lookup is no longer used. |
| `policy`                                                                                                                                                                          | [shared.GeneratePasswordPolicy](../../../sdk/models/shared/generatepasswordpolicy.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |
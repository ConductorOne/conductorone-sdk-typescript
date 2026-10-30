# FundsAccountScope

AccountScope identifies the tenant, user, application, or user-application
 account against which spending was admitted.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - tenant
  - subject
  - app
  - subjectApp


## Example Usage

```typescript
import { FundsAccountScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundsAccountScope = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `app`                                                                             | [shared.FundsAppScope](../../../sdk/models/shared/fundsappscope.md)               | :heavy_minus_sign:                                                                | N/A                                                                               |
| `subject`                                                                         | [shared.FundsSubjectScope](../../../sdk/models/shared/fundssubjectscope.md)       | :heavy_minus_sign:                                                                | N/A                                                                               |
| `subjectApp`                                                                      | [shared.FundsSubjectAppScope](../../../sdk/models/shared/fundssubjectappscope.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `tenant`                                                                          | [shared.FundsTenantScope](../../../sdk/models/shared/fundstenantscope.md)         | :heavy_minus_sign:                                                                | N/A                                                                               |
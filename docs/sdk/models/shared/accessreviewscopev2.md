# AccessReviewScopeV2

The AccessReviewScopeV2 message.

This message contains a oneof named apps_and_resources_scope. Only a single field of the following list may be set at a time:
  - appAccess
  - specificResources
  - appSelectionCriteria
  - resourceTypeSelections


This message contains a oneof named users_scope. Only a single field of the following list may be set at a time:
  - allUsers
  - selectedUsers
  - userCriteria
  - celExpression


This message contains a oneof named accounts_scope. Only a single field of the following list may be set at a time:
  - allAccounts
  - accountCriteria
  - accountCelExpression


This message contains a oneof named grants_scope. Only a single field of the following list may be set at a time:
  - allGrants
  - grantsByCriteria


This message contains a oneof named access_conflicts_scope. Only a single field of the following list may be set at a time:
  - allAccessConflicts
  - specificAccessConflicts


This message contains a oneof named resource_scope. Only a single field of the following list may be set at a time:
  - resourceSelection


## Example Usage

```typescript
import { AccessReviewScopeV2 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewScopeV2 = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `accountCelExpression`                                                                            | [shared.CelExpressionScope](../../../sdk/models/shared/celexpressionscope.md)                     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `accountCriteria`                                                                                 | [shared.AccountCriteriaScope](../../../sdk/models/shared/accountcriteriascope.md)                 | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `allAccessConflicts`                                                                              | [shared.AllAccessConflictsScope](../../../sdk/models/shared/allaccessconflictsscope.md)           | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `allAccounts`                                                                                     | [shared.AllAccountsScope](../../../sdk/models/shared/allaccountsscope.md)                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `allGrants`                                                                                       | [shared.AllGrantsScope](../../../sdk/models/shared/allgrantsscope.md)                             | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `allUsers`                                                                                        | [shared.AllUsersScope](../../../sdk/models/shared/allusersscope.md)                               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `appAccess`                                                                                       | [shared.ApplicationAccessScope](../../../sdk/models/shared/applicationaccessscope.md)             | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `appSelectionCriteria`                                                                            | [shared.AppSelectionCriteriaScope](../../../sdk/models/shared/appselectioncriteriascope.md)       | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `celExpression`                                                                                   | [shared.CelExpressionScope](../../../sdk/models/shared/celexpressionscope.md)                     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `grantsByCriteria`                                                                                | [shared.GrantsByCriteriaScope](../../../sdk/models/shared/grantsbycriteriascope.md)               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `resourceSelection`                                                                               | [shared.ResourceSelectionScope](../../../sdk/models/shared/resourceselectionscope.md)             | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `resourceTypeSelections`                                                                          | [shared.ResourceTypeSelectionScope](../../../sdk/models/shared/resourcetypeselectionscope.md)     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `selectedUsers`                                                                                   | [shared.SelectedUsersScope](../../../sdk/models/shared/selectedusersscope.md)                     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `specificAccessConflicts`                                                                         | [shared.SpecificAccessConflictsScope](../../../sdk/models/shared/specificaccessconflictsscope.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `specificResources`                                                                               | [shared.SpecificResourcesScope](../../../sdk/models/shared/specificresourcesscope.md)             | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `userCriteria`                                                                                    | [shared.UserCriteriaScope](../../../sdk/models/shared/usercriteriascope.md)                       | :heavy_minus_sign:                                                                                | N/A                                                                                               |
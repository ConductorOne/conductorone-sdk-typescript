# CreateAppRequest

 The CreateAppRequest message is used to create a new app.



## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `certifyPolicyId`                                  | *string*                                           | :heavy_minus_sign:                                 |  Creates the app with this certify policy.<br/>    |
| `description`                                      | *string*                                           | :heavy_minus_sign:                                 |  Creates the app with this description.<br/>       |
| `displayName`                                      | *string*                                           | :heavy_minus_sign:                                 |  Creates the app with this display name.<br/>      |
| `grantPolicyId`                                    | *string*                                           | :heavy_minus_sign:                                 |  Creates the app with this grant policy.<br/>      |
| `monthlyCostUsd`                                   | *number*                                           | :heavy_minus_sign:                                 |  Creates the app with this monthly cost per seat.<br/> |
| `owners`                                           | *string*[]                                         | :heavy_minus_sign:                                 |  Creates the app with this array of owners.<br/>   |
| `revokePolicyId`                                   | *string*                                           | :heavy_minus_sign:                                 |  Creates the app with this revoke policy.<br/>     |
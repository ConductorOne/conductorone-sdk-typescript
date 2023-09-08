# App

 The App object provides all of the details for an app, as well as some configuration.



## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `appAccountId`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The ID of the Account named by AccountName.<br/>                                                            |
| `appAccountName`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The AccountName of the app. For example, AWS is AccountID, Github is Org Name, and Okta is Okta Subdomain.<br/> |
| `certifyPolicyId`                                                                                            | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The ID of the Certify Policy associated with this App.<br/>                                                 |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `deletedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The app's description.<br/>                                                                                 |
| `displayName`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The app's display name.<br/>                                                                                |
| `fieldMask`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `grantPolicyId`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The ID of the Grant Policy associated with this App.<br/>                                                   |
| `iconUrl`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The URL of an icon to display for the app.<br/>                                                             |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The ID of the app.<br/>                                                                                     |
| `logoUri`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The URL of a logo to display for the app.<br/>                                                              |
| `monthlyCostUsd`                                                                                             | *number*                                                                                                     | :heavy_minus_sign:                                                                                           |  The cost of an app per-seat, so that total cost can be calculated by the grant count.<br/>                  |
| `parentAppId`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The ID of the app that created this app, if any.<br/>                                                       |
| `revokePolicyId`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The ID of the Revoke Policy associated with this App.<br/>                                                  |
| `updatedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `userCount`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           |  The number of users with grants to this app.<br/>                                                           |
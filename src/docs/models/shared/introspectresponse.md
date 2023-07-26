# IntrospectResponse

 IntrospectResponse contains information about the current user who is authenticated.



## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `features`                                                                        | *string*[]                                                                        | :heavy_minus_sign:                                                                |  The list of feature flags enabled for the tenant the logged in user belongs to.<br/> |
| `permissions`                                                                     | *string*[]                                                                        | :heavy_minus_sign:                                                                |  The list of permissions that the current logged in user has.<br/>                |
| `principleId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                |  The principleID of the current logged in user.<br/>                              |
| `roles`                                                                           | *string*[]                                                                        | :heavy_minus_sign:                                                                |  The list of roles that the current logged in user has.<br/>                      |
| `userId`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                |  The userID of the current logged in user.<br/>                                   |
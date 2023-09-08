# PersonalClientServiceCreateRequest

The PersonalClientServiceCreateRequest message contains the fields for creating a new personal client.


## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `allowSourceCidr`                                | *string*[]                                       | :heavy_minus_sign:                               | A list of CIDRs to restrict this credential to.  |
| `displayName`                                    | *string*                                         | :heavy_minus_sign:                               | The display name for the new personal client.    |
| `expires`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `scopedRoles`                                    | *string*[]                                       | :heavy_minus_sign:                               | The list of roles to restrict the credential to. |
# LocalUserInvitationServiceCreateResponse

The LocalUserInvitationServiceCreateResponse message.

## Example Usage

```typescript
import { LocalUserInvitationServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LocalUserInvitationServiceCreateResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `invitation`                                                                               | [shared.LocalUserInvitation](../../../sdk/models/shared/localuserinvitation.md)            | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `invitationUrl`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | Link the invitee opens to accept. Returned only here; C1 stores just a hash of its secret. |
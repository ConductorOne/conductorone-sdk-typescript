# LocalUserInvitationServiceCreateRequest

The LocalUserInvitationServiceCreateRequest message.

## Example Usage

```typescript
import { LocalUserInvitationServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LocalUserInvitationServiceCreateRequest = {
  displayName: "Diana.Jerde14",
  email: "Elinor14@gmail.com",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `displayName`                                        | *string*                                             | :heavy_check_mark:                                   | The displayName field.                               |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | The email field.                                     |
| `initialRoleIds`                                     | *string*[]                                           | :heavy_minus_sign:                                   | Optional initial role IDs to assign upon acceptance. |
| `jobId`                                              | *string*                                             | :heavy_minus_sign:                                   | Optional FK to a ThirdPartyJob.                      |
| `onboardingFlowId`                                   | *string*                                             | :heavy_minus_sign:                                   | Optional onboarding flow override.                   |
| `purpose`                                            | *string*                                             | :heavy_minus_sign:                                   | Human-readable reason for the invitation.            |
| `sponsorUserId`                                      | *string*                                             | :heavy_minus_sign:                                   | Optional sponsor User override.                      |
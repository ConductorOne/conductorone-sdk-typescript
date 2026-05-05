# LocalUserInvitationServiceSearchRequest

The LocalUserInvitationServiceSearchRequest message.

## Example Usage

```typescript
import { LocalUserInvitationServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LocalUserInvitationServiceSearchRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `directoryAppId`                                                  | *string*                                                          | :heavy_minus_sign:                                                | The directoryAppId field.                                         |
| `pageSize`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The pageSize field.                                               |
| `pageToken`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The pageToken field.                                              |
| `statusFilter`                                                    | [shared.StatusFilter](../../../sdk/models/shared/statusfilter.md) | :heavy_minus_sign:                                                | Optional filter by invitation status.                             |
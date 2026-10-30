# CredentialExpiringEvidence

The CredentialExpiringEvidence message.

## Example Usage

```typescript
import { CredentialExpiringEvidence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialExpiringEvidence = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `expired`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the expiry was already past when last observed.                                       |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
# EnsureOnboardingSessionResponse

Returns the active onboarding conversation and whether this call created it.

## Example Usage

```typescript
import { EnsureOnboardingSessionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EnsureOnboardingSessionResponse = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `conversationId`                                               | *string*                                                       | :heavy_minus_sign:                                             | The active onboarding conversation ID.                         |
| `created`                                                      | *boolean*                                                      | :heavy_minus_sign:                                             | True only when this call created and started the conversation. |
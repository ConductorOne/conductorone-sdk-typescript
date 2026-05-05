# C1BuiltInProviderConfig

C1BuiltInProviderConfig selects the ConductorOne built-in email provider.
 Emails are sent from no-reply@conductorone.com via the platform SendGrid account.
 Only supports sending to C1 users — external email addresses are not supported.
 No configuration fields required.

## Example Usage

```typescript
import { C1BuiltInProviderConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1BuiltInProviderConfig = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |
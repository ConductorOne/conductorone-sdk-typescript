# SendGridProviderConfig

SendGridProviderConfig configures sending via a customer's SendGrid account.

## Example Usage

```typescript
import { SendGridProviderConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SendGridProviderConfig = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                                               | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Customer's SendGrid API key. Write-only: accepted on create/update, never returned in Get.<br/> Empty on update means "keep existing key". |
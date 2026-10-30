# EmailCapabilitiesServiceGetResponse

The EmailCapabilitiesServiceGetResponse message.

## Example Usage

```typescript
import { EmailCapabilitiesServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EmailCapabilitiesServiceGetResponse = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `externalEmailSupported`                                                                                                                        | *boolean*                                                                                                                                       | :heavy_minus_sign:                                                                                                                              | True when external email addresses (outside C1 users) can be used as<br/> recipients in automation email steps. False for the C1 built-in provider. |
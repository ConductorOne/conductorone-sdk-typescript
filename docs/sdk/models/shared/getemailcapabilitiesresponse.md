# GetEmailCapabilitiesResponse

The GetEmailCapabilitiesResponse message.

## Example Usage

```typescript
import { GetEmailCapabilitiesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetEmailCapabilitiesResponse = {};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalEmailSupported`                                                                                                                                                             | *boolean*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                   | True when external email addresses (outside C1 users) can be used as<br/> recipients in automation email steps. False when only the C1 built-in<br/> provider is configured (C1 users only). |
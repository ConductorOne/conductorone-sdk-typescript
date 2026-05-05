# TestTenantEmailProviderResponse

The TestTenantEmailProviderResponse message.

## Example Usage

```typescript
import { TestTenantEmailProviderResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TestTenantEmailProviderResponse = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `message`                                     | *string*                                      | :heavy_minus_sign:                            | Human-readable detail about the result.       |
| `success`                                     | *boolean*                                     | :heavy_minus_sign:                            | Whether the test email was sent successfully. |
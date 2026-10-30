# SSOApplicationServiceRotateClientSecretResponse

SSOApplicationServiceRotateClientSecretResponse contains the replacement
 secret. The value cannot be retrieved again.

## Example Usage

```typescript
import { SSOApplicationServiceRotateClientSecretResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceRotateClientSecretResponse = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `clientSecret`                         | *string*                               | :heavy_minus_sign:                     | New client secret, shown exactly once. |
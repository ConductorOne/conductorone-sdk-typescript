# TestSourceIPRequest

The TestSourceIPRequest message.

## Example Usage

```typescript
import { TestSourceIPRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TestSourceIPRequest = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `allowCidr`                                 | *string*[]                                  | :heavy_minus_sign:                          | The allowCidr field.                        |
| `sourceIp`                                  | *string*                                    | :heavy_minus_sign:                          | if unset, uses the source IP of the request |
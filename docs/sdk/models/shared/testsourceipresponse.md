# TestSourceIPResponse

The TestSourceIPResponse message.

## Example Usage

```typescript
import { TestSourceIPResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TestSourceIPResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `allowed`                                                                             | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether the tested IP address is allowed by the CIDR rules.                           |
| `checkedIp`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | The IP address that was checked, either from the request or inferred from the caller. |
| `details`                                                                             | [shared.Status](../../../sdk/models/shared/status.md)                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
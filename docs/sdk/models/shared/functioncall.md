# FunctionCall

FunctionCall represents a client-side function invocation.

## Example Usage

```typescript
import { FunctionCall } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionCall = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `args`                   | Record<string, *string*> | :heavy_minus_sign:       | The args field.          |
| `call`                   | *string*                 | :heavy_minus_sign:       | The call field.          |
| `message`                | *string*                 | :heavy_minus_sign:       | The message field.       |
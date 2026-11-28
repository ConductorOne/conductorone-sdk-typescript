# MCPPromptArgument

MCPPromptArgument describes a native prompt argument, rather than an argument value.

## Example Usage

```typescript
import { MCPPromptArgument } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPPromptArgument = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `description`                                         | *string*                                              | :heavy_minus_sign:                                    | Argument description, supplied by discovery.          |
| `name`                                                | *string*                                              | :heavy_minus_sign:                                    | Native argument name, supplied by discovery.          |
| `required`                                            | *boolean*                                             | :heavy_minus_sign:                                    | Whether the native prompt requires this argument.     |
| `title`                                               | *string*                                              | :heavy_minus_sign:                                    | Human-readable argument title, supplied by discovery. |
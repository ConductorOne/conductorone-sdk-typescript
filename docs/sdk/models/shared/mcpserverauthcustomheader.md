# MCPServerAuthCustomHeader

MCPServerAuthCustomHeader provides custom header authentication.

## Example Usage

```typescript
import { MCPServerAuthCustomHeader } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerAuthCustomHeader = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `headerName`       | *string*           | :heavy_minus_sign: | HTTP header name.  |
| `headerValue`      | *string*           | :heavy_minus_sign: | HTTP header value. |
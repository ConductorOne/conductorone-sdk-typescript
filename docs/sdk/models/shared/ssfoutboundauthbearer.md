# SSFOutboundAuthBearer

SSFOutboundAuthBearer is a static bearer token for outbound auth.
 Token is write-only: accepted on create/update, never returned.

## Example Usage

```typescript
import { SSFOutboundAuthBearer } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFOutboundAuthBearer = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `token`            | *string*           | :heavy_minus_sign: | The token field.   |
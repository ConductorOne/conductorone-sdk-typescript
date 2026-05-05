# HookFilter

HookFilter determines which tool calls a hook applies to.

## Example Usage

```typescript
import { HookFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: HookFilter = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `celExpression`                                                                                                                                   | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | CEL expression evaluated against tool call context.<br/> Available variable: ctx.tool_name (string).<br/> Must evaluate to bool. Empty matches all tools. |
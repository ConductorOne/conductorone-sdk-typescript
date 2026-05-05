# HooksServiceCreateResponse

The HooksServiceCreateResponse message.

## Example Usage

```typescript
import { HooksServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: HooksServiceCreateResponse = {};
```

## Fields

| Field                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hook`                                                                                                                                                                                                                    | [shared.Hook](../../../sdk/models/shared/hook.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                        | Hook represents a customer-configured interception point for tool calls.<br/><br/>This message contains a oneof named hook_type. Only a single field of the following list may be set at a time:<br/>  - function<br/>  - builtinPattern<br/> |
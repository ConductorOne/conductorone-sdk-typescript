# FunctionsServiceInvokeRequest

The FunctionsServiceInvokeRequest message.

This message contains a oneof named arg. Only a single field of the following list may be set at a time:
  - json


## Example Usage

```typescript
import { FunctionsServiceInvokeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceInvokeRequest = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `commitId`                                                                                                                                             | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The commitId field.                                                                                                                                    |
| `json`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The json field.<br/>This field is part of the `arg` oneof.<br/>See the documentation for `c1.api.functions.v1.FunctionsServiceInvokeRequest` for more details. |
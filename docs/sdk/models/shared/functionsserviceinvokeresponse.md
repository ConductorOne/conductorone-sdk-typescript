# FunctionsServiceInvokeResponse

The FunctionsServiceInvokeResponse message.

This message contains a oneof named resp. Only a single field of the following list may be set at a time:
  - json


## Example Usage

```typescript
import { FunctionsServiceInvokeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceInvokeResponse = {};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `json`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | The json field.<br/>This field is part of the `resp` oneof.<br/>See the documentation for `c1.api.functions.v1.FunctionsServiceInvokeResponse` for more details. |
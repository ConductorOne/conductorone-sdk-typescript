# AuthzenCelPolicy

AuthzenCelPolicy holds the CEL source for a policy revision.

## Example Usage

```typescript
import { AuthzenCelPolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenCelPolicy = {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environment`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The CEL environment name+version this expression was validated against<br/> (e.g. "authzen_policy/v1"). Set by the server; not accepted from callers. |
| `expression`                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | CEL expression, evaluated against `environment`. Validated for syntax<br/> and required to yield bool on create; invalid or non-bool CEL is<br/> rejected. |
# FunctionTestResultAssertion

A single assertion within a test.

## Example Usage

```typescript
import { FunctionTestResultAssertion } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionTestResultAssertion = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `actual`                                    | *string*                                    | :heavy_minus_sign:                          | The actual value.                           |
| `at`                                        | *string*                                    | :heavy_minus_sign:                          | Source location of the assertion.           |
| `description`                               | *string*                                    | :heavy_minus_sign:                          | Description of the assertion.               |
| `expected`                                  | *string*                                    | :heavy_minus_sign:                          | The expected value.                         |
| `operator`                                  | *string*                                    | :heavy_minus_sign:                          | The comparison operator (e.g., "==", "!="). |
| `pass`                                      | *boolean*                                   | :heavy_minus_sign:                          | Whether the assertion passed.               |
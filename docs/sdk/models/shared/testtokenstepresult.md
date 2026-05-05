# TestTokenStepResult

TestTokenStepResult represents the result of a single validation step.

## Example Usage

```typescript
import { TestTokenStepResult } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TestTokenStepResult = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `actual`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Actual value from the token.                                                   |
| `detail`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Human-readable detail message.                                                 |
| `expected`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Expected value (for comparison steps).                                         |
| `passed`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether this step passed.                                                      |
| `skipped`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether this step was skipped (e.g., CIDR check when no allowlist configured). |
| `stepName`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Step name for display (e.g., "JWT decode", "Issuer match").                    |
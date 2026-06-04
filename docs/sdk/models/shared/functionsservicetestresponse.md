# FunctionsServiceTestResponse

FunctionsServiceTestResponse contains test execution results.

## Example Usage

```typescript
import { FunctionsServiceTestResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceTestResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `result`                                                                        | [shared.FunctionTestResult](../../../sdk/models/shared/functiontestresult.md)   | :heavy_minus_sign:                                                              | N/A                                                                             |
| `results`                                                                       | [shared.FunctionTestResult](../../../sdk/models/shared/functiontestresult.md)[] | :heavy_minus_sign:                                                              | All test results.                                                               |
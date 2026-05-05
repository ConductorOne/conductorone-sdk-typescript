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
| `functionTestResult`                                                            | [shared.FunctionTestResult](../../../sdk/models/shared/functiontestresult.md)   | :heavy_minus_sign:                                                              | FunctionTestResult contains the result of a single test case execution.         |
| `results`                                                                       | [shared.FunctionTestResult](../../../sdk/models/shared/functiontestresult.md)[] | :heavy_minus_sign:                                                              | All test results.                                                               |
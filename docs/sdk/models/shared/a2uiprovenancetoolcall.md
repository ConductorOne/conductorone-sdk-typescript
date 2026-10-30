# A2UIProvenanceToolCall

A2UIProvenanceToolCall is one tool call extracted from the transcript.

## Example Usage

```typescript
import { A2UIProvenanceToolCall } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIProvenanceToolCall = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `calledAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `inputDigest`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Leading characters of the tool input, whitespace-collapsed.                                   |
| `toolName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The toolName field.                                                                           |
# ListAutomationsResponse

The ListAutomationsResponse message.

## Example Usage

```typescript
import { ListAutomationsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListAutomationsResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `list`                                                          | [shared.Automation](../../../sdk/models/shared/automation.md)[] | :heavy_minus_sign:                                              | The list field.                                                 |
| `nextPageToken`                                                 | *string*                                                        | :heavy_minus_sign:                                              | The nextPageToken field.                                        |
# C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse

## Example Usage

```typescript
import {
  C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse =
    {
      contentType: "<value>",
      statusCode: 924442,
    };
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                                   | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | HTTP response content type for this operation                                                                                                                                   |
| `statusCode`                                                                                                                                                                    | *number*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | HTTP response status code for this operation                                                                                                                                    |
| `rawResponse`                                                                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                                           | :heavy_check_mark:                                                                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                                                                         |
| `mcpAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse`                                                                                                           | [shared.MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse](../../../sdk/models/shared/mcpaccessprofiletoolbindingservicegetaccessprofilesfortoolsresponse.md) | :heavy_minus_sign:                                                                                                                                                              | MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse returns<br/> access profiles grouped by MCP tool.                                                           |
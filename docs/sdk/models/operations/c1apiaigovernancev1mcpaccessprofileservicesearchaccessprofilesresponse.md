# C1ApiAiGovernanceV1MCPAccessProfileServiceSearchAccessProfilesResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1MCPAccessProfileServiceSearchAccessProfilesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1MCPAccessProfileServiceSearchAccessProfilesResponse = {
    contentType: "<value>",
    statusCode: 78187,
  };
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                   | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | HTTP response content type for this operation                                                                                                   |
| `statusCode`                                                                                                                                    | *number*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | HTTP response status code for this operation                                                                                                    |
| `rawResponse`                                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                           | :heavy_check_mark:                                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                                         |
| `mcpAccessProfileServiceSearchAccessProfilesResponse`                                                                                           | [shared.MCPAccessProfileServiceSearchAccessProfilesResponse](../../../sdk/models/shared/mcpaccessprofileservicesearchaccessprofilesresponse.md) | :heavy_minus_sign:                                                                                                                              | MCPAccessProfileServiceSearchAccessProfilesResponse returns one page of<br/> tenant-wide MCP access profiles.                                   |
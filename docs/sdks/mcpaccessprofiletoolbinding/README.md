# MCPAccessProfileToolBinding

## Overview

### Available Operations

* [list](#list) - List
* [createBindings](#createbindings) - Create Bindings
* [deleteBindings](#deletebindings) - Delete Bindings
* [listToolsByProfileHistory](#listtoolsbyprofilehistory) - List Tools By Profile History
* [listProfilesByToolHistory](#listprofilesbytoolhistory) - List Profiles By Tool History
* [getAccessProfilesForTools](#getaccessprofilesfortools) - Get Access Profiles For Tools

## list

List returns the tool bindings for a single toolset (access profile) —
 i.e. which MCP tools belong to the toolset — paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.MCPAccessProfileToolBindingService.List" method="get" path="/api/v1/apps/{app_id}/connectors/{connector_id}/mcp_toolsets/{access_profile_id}/tool_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.mcpAccessProfileToolBinding.list({
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { mcpAccessProfileToolBindingList } from "conductorone-sdk-typescript/funcs/mcpAccessProfileToolBindingList.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await mcpAccessProfileToolBindingList(conductoroneSDKTypescript, {
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpAccessProfileToolBindingList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListRequest](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicelistrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListResponse](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicelistresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createBindings

CreateBindings adds one or more MCP tools (mcp_tool_ids) to a toolset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.MCPAccessProfileToolBindingService.CreateBindings" method="post" path="/api/v1/apps/{app_id}/connectors/{connector_id}/mcp_toolsets/{access_profile_id}/tool_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.mcpAccessProfileToolBinding.createBindings({
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { mcpAccessProfileToolBindingCreateBindings } from "conductorone-sdk-typescript/funcs/mcpAccessProfileToolBindingCreateBindings.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await mcpAccessProfileToolBindingCreateBindings(conductoroneSDKTypescript, {
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpAccessProfileToolBindingCreateBindings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceCreateBindingsRequest](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicecreatebindingsrequest.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceCreateBindingsResponse](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicecreatebindingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteBindings

DeleteBindings removes one or more MCP tools (mcp_tool_ids) from a toolset.
 Uses a POST .../delete action route because the tool IDs travel in the
 request body, which HTTP DELETE does not reliably support.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.MCPAccessProfileToolBindingService.DeleteBindings" method="post" path="/api/v1/apps/{app_id}/connectors/{connector_id}/mcp_toolsets/{access_profile_id}/tool_bindings/delete" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.mcpAccessProfileToolBinding.deleteBindings({
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { mcpAccessProfileToolBindingDeleteBindings } from "conductorone-sdk-typescript/funcs/mcpAccessProfileToolBindingDeleteBindings.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await mcpAccessProfileToolBindingDeleteBindings(conductoroneSDKTypescript, {
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpAccessProfileToolBindingDeleteBindings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceDeleteBindingsRequest](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicedeletebindingsrequest.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceDeleteBindingsResponse](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicedeletebindingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listToolsByProfileHistory

ListToolsByProfileHistory returns the transactional history of
 tools bound to (app, connector, access_profile). Newest first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.MCPAccessProfileToolBindingService.ListToolsByProfileHistory" method="get" path="/api/v1/apps/{app_id}/connectors/{connector_id}/mcp_toolsets/{access_profile_id}/tool_bindings/history" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.mcpAccessProfileToolBinding.listToolsByProfileHistory({
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { mcpAccessProfileToolBindingListToolsByProfileHistory } from "conductorone-sdk-typescript/funcs/mcpAccessProfileToolBindingListToolsByProfileHistory.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await mcpAccessProfileToolBindingListToolsByProfileHistory(conductoroneSDKTypescript, {
    appId: "<id>",
    connectorId: "<id>",
    accessProfileId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpAccessProfileToolBindingListToolsByProfileHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListToolsByProfileHistoryRequest](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicelisttoolsbyprofilehistoryrequest.md) | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                           |
| `options.retries`                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListToolsByProfileHistoryResponse](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicelisttoolsbyprofilehistoryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listProfilesByToolHistory

ListProfilesByToolHistory returns the transactional history of
 profiles bound to (app, connector, mcp_tool). Newest first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.MCPAccessProfileToolBindingService.ListProfilesByToolHistory" method="get" path="/api/v1/apps/{app_id}/connectors/{connector_id}/tool_bindings/by_tool/{mcp_tool_id}/history" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.mcpAccessProfileToolBinding.listProfilesByToolHistory({
    appId: "<id>",
    connectorId: "<id>",
    mcpToolId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { mcpAccessProfileToolBindingListProfilesByToolHistory } from "conductorone-sdk-typescript/funcs/mcpAccessProfileToolBindingListProfilesByToolHistory.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await mcpAccessProfileToolBindingListProfilesByToolHistory(conductoroneSDKTypescript, {
    appId: "<id>",
    connectorId: "<id>",
    mcpToolId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpAccessProfileToolBindingListProfilesByToolHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListProfilesByToolHistoryRequest](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicelistprofilesbytoolhistoryrequest.md) | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                           |
| `options.retries`                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceListProfilesByToolHistoryResponse](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicelistprofilesbytoolhistoryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccessProfilesForTools

GetAccessProfilesForTools returns the access profiles bound to each
 of the given MCP tools, hydrated with display_name. Used by the tools
 list to render the "toolset" column for visible rows.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.MCPAccessProfileToolBindingService.GetAccessProfilesForTools" method="post" path="/api/v1/apps/{app_id}/connectors/{connector_id}/tool_bindings/by_tools" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.mcpAccessProfileToolBinding.getAccessProfilesForTools({
    appId: "<id>",
    connectorId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { mcpAccessProfileToolBindingGetAccessProfilesForTools } from "conductorone-sdk-typescript/funcs/mcpAccessProfileToolBindingGetAccessProfilesForTools.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await mcpAccessProfileToolBindingGetAccessProfilesForTools(conductoroneSDKTypescript, {
    appId: "<id>",
    connectorId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mcpAccessProfileToolBindingGetAccessProfilesForTools failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsRequest](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicegetaccessprofilesfortoolsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                           |
| `options.retries`                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1MCPAccessProfileToolBindingServiceGetAccessProfilesForToolsResponse](../../sdk/models/operations/c1apiaigovernancev1mcpaccessprofiletoolbindingservicegetaccessprofilesfortoolsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |
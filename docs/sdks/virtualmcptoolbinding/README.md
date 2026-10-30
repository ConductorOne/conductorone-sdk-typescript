# VirtualMCPToolBinding

## Overview

### Available Operations

* [list](#list) - List
* [createBindings](#createbindings) - Create Bindings
* [deleteBindings](#deletebindings) - Delete Bindings

## list

List returns one page of individual tools assigned directly to an Assigned-tools Virtual MCP Server.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.VirtualMCPToolBindingService.List" method="get" path="/api/v1/virtual_mcp_servers/{virtual_mcp_server_id}/tool_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.virtualMCPToolBinding.list({
    virtualMcpServerId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { virtualMCPToolBindingList } from "conductorone-sdk-typescript/funcs/virtualMCPToolBindingList.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await virtualMCPToolBindingList(conductoroneSDKTypescript, {
    virtualMcpServerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMCPToolBindingList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAiGovernanceV1VirtualMCPToolBindingServiceListRequest](../../sdk/models/operations/c1apiaigovernancev1virtualmcptoolbindingservicelistrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1VirtualMCPToolBindingServiceListResponse](../../sdk/models/operations/c1apiaigovernancev1virtualmcptoolbindingservicelistresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createBindings

CreateBindings assigns up to 100 enabled, visible tools to an Assigned-tools Virtual MCP Server.
 Existing assignments are unchanged and previously deleted assignments are restored.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.VirtualMCPToolBindingService.CreateBindings" method="post" path="/api/v1/virtual_mcp_servers/{virtual_mcp_server_id}/tool_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.virtualMCPToolBinding.createBindings({
    virtualMcpServerId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { virtualMCPToolBindingCreateBindings } from "conductorone-sdk-typescript/funcs/virtualMCPToolBindingCreateBindings.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await virtualMCPToolBindingCreateBindings(conductoroneSDKTypescript, {
    virtualMcpServerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMCPToolBindingCreateBindings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.C1ApiAiGovernanceV1VirtualMCPToolBindingServiceCreateBindingsRequest](../../sdk/models/operations/c1apiaigovernancev1virtualmcptoolbindingservicecreatebindingsrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1VirtualMCPToolBindingServiceCreateBindingsResponse](../../sdk/models/operations/c1apiaigovernancev1virtualmcptoolbindingservicecreatebindingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteBindings

DeleteBindings removes up to 100 individual-tool assignments from an Assigned-tools Virtual MCP Server.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.ai_governance.v1.VirtualMCPToolBindingService.DeleteBindings" method="post" path="/api/v1/virtual_mcp_servers/{virtual_mcp_server_id}/tool_bindings/delete" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.virtualMCPToolBinding.deleteBindings({
    virtualMcpServerId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { virtualMCPToolBindingDeleteBindings } from "conductorone-sdk-typescript/funcs/virtualMCPToolBindingDeleteBindings.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await virtualMCPToolBindingDeleteBindings(conductoroneSDKTypescript, {
    virtualMcpServerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualMCPToolBindingDeleteBindings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.C1ApiAiGovernanceV1VirtualMCPToolBindingServiceDeleteBindingsRequest](../../sdk/models/operations/c1apiaigovernancev1virtualmcptoolbindingservicedeletebindingsrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAiGovernanceV1VirtualMCPToolBindingServiceDeleteBindingsResponse](../../sdk/models/operations/c1apiaigovernancev1virtualmcptoolbindingservicedeletebindingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |
# ConnectorAuthoringActivation

## Overview

### Available Operations

* [activateRevision](#activaterevision) - Activate Revision
* [rollbackRevision](#rollbackrevision) - Rollback Revision

## activateRevision

ActivateRevision redeems a one-time approval token to activate a built
 connector revision onto its instance connector. It is OWNER-only.
 Double-activate protection is the single-use approval token itself: redeeming
 it is a compare-and-swap that rejects a second redemption of the same token.
 idempotency_key is optional and reserved for a future replay-result cache.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.connector_authoring.v1.ConnectorAuthoringActivationService.ActivateRevision" method="post" path="/api/v1/connector-authoring/activations" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.connectorAuthoringActivation.activateRevision();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { connectorAuthoringActivationActivateRevision } from "conductorone-sdk-typescript/funcs/connectorAuthoringActivationActivateRevision.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await connectorAuthoringActivationActivateRevision(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorAuthoringActivationActivateRevision failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ConnectorAuthoringServiceActivateRevisionRequest](../../sdk/models/shared/connectorauthoringserviceactivaterevisionrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceActivateRevisionResponse](../../sdk/models/operations/c1apiconnectorauthoringv1connectorauthoringactivationserviceactivaterevisionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## rollbackRevision

RollbackRevision redeems a one-time approval token (bound to the rollback
 target's integrity root) to re-point the published + instance pointers at a
 previously activated, still-servable revision under a strictly greater
 activation epoch. It is OWNER-only. The rolled-back-FROM revision's serve
 state is untouched — the pointer move alone stops it serving; permanently
 ending a revision's serve eligibility is a platform kill-switch operation,
 not a tenant API verb.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.connector_authoring.v1.ConnectorAuthoringActivationService.RollbackRevision" method="post" path="/api/v1/connector-authoring/rollbacks" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.connectorAuthoringActivation.rollbackRevision();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { connectorAuthoringActivationRollbackRevision } from "conductorone-sdk-typescript/funcs/connectorAuthoringActivationRollbackRevision.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await connectorAuthoringActivationRollbackRevision(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectorAuthoringActivationRollbackRevision failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ConnectorAuthoringServiceRollbackRevisionRequest](../../sdk/models/shared/connectorauthoringservicerollbackrevisionrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceRollbackRevisionResponse](../../sdk/models/operations/c1apiconnectorauthoringv1connectorauthoringactivationservicerollbackrevisionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |
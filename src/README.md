# conductorone-sdk-typescript

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/ConductorOne/conductorone-sdk-typescript
```

### Yarn

```bash
yarn add https://github.com/ConductorOne/conductorone-sdk-typescript
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
    const sdk = new ConductoroneSDKTypescript({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const result = await sdk.apps.create({
        owners: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [apps](docs/sdks/apps/README.md)

* [create](docs/sdks/apps/README.md#create) - Create
* [delete](docs/sdks/apps/README.md#delete) - Delete
* [get](docs/sdks/apps/README.md#get) - Get
* [list](docs/sdks/apps/README.md#list) - List
* [update](docs/sdks/apps/README.md#update) - Update

### [connector](docs/sdks/connector/README.md)

* [create](docs/sdks/connector/README.md#create) - Create
* [createDelegated](docs/sdks/connector/README.md#createdelegated) - Create Delegated
* [delete](docs/sdks/connector/README.md#delete) - Delete
* [forceSync](docs/sdks/connector/README.md#forcesync) - Force Sync
* [get](docs/sdks/connector/README.md#get) - Get
* [getCredentials](docs/sdks/connector/README.md#getcredentials) - Get Credentials
* [list](docs/sdks/connector/README.md#list) - List
* [revokeCredential](docs/sdks/connector/README.md#revokecredential) - Revoke Credential
* [rotateCredential](docs/sdks/connector/README.md#rotatecredential) - Rotate Credential
* [update](docs/sdks/connector/README.md#update) - Update
* [updateDelegated](docs/sdks/connector/README.md#updatedelegated) - Update Delegated

### [appEntitlements](docs/sdks/appentitlements/README.md)

* [get](docs/sdks/appentitlements/README.md#get) - Get
* [list](docs/sdks/appentitlements/README.md#list) - List
* [listForAppResource](docs/sdks/appentitlements/README.md#listforappresource) - List For App Resource
* [listForAppUser](docs/sdks/appentitlements/README.md#listforappuser) - List For App User
* [listUsers](docs/sdks/appentitlements/README.md#listusers) - List Users
* [update](docs/sdks/appentitlements/README.md#update) - Update

### [appEntitlementUserBinding](docs/sdks/appentitlementuserbinding/README.md)

* [listAppUsersForIdentityWithGrant](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant) - List App Users For Identity With Grant

### [appEntitlementOwners](docs/sdks/appentitlementowners/README.md)

* [add](docs/sdks/appentitlementowners/README.md#add) - Add
* [list](docs/sdks/appentitlementowners/README.md#list) - List
* [remove](docs/sdks/appentitlementowners/README.md#remove) - Remove
* [set](docs/sdks/appentitlementowners/README.md#set) - Set

### [appOwners](docs/sdks/appowners/README.md)

* [add](docs/sdks/appowners/README.md#add) - Add
* [list](docs/sdks/appowners/README.md#list) - List
* [remove](docs/sdks/appowners/README.md#remove) - Remove
* [set](docs/sdks/appowners/README.md#set) - Set

### [appReport](docs/sdks/appreport/README.md)

* [list](docs/sdks/appreport/README.md#list) - List

### [appReportAction](docs/sdks/appreportaction/README.md)

* [generateReport](docs/sdks/appreportaction/README.md#generatereport) - Generate Report

### [appResourceType](docs/sdks/appresourcetype/README.md)

* [get](docs/sdks/appresourcetype/README.md#get) - Get
* [list](docs/sdks/appresourcetype/README.md#list) - List

### [appResource](docs/sdks/appresource/README.md)

* [get](docs/sdks/appresource/README.md#get) - Get
* [list](docs/sdks/appresource/README.md#list) - List

### [appResourceOwners](docs/sdks/appresourceowners/README.md)

* [list](docs/sdks/appresourceowners/README.md#list) - List

### [appUsageControls](docs/sdks/appusagecontrols/README.md)

* [get](docs/sdks/appusagecontrols/README.md#get) - Get
* [update](docs/sdks/appusagecontrols/README.md#update) - Update

### [appUser](docs/sdks/appuser/README.md)

* [update](docs/sdks/appuser/README.md#update) - Update

### [attributes](docs/sdks/attributes/README.md)

* [createAttributeValue](docs/sdks/attributes/README.md#createattributevalue) - Create Attribute Value
* [deleteAttributeValue](docs/sdks/attributes/README.md#deleteattributevalue) - Delete Attribute Value
* [getAttributeValue](docs/sdks/attributes/README.md#getattributevalue) - Get Attribute Value
* [listAttributeTypes](docs/sdks/attributes/README.md#listattributetypes) - List Attribute Types
* [listAttributeValues](docs/sdks/attributes/README.md#listattributevalues) - List Attribute Values

### [auth](docs/sdks/auth/README.md)

* [introspect](docs/sdks/auth/README.md#introspect) - Introspect

### [requestCatalogManagement](docs/sdks/requestcatalogmanagement/README.md)

* [addAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#addaccessentitlements) - Add Access Entitlements
* [addAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#addappentitlements) - Add App Entitlements
* [create](docs/sdks/requestcatalogmanagement/README.md#create) - Create
* [delete](docs/sdks/requestcatalogmanagement/README.md#delete) - Delete
* [get](docs/sdks/requestcatalogmanagement/README.md#get) - Get
* [list](docs/sdks/requestcatalogmanagement/README.md#list) - List
* [listEntitlementsForAccess](docs/sdks/requestcatalogmanagement/README.md#listentitlementsforaccess) - List Entitlements For Access
* [listEntitlementsPerCatalog](docs/sdks/requestcatalogmanagement/README.md#listentitlementspercatalog) - List Entitlements Per Catalog
* [removeAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeaccessentitlements) - Remove Access Entitlements
* [removeAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeappentitlements) - Remove App Entitlements
* [update](docs/sdks/requestcatalogmanagement/README.md#update) - Update

### [directory](docs/sdks/directory/README.md)

* [create](docs/sdks/directory/README.md#create) - Create
* [delete](docs/sdks/directory/README.md#delete) - Delete
* [get](docs/sdks/directory/README.md#get) - Get
* [list](docs/sdks/directory/README.md#list) - List

### [personalClient](docs/sdks/personalclient/README.md)

* [create](docs/sdks/personalclient/README.md#create) - Create

### [roles](docs/sdks/roles/README.md)

* [get](docs/sdks/roles/README.md#get) - Get
* [list](docs/sdks/roles/README.md#list) - List
* [update](docs/sdks/roles/README.md#update) - Update

### [policies](docs/sdks/policies/README.md)

* [create](docs/sdks/policies/README.md#create) - Create
* [delete](docs/sdks/policies/README.md#delete) - Delete
* [get](docs/sdks/policies/README.md#get) - Get
* [list](docs/sdks/policies/README.md#list) - List
* [update](docs/sdks/policies/README.md#update) - Update

### [policyValidate](docs/sdks/policyvalidate/README.md)

* [validateCEL](docs/sdks/policyvalidate/README.md#validatecel) - Validate Cel

### [appResourceSearch](docs/sdks/appresourcesearch/README.md)

* [searchAppResourceTypes](docs/sdks/appresourcesearch/README.md#searchappresourcetypes) - Search App Resource Types

### [appSearch](docs/sdks/appsearch/README.md)

* [search](docs/sdks/appsearch/README.md#search) - Search

### [attributeSearch](docs/sdks/attributesearch/README.md)

* [searchAttributeValues](docs/sdks/attributesearch/README.md#searchattributevalues) - Search Attribute Values

### [appEntitlementSearch](docs/sdks/appentitlementsearch/README.md)

* [search](docs/sdks/appentitlementsearch/README.md#search) - Search

### [policySearch](docs/sdks/policysearch/README.md)

* [search](docs/sdks/policysearch/README.md#search) - Search

### [requestCatalogSearch](docs/sdks/requestcatalogsearch/README.md)

* [searchEntitlements](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Search Entitlements

### [taskSearch](docs/sdks/tasksearch/README.md)

* [search](docs/sdks/tasksearch/README.md#search) - Search

### [userSearch](docs/sdks/usersearch/README.md)

* [search](docs/sdks/usersearch/README.md#search) - Search

### [awsExternalIDSettings](docs/sdks/awsexternalidsettings/README.md)

* [get](docs/sdks/awsexternalidsettings/README.md#get) - Get

### [sessionSettings](docs/sdks/sessionsettings/README.md)

* [get](docs/sdks/sessionsettings/README.md#get) - Get
* [update](docs/sdks/sessionsettings/README.md#update) - Update

### [task](docs/sdks/task/README.md)

* [createGrantTask](docs/sdks/task/README.md#creategranttask) - Create Grant Task
* [createRevokeTask](docs/sdks/task/README.md#createrevoketask) - Create Revoke Task
* [get](docs/sdks/task/README.md#get) - Get

### [taskActions](docs/sdks/taskactions/README.md)

* [approve](docs/sdks/taskactions/README.md#approve) - Approve
* [comment](docs/sdks/taskactions/README.md#comment) - Comment
* [deny](docs/sdks/taskactions/README.md#deny) - Deny
* [escalateToEmergencyAccess](docs/sdks/taskactions/README.md#escalatetoemergencyaccess) - Escalate To Emergency Access
* [restart](docs/sdks/taskactions/README.md#restart) - Restart

### [user](docs/sdks/user/README.md)

* [get](docs/sdks/user/README.md#get) - Get
* [list](docs/sdks/user/README.md#list) - List

### [webhooks](docs/sdks/webhooks/README.md)

* [test](docs/sdks/webhooks/README.md#test) - Test
<!-- End Available Resources and Operations [operations] -->





<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import * as errors from "conductorone-sdk-typescript/sdk/models/errors";

async function run() {
    const sdk = new ConductoroneSDKTypescript({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    let result;
    try {
        result = await sdk.apps.create({
            owners: ["<value>"],
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://{tenantDomain}.conductor.one` | `tenantDomain` (default is `example`) |

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
    const sdk = new ConductoroneSDKTypescript({
        serverIdx: 0,
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const result = await sdk.apps.create({
        owners: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `tenantDomain: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
    const sdk = new ConductoroneSDKTypescript({
        serverURL: "https://{tenantDomain}.conductor.one",
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const result = await sdk.apps.create({
        owners: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { HTTPClient } from "conductorone-sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ConductoroneSDKTypescript({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |
| `oauth`      | oauth2       | OAuth2 token |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
    const sdk = new ConductoroneSDKTypescript({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const result = await sdk.apps.create({
        owners: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

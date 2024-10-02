# conductorone-sdk-typescript

<!-- Start Summary [summary] -->
## Summary

ConductorOne API: The ConductorOne API is a HTTP API for managing ConductorOne resources.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/ConductorOne/conductorone-sdk-typescript
```

### PNPM

```bash
pnpm add https://github.com/ConductorOne/conductorone-sdk-typescript
```

### Bun

```bash
bun add https://github.com/ConductorOne/conductorone-sdk-typescript
```

### Yarn

```bash
yarn add https://github.com/ConductorOne/conductorone-sdk-typescript zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.apps.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [appAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md)

* [getAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#getappaccessrequestsdefaults) - Get App Access Requests Defaults
* [createAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#createappaccessrequestsdefaults) - Create App Access Requests Defaults
* [cancelAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#cancelappaccessrequestsdefaults) - Cancel App Access Requests Defaults

### [appEntitlementOwners](docs/sdks/appentitlementowners/README.md)

* [list](docs/sdks/appentitlementowners/README.md#list) - List
* [add](docs/sdks/appentitlementowners/README.md#add) - Add
* [set](docs/sdks/appentitlementowners/README.md#set) - Set
* [remove](docs/sdks/appentitlementowners/README.md#remove) - Remove

### [appEntitlements](docs/sdks/appentitlements/README.md)

* [list](docs/sdks/appentitlements/README.md#list) - List
* [create](docs/sdks/appentitlements/README.md#create) - Create
* [~~listUsers~~](docs/sdks/appentitlements/README.md#listusers) - List Users :warning: **Deprecated**
* [delete](docs/sdks/appentitlements/README.md#delete) - Delete
* [get](docs/sdks/appentitlements/README.md#get) - Get
* [update](docs/sdks/appentitlements/README.md#update) - Update
* [listForAppResource](docs/sdks/appentitlements/README.md#listforappresource) - List For App Resource
* [listForAppUser](docs/sdks/appentitlements/README.md#listforappuser) - List For App User

### [appEntitlementSearch](docs/sdks/appentitlementsearch/README.md)

* [searchAppEntitlementsWithExpired](docs/sdks/appentitlementsearch/README.md#searchappentitlementswithexpired) - Search App Entitlements With Expired
* [searchAppEntitlementsForAppUser](docs/sdks/appentitlementsearch/README.md#searchappentitlementsforappuser) - Search App Entitlements For App User
* [search](docs/sdks/appentitlementsearch/README.md#search) - Search

### [appEntitlementUserBinding](docs/sdks/appentitlementuserbinding/README.md)

* [listAppUsersForIdentityWithGrant](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant) - List App Users For Identity With Grant
* [searchGrantFeed](docs/sdks/appentitlementuserbinding/README.md#searchgrantfeed) - Search Grant Feed
* [searchPastGrants](docs/sdks/appentitlementuserbinding/README.md#searchpastgrants) - Search Past Grants

### [appOwners](docs/sdks/appowners/README.md)

* [list](docs/sdks/appowners/README.md#list) - List
* [set](docs/sdks/appowners/README.md#set) - Set
* [remove](docs/sdks/appowners/README.md#remove) - Remove
* [add](docs/sdks/appowners/README.md#add) - Add

### [appReport](docs/sdks/appreport/README.md)

* [list](docs/sdks/appreport/README.md#list) - List

### [appReportAction](docs/sdks/appreportaction/README.md)

* [generateReport](docs/sdks/appreportaction/README.md#generatereport) - Generate Report

### [appResource](docs/sdks/appresource/README.md)

* [list](docs/sdks/appresource/README.md#list) - List
* [createManuallyManagedAppResource](docs/sdks/appresource/README.md#createmanuallymanagedappresource) - Create Manually Managed App Resource
* [deleteManuallyManagedAppResource](docs/sdks/appresource/README.md#deletemanuallymanagedappresource) - Delete Manually Managed App Resource
* [get](docs/sdks/appresource/README.md#get) - Get
* [update](docs/sdks/appresource/README.md#update) - Update

### [appResourceOwners](docs/sdks/appresourceowners/README.md)

* [list](docs/sdks/appresourceowners/README.md#list) - List

### [appResourceSearch](docs/sdks/appresourcesearch/README.md)

* [searchAppResourceTypes](docs/sdks/appresourcesearch/README.md#searchappresourcetypes) - Search App Resource Types

### [appResourceType](docs/sdks/appresourcetype/README.md)

* [list](docs/sdks/appresourcetype/README.md#list) - List
* [createManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#createmanuallymanagedresourcetype) - Create Manually Managed Resource Type
* [deleteManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#deletemanuallymanagedresourcetype) - Delete Manually Managed Resource Type
* [get](docs/sdks/appresourcetype/README.md#get) - Get
* [updateManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#updatemanuallymanagedresourcetype) - Update Manually Managed Resource Type

### [apps](docs/sdks/apps/README.md)

* [list](docs/sdks/apps/README.md#list) - List
* [create](docs/sdks/apps/README.md#create) - Create
* [delete](docs/sdks/apps/README.md#delete) - Delete
* [get](docs/sdks/apps/README.md#get) - Get
* [update](docs/sdks/apps/README.md#update) - Update

### [appSearch](docs/sdks/appsearch/README.md)

* [search](docs/sdks/appsearch/README.md#search) - Search

### [appUsageControls](docs/sdks/appusagecontrols/README.md)

* [get](docs/sdks/appusagecontrols/README.md#get) - Get
* [update](docs/sdks/appusagecontrols/README.md#update) - Update

### [appUser](docs/sdks/appuser/README.md)

* [update](docs/sdks/appuser/README.md#update) - Update

### [attributes](docs/sdks/attributes/README.md)

* [deleteAttributeValue](docs/sdks/attributes/README.md#deleteattributevalue) - Delete Attribute Value
* [createAttributeValue](docs/sdks/attributes/README.md#createattributevalue) - Create Attribute Value
* [getAttributeValue](docs/sdks/attributes/README.md#getattributevalue) - Get Attribute Value
* [listAttributeTypes](docs/sdks/attributes/README.md#listattributetypes) - List Attribute Types
* [listAttributeValues](docs/sdks/attributes/README.md#listattributevalues) - List Attribute Values

### [attributeSearch](docs/sdks/attributesearch/README.md)

* [searchAttributeValues](docs/sdks/attributesearch/README.md#searchattributevalues) - Search Attribute Values

### [auth](docs/sdks/auth/README.md)

* [introspect](docs/sdks/auth/README.md#introspect) - Introspect

### [awsExternalIDSettings](docs/sdks/awsexternalidsettings/README.md)

* [get](docs/sdks/awsexternalidsettings/README.md#get) - Get


### [connector](docs/sdks/connector/README.md)

* [list](docs/sdks/connector/README.md#list) - List
* [createDelegated](docs/sdks/connector/README.md#createdelegated) - Create Delegated
* [rotateCredential](docs/sdks/connector/README.md#rotatecredential) - Rotate Credential
* [getCredentials](docs/sdks/connector/README.md#getcredentials) - Get Credentials
* [revokeCredential](docs/sdks/connector/README.md#revokecredential) - Revoke Credential
* [forceSync](docs/sdks/connector/README.md#forcesync) - Force Sync
* [delete](docs/sdks/connector/README.md#delete) - Delete
* [get](docs/sdks/connector/README.md#get) - Get
* [update](docs/sdks/connector/README.md#update) - Update
* [create](docs/sdks/connector/README.md#create) - Create
* [updateDelegated](docs/sdks/connector/README.md#updatedelegated) - Update Delegated

### [directory](docs/sdks/directory/README.md)

* [list](docs/sdks/directory/README.md#list) - List
* [create](docs/sdks/directory/README.md#create) - Create
* [delete](docs/sdks/directory/README.md#delete) - Delete
* [get](docs/sdks/directory/README.md#get) - Get

### [export](docs/sdks/export/README.md)

* [list](docs/sdks/export/README.md#list) - List
* [create](docs/sdks/export/README.md#create) - Create
* [delete](docs/sdks/export/README.md#delete) - Delete
* [get](docs/sdks/export/README.md#get) - Get
* [update](docs/sdks/export/README.md#update) - Update
* [listEvents](docs/sdks/export/README.md#listevents) - List Events

### [exportsSearch](docs/sdks/exportssearch/README.md)

* [search](docs/sdks/exportssearch/README.md#search) - Search

### [personalClient](docs/sdks/personalclient/README.md)

* [list](docs/sdks/personalclient/README.md#list) - NOTE: Only shows personal clients for the current user.
* [create](docs/sdks/personalclient/README.md#create) - Create
* [delete](docs/sdks/personalclient/README.md#delete) - Delete
* [get](docs/sdks/personalclient/README.md#get) - Get
* [update](docs/sdks/personalclient/README.md#update) - Update

### [personalClientSearch](docs/sdks/personalclientsearch/README.md)

* [search](docs/sdks/personalclientsearch/README.md#search) - NOTE: Searches personal clients for all users

### [policies](docs/sdks/policies/README.md)

* [list](docs/sdks/policies/README.md#list) - List
* [create](docs/sdks/policies/README.md#create) - Create
* [delete](docs/sdks/policies/README.md#delete) - Delete
* [get](docs/sdks/policies/README.md#get) - Get
* [update](docs/sdks/policies/README.md#update) - Update

### [policySearch](docs/sdks/policysearch/README.md)

* [search](docs/sdks/policysearch/README.md#search) - Search

### [policyValidate](docs/sdks/policyvalidate/README.md)

* [validateCEL](docs/sdks/policyvalidate/README.md#validatecel) - Validate Cel

### [requestCatalogManagement](docs/sdks/requestcatalogmanagement/README.md)

* [list](docs/sdks/requestcatalogmanagement/README.md#list) - List
* [create](docs/sdks/requestcatalogmanagement/README.md#create) - Create
* [listEntitlementsPerCatalog](docs/sdks/requestcatalogmanagement/README.md#listentitlementspercatalog) - List Entitlements Per Catalog
* [removeAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeappentitlements) - Remove App Entitlements
* [addAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#addappentitlements) - Add App Entitlements
* [removeAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeaccessentitlements) - Remove Access Entitlements
* [addAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#addaccessentitlements) - Add Access Entitlements
* [listEntitlementsForAccess](docs/sdks/requestcatalogmanagement/README.md#listentitlementsforaccess) - List Entitlements For Access
* [delete](docs/sdks/requestcatalogmanagement/README.md#delete) - Delete
* [get](docs/sdks/requestcatalogmanagement/README.md#get) - Get
* [update](docs/sdks/requestcatalogmanagement/README.md#update) - Update
* [getBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#getbundleautomation) - Get Bundle Automation
* [setBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#setbundleautomation) - Set Bundle Automation
* [forceRunBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#forcerunbundleautomation) - Force Run Bundle Automation

### [requestCatalogSearch](docs/sdks/requestcatalogsearch/README.md)

* [searchEntitlements](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Search Entitlements

### [roles](docs/sdks/roles/README.md)

* [list](docs/sdks/roles/README.md#list) - List
* [get](docs/sdks/roles/README.md#get) - Get
* [update](docs/sdks/roles/README.md#update) - Update

### [sessionSettings](docs/sdks/sessionsettings/README.md)

* [get](docs/sdks/sessionsettings/README.md#get) - Get
* [update](docs/sdks/sessionsettings/README.md#update) - Update

### [systemLog](docs/sdks/systemlog/README.md)

* [listEvents](docs/sdks/systemlog/README.md#listevents) - List Events

### [task](docs/sdks/task/README.md)

* [createGrantTask](docs/sdks/task/README.md#creategranttask) - Create Grant Task
* [createOffboardingTask](docs/sdks/task/README.md#createoffboardingtask) - Create Offboarding Task
* [createRevokeTask](docs/sdks/task/README.md#createrevoketask) - Create Revoke Task
* [get](docs/sdks/task/README.md#get) - Get

### [taskActions](docs/sdks/taskactions/README.md)

* [approve](docs/sdks/taskactions/README.md#approve) - Approve
* [comment](docs/sdks/taskactions/README.md#comment) - Comment
* [deny](docs/sdks/taskactions/README.md#deny) - Deny
* [escalateToEmergencyAccess](docs/sdks/taskactions/README.md#escalatetoemergencyaccess) - Escalate To Emergency Access
* [reassign](docs/sdks/taskactions/README.md#reassign) - Reassign
* [hardReset](docs/sdks/taskactions/README.md#hardreset) - Hard Reset
* [restart](docs/sdks/taskactions/README.md#restart) - Restart

### [taskSearch](docs/sdks/tasksearch/README.md)

* [search](docs/sdks/tasksearch/README.md#search) - Search

### [user](docs/sdks/user/README.md)

* [list](docs/sdks/user/README.md#list) - List
* [get](docs/sdks/user/README.md#get) - Get

### [userSearch](docs/sdks/usersearch/README.md)

* [search](docs/sdks/usersearch/README.md#search) - Search

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List
* [create](docs/sdks/webhooks/README.md#create) - Create
* [delete](docs/sdks/webhooks/README.md#delete) - Delete
* [get](docs/sdks/webhooks/README.md#get) - Get
* [update](docs/sdks/webhooks/README.md#update) - Update
* [test](docs/sdks/webhooks/README.md#test) - Test

### [webhooksSearch](docs/sdks/webhookssearch/README.md)

* [search](docs/sdks/webhookssearch/README.md#search) - Search

</details>
<!-- End Available Resources and Operations [operations] -->





<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [appAccessRequestsDefaultsCancelAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#cancelappaccessrequestsdefaults)
- [appAccessRequestsDefaultsCreateAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#createappaccessrequestsdefaults)
- [appAccessRequestsDefaultsGetAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#getappaccessrequestsdefaults)
- [appEntitlementOwnersAdd](docs/sdks/appentitlementowners/README.md#add)
- [appEntitlementOwnersList](docs/sdks/appentitlementowners/README.md#list)
- [appEntitlementOwnersRemove](docs/sdks/appentitlementowners/README.md#remove)
- [appEntitlementOwnersSet](docs/sdks/appentitlementowners/README.md#set)
- [appEntitlementSearchSearchAppEntitlementsForAppUser](docs/sdks/appentitlementsearch/README.md#searchappentitlementsforappuser)
- [appEntitlementSearchSearchAppEntitlementsWithExpired](docs/sdks/appentitlementsearch/README.md#searchappentitlementswithexpired)
- [appEntitlementSearchSearch](docs/sdks/appentitlementsearch/README.md#search)
- [appEntitlementUserBindingListAppUsersForIdentityWithGrant](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant)
- [appEntitlementUserBindingSearchGrantFeed](docs/sdks/appentitlementuserbinding/README.md#searchgrantfeed)
- [appEntitlementUserBindingSearchPastGrants](docs/sdks/appentitlementuserbinding/README.md#searchpastgrants)
- [appEntitlementsCreate](docs/sdks/appentitlements/README.md#create)
- [appEntitlementsDelete](docs/sdks/appentitlements/README.md#delete)
- [appEntitlementsGet](docs/sdks/appentitlements/README.md#get)
- [appEntitlementsListForAppResource](docs/sdks/appentitlements/README.md#listforappresource)
- [appEntitlementsListForAppUser](docs/sdks/appentitlements/README.md#listforappuser)
- [appEntitlementsListUsers](docs/sdks/appentitlements/README.md#listusers)
- [appEntitlementsList](docs/sdks/appentitlements/README.md#list)
- [appEntitlementsUpdate](docs/sdks/appentitlements/README.md#update)
- [appOwnersAdd](docs/sdks/appowners/README.md#add)
- [appOwnersList](docs/sdks/appowners/README.md#list)
- [appOwnersRemove](docs/sdks/appowners/README.md#remove)
- [appOwnersSet](docs/sdks/appowners/README.md#set)
- [appReportActionGenerateReport](docs/sdks/appreportaction/README.md#generatereport)
- [appReportList](docs/sdks/appreport/README.md#list)
- [appResourceCreateManuallyManagedAppResource](docs/sdks/appresource/README.md#createmanuallymanagedappresource)
- [appResourceDeleteManuallyManagedAppResource](docs/sdks/appresource/README.md#deletemanuallymanagedappresource)
- [appResourceGet](docs/sdks/appresource/README.md#get)
- [appResourceList](docs/sdks/appresource/README.md#list)
- [appResourceOwnersList](docs/sdks/appresourceowners/README.md#list)
- [appResourceSearchSearchAppResourceTypes](docs/sdks/appresourcesearch/README.md#searchappresourcetypes)
- [appResourceTypeCreateManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#createmanuallymanagedresourcetype)
- [appResourceTypeDeleteManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#deletemanuallymanagedresourcetype)
- [appResourceTypeGet](docs/sdks/appresourcetype/README.md#get)
- [appResourceTypeList](docs/sdks/appresourcetype/README.md#list)
- [appResourceTypeUpdateManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#updatemanuallymanagedresourcetype)
- [appResourceUpdate](docs/sdks/appresource/README.md#update)
- [appSearchSearch](docs/sdks/appsearch/README.md#search)
- [appUsageControlsGet](docs/sdks/appusagecontrols/README.md#get)
- [appUsageControlsUpdate](docs/sdks/appusagecontrols/README.md#update)
- [appUserUpdate](docs/sdks/appuser/README.md#update)
- [appsCreate](docs/sdks/apps/README.md#create)
- [appsDelete](docs/sdks/apps/README.md#delete)
- [appsGet](docs/sdks/apps/README.md#get)
- [appsList](docs/sdks/apps/README.md#list)
- [appsUpdate](docs/sdks/apps/README.md#update)
- [attributeSearchSearchAttributeValues](docs/sdks/attributesearch/README.md#searchattributevalues)
- [attributesCreateAttributeValue](docs/sdks/attributes/README.md#createattributevalue)
- [attributesDeleteAttributeValue](docs/sdks/attributes/README.md#deleteattributevalue)
- [attributesGetAttributeValue](docs/sdks/attributes/README.md#getattributevalue)
- [attributesListAttributeTypes](docs/sdks/attributes/README.md#listattributetypes)
- [attributesListAttributeValues](docs/sdks/attributes/README.md#listattributevalues)
- [authIntrospect](docs/sdks/auth/README.md#introspect)
- [awsExternalIDSettingsGet](docs/sdks/awsexternalidsettings/README.md#get)
- [connectorCreateDelegated](docs/sdks/connector/README.md#createdelegated)
- [connectorCreate](docs/sdks/connector/README.md#create)
- [connectorDelete](docs/sdks/connector/README.md#delete)
- [connectorForceSync](docs/sdks/connector/README.md#forcesync)
- [connectorGetCredentials](docs/sdks/connector/README.md#getcredentials)
- [connectorGet](docs/sdks/connector/README.md#get)
- [connectorList](docs/sdks/connector/README.md#list)
- [connectorRevokeCredential](docs/sdks/connector/README.md#revokecredential)
- [connectorRotateCredential](docs/sdks/connector/README.md#rotatecredential)
- [connectorUpdateDelegated](docs/sdks/connector/README.md#updatedelegated)
- [connectorUpdate](docs/sdks/connector/README.md#update)
- [directoryCreate](docs/sdks/directory/README.md#create)
- [directoryDelete](docs/sdks/directory/README.md#delete)
- [directoryGet](docs/sdks/directory/README.md#get)
- [directoryList](docs/sdks/directory/README.md#list)
- [exportCreate](docs/sdks/export/README.md#create)
- [exportDelete](docs/sdks/export/README.md#delete)
- [exportGet](docs/sdks/export/README.md#get)
- [exportListEvents](docs/sdks/export/README.md#listevents)
- [exportList](docs/sdks/export/README.md#list)
- [exportUpdate](docs/sdks/export/README.md#update)
- [exportsSearchSearch](docs/sdks/exportssearch/README.md#search)
- [personalClientCreate](docs/sdks/personalclient/README.md#create)
- [personalClientDelete](docs/sdks/personalclient/README.md#delete)
- [personalClientGet](docs/sdks/personalclient/README.md#get)
- [personalClientList](docs/sdks/personalclient/README.md#list)
- [personalClientSearchSearch](docs/sdks/personalclientsearch/README.md#search)
- [personalClientUpdate](docs/sdks/personalclient/README.md#update)
- [policiesCreate](docs/sdks/policies/README.md#create)
- [policiesDelete](docs/sdks/policies/README.md#delete)
- [policiesGet](docs/sdks/policies/README.md#get)
- [policiesList](docs/sdks/policies/README.md#list)
- [policiesUpdate](docs/sdks/policies/README.md#update)
- [policySearchSearch](docs/sdks/policysearch/README.md#search)
- [policyValidateValidateCEL](docs/sdks/policyvalidate/README.md#validatecel)
- [requestCatalogManagementAddAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#addaccessentitlements)
- [requestCatalogManagementAddAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#addappentitlements)
- [requestCatalogManagementCreate](docs/sdks/requestcatalogmanagement/README.md#create)
- [requestCatalogManagementDelete](docs/sdks/requestcatalogmanagement/README.md#delete)
- [requestCatalogManagementForceRunBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#forcerunbundleautomation)
- [requestCatalogManagementGetBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#getbundleautomation)
- [requestCatalogManagementGet](docs/sdks/requestcatalogmanagement/README.md#get)
- [requestCatalogManagementListEntitlementsForAccess](docs/sdks/requestcatalogmanagement/README.md#listentitlementsforaccess)
- [requestCatalogManagementListEntitlementsPerCatalog](docs/sdks/requestcatalogmanagement/README.md#listentitlementspercatalog)
- [requestCatalogManagementList](docs/sdks/requestcatalogmanagement/README.md#list)
- [requestCatalogManagementRemoveAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeaccessentitlements)
- [requestCatalogManagementRemoveAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeappentitlements)
- [requestCatalogManagementSetBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#setbundleautomation)
- [requestCatalogManagementUpdate](docs/sdks/requestcatalogmanagement/README.md#update)
- [requestCatalogSearchSearchEntitlements](docs/sdks/requestcatalogsearch/README.md#searchentitlements)
- [rolesGet](docs/sdks/roles/README.md#get)
- [rolesList](docs/sdks/roles/README.md#list)
- [rolesUpdate](docs/sdks/roles/README.md#update)
- [sessionSettingsGet](docs/sdks/sessionsettings/README.md#get)
- [sessionSettingsUpdate](docs/sdks/sessionsettings/README.md#update)
- [systemLogListEvents](docs/sdks/systemlog/README.md#listevents)
- [taskActionsApprove](docs/sdks/taskactions/README.md#approve)
- [taskActionsComment](docs/sdks/taskactions/README.md#comment)
- [taskActionsDeny](docs/sdks/taskactions/README.md#deny)
- [taskActionsEscalateToEmergencyAccess](docs/sdks/taskactions/README.md#escalatetoemergencyaccess)
- [taskActionsHardReset](docs/sdks/taskactions/README.md#hardreset)
- [taskActionsReassign](docs/sdks/taskactions/README.md#reassign)
- [taskActionsRestart](docs/sdks/taskactions/README.md#restart)
- [taskCreateGrantTask](docs/sdks/task/README.md#creategranttask)
- [taskCreateOffboardingTask](docs/sdks/task/README.md#createoffboardingtask)
- [taskCreateRevokeTask](docs/sdks/task/README.md#createrevoketask)
- [taskGet](docs/sdks/task/README.md#get)
- [taskSearchSearch](docs/sdks/tasksearch/README.md#search)
- [userGet](docs/sdks/user/README.md#get)
- [userList](docs/sdks/user/README.md#list)
- [userSearchSearch](docs/sdks/usersearch/README.md#search)
- [webhooksCreate](docs/sdks/webhooks/README.md#create)
- [webhooksDelete](docs/sdks/webhooks/README.md#delete)
- [webhooksGet](docs/sdks/webhooks/README.md#get)
- [webhooksList](docs/sdks/webhooks/README.md#list)
- [webhooksSearchSearch](docs/sdks/webhookssearch/README.md#search)
- [webhooksTest](docs/sdks/webhooks/README.md#test)
- [webhooksUpdate](docs/sdks/webhooks/README.md#update)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.apps.list({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.apps.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `list` method may throw the following errors:

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { SDKValidationError } from "conductorone-sdk-typescript/sdk/models/errors";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await conductoroneSDKTypescript.apps.list({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
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
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
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

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  serverIdx: 0,
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.apps.list({});

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

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  serverURL: "https://{tenantDomain}.conductor.one",
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.apps.list({});

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
    signal: request.signal || AbortSignal.timeout(5000)
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

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.apps.list({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const sdk = new ConductoroneSDKTypescript({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

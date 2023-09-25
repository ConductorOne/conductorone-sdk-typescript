# conductorone-sdk-typescript

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/ConductorOne/conductorone-sdk-typescript
```

### Yarn

```bash
yarn add https://github.com/ConductorOne/conductorone-sdk-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementOwnersAddResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementOwners.add({
  addAppEntitlementOwnerRequest: {
    userId: "quibusdam",
  },
  appId: "unde",
  entitlementId: "nulla",
}).then((res: C1ApiAppV1AppEntitlementOwnersAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AppEntitlementOwners](docs/sdks/appentitlementowners/README.md)

* [add](docs/sdks/appentitlementowners/README.md#add) - Add
* [list](docs/sdks/appentitlementowners/README.md#list) - List
* [remove](docs/sdks/appentitlementowners/README.md#remove) - Remove
* [set](docs/sdks/appentitlementowners/README.md#set) - Set

### [AppEntitlementSearch](docs/sdks/appentitlementsearch/README.md)

* [search](docs/sdks/appentitlementsearch/README.md#search) - Search

### [AppEntitlementUserBinding](docs/sdks/appentitlementuserbinding/README.md)

* [listAppUsersForIdentityWithGrant](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant) - List App Users For Identity With Grant

### [AppEntitlements](docs/sdks/appentitlements/README.md)

* [get](docs/sdks/appentitlements/README.md#get) - Get
* [list](docs/sdks/appentitlements/README.md#list) - List
* [listForAppResource](docs/sdks/appentitlements/README.md#listforappresource) - List For App Resource
* [listForAppUser](docs/sdks/appentitlements/README.md#listforappuser) - List For App User
* [listUsers](docs/sdks/appentitlements/README.md#listusers) - List Users
* [update](docs/sdks/appentitlements/README.md#update) - Update

### [AppOwners](docs/sdks/appowners/README.md)

* [add](docs/sdks/appowners/README.md#add) - Add
* [list](docs/sdks/appowners/README.md#list) - List
* [remove](docs/sdks/appowners/README.md#remove) - Remove

### [AppReport](docs/sdks/appreport/README.md)

* [list](docs/sdks/appreport/README.md#list) - List

### [AppReportAction](docs/sdks/appreportaction/README.md)

* [generateReport](docs/sdks/appreportaction/README.md#generatereport) - Generate Report

### [AppResource](docs/sdks/appresource/README.md)

* [get](docs/sdks/appresource/README.md#get) - Get
* [list](docs/sdks/appresource/README.md#list) - List

### [AppResourceOwners](docs/sdks/appresourceowners/README.md)

* [list](docs/sdks/appresourceowners/README.md#list) - List

### [AppResourceSearch](docs/sdks/appresourcesearch/README.md)

* [searchAppResourceTypes](docs/sdks/appresourcesearch/README.md#searchappresourcetypes) - Search App Resource Types

### [AppResourceType](docs/sdks/appresourcetype/README.md)

* [get](docs/sdks/appresourcetype/README.md#get) - Get
* [list](docs/sdks/appresourcetype/README.md#list) - List

### [AppSearch](docs/sdks/appsearch/README.md)

* [search](docs/sdks/appsearch/README.md#search) - Search

### [AppUsageControls](docs/sdks/appusagecontrols/README.md)

* [get](docs/sdks/appusagecontrols/README.md#get) - Get
* [update](docs/sdks/appusagecontrols/README.md#update) - Update

### [AppUser](docs/sdks/appuser/README.md)

* [update](docs/sdks/appuser/README.md#update) - Update

### [Apps](docs/sdks/apps/README.md)

* [create](docs/sdks/apps/README.md#create) - Create
* [delete](docs/sdks/apps/README.md#delete) - Delete
* [get](docs/sdks/apps/README.md#get) - Get
* [list](docs/sdks/apps/README.md#list) - List
* [update](docs/sdks/apps/README.md#update) - Update

### [AttributeSearch](docs/sdks/attributesearch/README.md)

* [searchAttributeValues](docs/sdks/attributesearch/README.md#searchattributevalues) - Search Attribute Values

### [Attributes](docs/sdks/attributes/README.md)

* [createAttributeValue](docs/sdks/attributes/README.md#createattributevalue) - Create Attribute Value
* [deleteAttributeValue](docs/sdks/attributes/README.md#deleteattributevalue) - Delete Attribute Value
* [getAttributeValue](docs/sdks/attributes/README.md#getattributevalue) - Get Attribute Value
* [listAttributeTypes](docs/sdks/attributes/README.md#listattributetypes) - List Attribute Types
* [listAttributeValues](docs/sdks/attributes/README.md#listattributevalues) - List Attribute Values

### [Auth](docs/sdks/auth/README.md)

* [introspect](docs/sdks/auth/README.md#introspect) - Introspect

### [Connector](docs/sdks/connector/README.md)

* [create](docs/sdks/connector/README.md#create) - Create
* [createDelegated](docs/sdks/connector/README.md#createdelegated) - Create Delegated
* [delete](docs/sdks/connector/README.md#delete) - Delete
* [get](docs/sdks/connector/README.md#get) - Get
* [getCredentials](docs/sdks/connector/README.md#getcredentials) - Get Credentials
* [list](docs/sdks/connector/README.md#list) - List
* [revokeCredential](docs/sdks/connector/README.md#revokecredential) - Revoke Credential
* [rotateCredential](docs/sdks/connector/README.md#rotatecredential) - Rotate Credential
* [update](docs/sdks/connector/README.md#update) - Update
* [updateDelegated](docs/sdks/connector/README.md#updatedelegated) - Update Delegated

### [Directory](docs/sdks/directory/README.md)

* [create](docs/sdks/directory/README.md#create) - Create
* [delete](docs/sdks/directory/README.md#delete) - Delete
* [get](docs/sdks/directory/README.md#get) - Get
* [list](docs/sdks/directory/README.md#list) - List

### [PersonalClient](docs/sdks/personalclient/README.md)

* [create](docs/sdks/personalclient/README.md#create) - Create

### [Policies](docs/sdks/policies/README.md)

* [create](docs/sdks/policies/README.md#create) - Create
* [delete](docs/sdks/policies/README.md#delete) - Delete
* [get](docs/sdks/policies/README.md#get) - Get
* [list](docs/sdks/policies/README.md#list) - List
* [update](docs/sdks/policies/README.md#update) - Update

### [PolicySearch](docs/sdks/policysearch/README.md)

* [search](docs/sdks/policysearch/README.md#search) - Search

### [RequestCatalogManagement](docs/sdks/requestcatalogmanagement/README.md)

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

### [RequestCatalogSearch](docs/sdks/requestcatalogsearch/README.md)

* [searchEntitlements](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Search Entitlements

### [Roles](docs/sdks/roles/README.md)

* [get](docs/sdks/roles/README.md#get) - Get
* [list](docs/sdks/roles/README.md#list) - List
* [update](docs/sdks/roles/README.md#update) - Update

### [Task](docs/sdks/task/README.md)

* [createGrantTask](docs/sdks/task/README.md#creategranttask) - Create Grant Task
* [createRevokeTask](docs/sdks/task/README.md#createrevoketask) - Create Revoke Task
* [get](docs/sdks/task/README.md#get) - Get

### [TaskActions](docs/sdks/taskactions/README.md)

* [approve](docs/sdks/taskactions/README.md#approve) - Approve
* [comment](docs/sdks/taskactions/README.md#comment) - Comment
* [deny](docs/sdks/taskactions/README.md#deny) - Deny
* [escalateToEmergencyAccess](docs/sdks/taskactions/README.md#escalatetoemergencyaccess) - Escalate To Emergency Access

### [TaskSearch](docs/sdks/tasksearch/README.md)

* [search](docs/sdks/tasksearch/README.md#search) - Search

### [User](docs/sdks/user/README.md)

* [get](docs/sdks/user/README.md#get) - Get
* [list](docs/sdks/user/README.md#list) - List

### [UserSearch](docs/sdks/usersearch/README.md)

* [search](docs/sdks/usersearch/README.md#search) - Search
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

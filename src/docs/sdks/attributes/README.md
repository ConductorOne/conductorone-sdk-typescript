# Attributes

### Available Operations

* [createAttributeValue](#createattributevalue) - Create Attribute Value
* [deleteAttributeValue](#deleteattributevalue) - Delete Attribute Value
* [getAttributeValue](#getattributevalue) - Get Attribute Value
* [listAttributeTypes](#listattributetypes) - List Attribute Types
* [listAttributeValues](#listattributevalues) - List Attribute Values

## createAttributeValue

Create a new attribute value.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAttributeV1AttributesCreateAttributeValueResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.attributes.createAttributeValue({
  attributeTypeId: "occaecati",
  value: "rerum",
}).then((res: C1ApiAttributeV1AttributesCreateAttributeValueResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CreateAttributeValueRequest](../../models/shared/createattributevaluerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesCreateAttributeValueResponse](../../models/operations/c1apiattributev1attributescreateattributevalueresponse.md)>**


## deleteAttributeValue

Delete an attribute value by id.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAttributeV1AttributesDeleteAttributeValueResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.attributes.deleteAttributeValue({
  deleteAttributeValueRequest: {},
  id: "3fe49a8d-9cbf-4486-b332-3f9b77f3a410",
}).then((res: C1ApiAttributeV1AttributesDeleteAttributeValueResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.C1ApiAttributeV1AttributesDeleteAttributeValueRequest](../../models/operations/c1apiattributev1attributesdeleteattributevaluerequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesDeleteAttributeValueResponse](../../models/operations/c1apiattributev1attributesdeleteattributevalueresponse.md)>**


## getAttributeValue

Get an attribute value by id.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAttributeV1AttributesGetAttributeValueResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.attributes.getAttributeValue({
  id: "0674ebf6-9280-4d1b-a77a-89ebf737ae42",
}).then((res: C1ApiAttributeV1AttributesGetAttributeValueResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.C1ApiAttributeV1AttributesGetAttributeValueRequest](../../models/operations/c1apiattributev1attributesgetattributevaluerequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesGetAttributeValueResponse](../../models/operations/c1apiattributev1attributesgetattributevalueresponse.md)>**


## listAttributeTypes

List all attribute types.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAttributeV1AttributesListAttributeTypesResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.attributes.listAttributeTypes({
  pageSize: 206.51,
  pageToken: "amet",
}).then((res: C1ApiAttributeV1AttributesListAttributeTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.C1ApiAttributeV1AttributesListAttributeTypesRequest](../../models/operations/c1apiattributev1attributeslistattributetypesrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesListAttributeTypesResponse](../../models/operations/c1apiattributev1attributeslistattributetypesresponse.md)>**


## listAttributeValues

List all attribute values for a given attribute type.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAttributeV1AttributesListAttributeValuesResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.attributes.listAttributeValues({
  attributeTypeId: "optio",
  pageSize: 8815.86,
  pageToken: "ad",
}).then((res: C1ApiAttributeV1AttributesListAttributeValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.C1ApiAttributeV1AttributesListAttributeValuesRequest](../../models/operations/c1apiattributev1attributeslistattributevaluesrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesListAttributeValuesResponse](../../models/operations/c1apiattributev1attributeslistattributevaluesresponse.md)>**


# Attributes
(*attributes*)

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

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.attributes.createAttributeValue({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateAttributeValueRequest](../../sdk/models/shared/createattributevaluerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesCreateAttributeValueResponse](../../sdk/models/operations/c1apiattributev1attributescreateattributevalueresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteAttributeValue

Delete an attribute value by id.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.attributes.deleteAttributeValue({
    deleteAttributeValueRequest: {},
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAttributeV1AttributesDeleteAttributeValueRequest](../../sdk/models/operations/c1apiattributev1attributesdeleteattributevaluerequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesDeleteAttributeValueResponse](../../sdk/models/operations/c1apiattributev1attributesdeleteattributevalueresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAttributeValue

Get an attribute value by id.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.attributes.getAttributeValue({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAttributeV1AttributesGetAttributeValueRequest](../../sdk/models/operations/c1apiattributev1attributesgetattributevaluerequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesGetAttributeValueResponse](../../sdk/models/operations/c1apiattributev1attributesgetattributevalueresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAttributeTypes

List all attribute types.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.attributes.listAttributeTypes({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAttributeV1AttributesListAttributeTypesRequest](../../sdk/models/operations/c1apiattributev1attributeslistattributetypesrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesListAttributeTypesResponse](../../sdk/models/operations/c1apiattributev1attributeslistattributetypesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAttributeValues

List all attribute values for a given attribute type.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.attributes.listAttributeValues({
    attributeTypeId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAttributeV1AttributesListAttributeValuesRequest](../../sdk/models/operations/c1apiattributev1attributeslistattributevaluesrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAttributeV1AttributesListAttributeValuesResponse](../../sdk/models/operations/c1apiattributev1attributeslistattributevaluesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

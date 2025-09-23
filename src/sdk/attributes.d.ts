import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Attributes extends ClientSDK {
    /**
     * Delete Attribute Value
     *
     * @remarks
     * Delete an attribute value by id.
     */
    deleteAttributeValue(request: operations.C1ApiAttributeV1AttributesDeleteAttributeValueRequest, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesDeleteAttributeValueResponse>;
    /**
     * Create Attribute Value
     *
     * @remarks
     * Create a new attribute value.
     */
    createAttributeValue(request?: shared.CreateAttributeValueRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesCreateAttributeValueResponse>;
    /**
     * Get Attribute Value
     *
     * @remarks
     * Get an attribute value by id.
     */
    getAttributeValue(request: operations.C1ApiAttributeV1AttributesGetAttributeValueRequest, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesGetAttributeValueResponse>;
    /**
     * List Compliance Frameworks
     *
     * @remarks
     * Invokes the c1.api.attribute.v1.Attributes.ListComplianceFrameworks method.
     */
    listComplianceFrameworks(request?: operations.C1ApiAttributeV1AttributesListComplianceFrameworksRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesListComplianceFrameworksResponse>;
    /**
     * Create Compliance Framework Attribute Value
     *
     * @remarks
     * Create a compliance framework value.
     */
    createComplianceFrameworkAttributeValue(request?: shared.CreateComplianceFrameworkAttributeValueRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse>;
    /**
     * Delete Compliance Framework Attribute Value
     *
     * @remarks
     * Delete an attribute value by id.
     */
    deleteComplianceFrameworkAttributeValue(request: operations.C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse>;
    /**
     * Get Compliance Framework Attribute Value
     *
     * @remarks
     * Get an attribute value by id.
     */
    getComplianceFrameworkAttributeValue(request: operations.C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse>;
    /**
     * List Risk Levels
     *
     * @remarks
     * Invokes the c1.api.attribute.v1.Attributes.ListRiskLevels method.
     */
    listRiskLevels(request?: operations.C1ApiAttributeV1AttributesListRiskLevelsRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesListRiskLevelsResponse>;
    /**
     * Create Risk Level Attribute Value
     *
     * @remarks
     * Create a risk level attribute.
     */
    createRiskLevelAttributeValue(request?: shared.CreateRiskLevelAttributeValueRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse>;
    /**
     * Delete Risk Level Attribute Value
     *
     * @remarks
     * Delete a risk level attribute value by id.
     */
    deleteRiskLevelAttributeValue(request: operations.C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse>;
    /**
     * Get Risk Level Attribute Value
     *
     * @remarks
     * Get a risk level attribute value by id.
     */
    getRiskLevelAttributeValue(request: operations.C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse>;
    /**
     * List Attribute Types
     *
     * @remarks
     * List all attribute types.
     */
    listAttributeTypes(request?: operations.C1ApiAttributeV1AttributesListAttributeTypesRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesListAttributeTypesResponse>;
    /**
     * List Attribute Values
     *
     * @remarks
     * List all attribute values for a given attribute type.
     */
    listAttributeValues(request: operations.C1ApiAttributeV1AttributesListAttributeValuesRequest, options?: RequestOptions): Promise<operations.C1ApiAttributeV1AttributesListAttributeValuesResponse>;
}

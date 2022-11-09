/* tslint:disable */
/* eslint-disable */
/**
 * Render Public API
 * Manage everything about your Render services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@render.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime.ts';
/**
 * 
 * @export
 * @interface EnvVarKeyValue
 */
export interface EnvVarKeyValue {
    /**
     * 
     * @type {string}
     * @memberof EnvVarKeyValue
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof EnvVarKeyValue
     */
    value: string;
}

/**
 * Check if a given object implements the EnvVarKeyValue interface.
 */
export function instanceOfEnvVarKeyValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function EnvVarKeyValueFromJSON(json: any): EnvVarKeyValue {
    return EnvVarKeyValueFromJSONTyped(json, false);
}

export function EnvVarKeyValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvVarKeyValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function EnvVarKeyValueToJSON(value?: EnvVarKeyValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}


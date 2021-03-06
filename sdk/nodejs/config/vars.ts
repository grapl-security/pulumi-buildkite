// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("buildkite");

/**
 * API token with GraphQL access and `write_pipelines, read_pipelines` scopes
 */
export declare const apiToken: string | undefined;
Object.defineProperty(exports, "apiToken", {
    get() {
        return __config.get("apiToken") ?? utilities.getEnv("BUILDKITE_API_TOKEN");
    },
    enumerable: true,
});

/**
 * Base URL for the GraphQL API to use
 */
export declare const graphqlUrl: string | undefined;
Object.defineProperty(exports, "graphqlUrl", {
    get() {
        return __config.get("graphqlUrl");
    },
    enumerable: true,
});

/**
 * The Buildkite organization ID
 */
export declare const organization: string | undefined;
Object.defineProperty(exports, "organization", {
    get() {
        return __config.get("organization") ?? utilities.getEnv("BUILDKITE_ORGANIZATION");
    },
    enumerable: true,
});

/**
 * Base URL for the REST API to use
 */
export declare const restUrl: string | undefined;
Object.defineProperty(exports, "restUrl", {
    get() {
        return __config.get("restUrl");
    },
    enumerable: true,
});


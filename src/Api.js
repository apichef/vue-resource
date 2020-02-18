import Resource from './Resource'
import { QueryConfig } from '@apichef/request-builder'

const defaultQueryConfig = new QueryConfig()

export default class Api {
    constructor ({ nameResolver, queryConfig = defaultQueryConfig, request }) {
        this._nameResolver = nameResolver
        this._queryConfig = queryConfig
        this._request = request
    }

    resource (resource) {
        const resourceName = typeof resource === 'string' ? resource : this._nameResolver(resource)
        const apiResource = new Resource(resourceName, this._queryConfig)
        apiResource.request = this._request

        return apiResource
    }
}

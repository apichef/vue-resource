import Api from './Api'

const resolveConfig = (config, name) => {
    if (name === null) {
        return config
    }

    if (Object.hasOwnProperty.call(config, name)) {
        return config[name]
    }

    throw Error(`Configuration not found for API ${name}`)
}

export default {
    install (Vue, config) {
        const api = (name = null) => {
            return new Api(resolveConfig(config, name))
        }

        const resource = (resource, name = null) => {
            return api(name).resource(resource)
        }

        Vue.api = api
        Vue.prototype.$api = api

        Vue.resource = resource
        Vue.prototype.$resource = resource
    }
}

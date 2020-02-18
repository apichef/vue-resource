![build](https://github.com/apichef/vue-resource/workflows/build/badge.svg)

# REST API request builder for Vue.js

## Install

Via yarn

``` bash
$ yarn add @apichef/vue-resource
```

Via npm

``` bash
$ npm install @apichef/vue-resource
```

## Basic usage

```js
import Vue from "vue"
import { VueResource } from "@apichef/vue-resource"
import axios from "axios"

const request = (config) => {
    return axios.request({
        ...config,
        baseURL: 'http://example.com/api/'
    })
}

const nameResolver = resource => resource.type

Vue.use(VueResource, { request, nameResolver })

// in your component

export default {
    data() {
        return {
            projects: []
        }
    },

    async created() {
        await this.fetchProjects()
        // do something
    },

    methods: {
        async fetchProjects() {
            const response = await this.$resource('projects')
                .with([
                    'languages',
                    'subjects',
                ])
                .all()

            this.projects = response.data
        }
    }
}
```

## Testing

``` bash
$ npm run test
```

## Security

If you discover any security related issues, please email milroy@outlook.com instead of using the issue tracker.

## Credits

- [Milroy E. Fraser][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/milroyfraser
[link-contributors]: ../../contributors

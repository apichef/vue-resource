import Vue from 'vue'
import VueResource from "../src/VueResource";
import Api from "../src/Api";
import Resource from "../src/Resource";

describe('install', () => {
    test('can install', () => {
        const nameResolver = resource => resource.type
        Vue.use(VueResource, { nameResolver })
        const app = new Vue();

        expect(app.$api()).toBeInstanceOf(Api);
        expect(Vue.api()).toBeInstanceOf(Api);

        expect(app.$api().resource('post')).toBeInstanceOf(Resource);
        expect(Vue.api().resource('post')).toBeInstanceOf(Resource);
    })
})

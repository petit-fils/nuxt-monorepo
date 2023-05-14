import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('lib/plugins/index.ts'))
  },
})
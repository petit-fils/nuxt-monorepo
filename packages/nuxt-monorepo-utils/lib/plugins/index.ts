export default defineNuxtPlugin(() => {
  return {
      provide: {
          its: (msg: string) => `its ${msg}!`
      }
  }
})
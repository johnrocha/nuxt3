export default defineEventHandler(async (event) => {

  const { code } = event.context.params
  const { currencyKey } = useRuntimeConfig()

  const uri = `https://api.adviceslip.com/advices`
  
  const { data } = await $fetch(uri)

  return data
})
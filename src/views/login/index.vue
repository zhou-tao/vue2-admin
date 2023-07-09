<template>
  <div
    relative
    w="screen"
    h="screen"
    flex="center"
    overflow="hidden"
    bg="gradient-light dark:gradient-dark"
  >
    <login-form />
  </div>
</template>

<script>
import LoginForm from './components/Form.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped lang="scss">

</style>

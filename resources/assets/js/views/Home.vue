<template>
  <div id="homepage">
    <h1> This is the home page </h1>
    <hola :text="text"/>
    <input type="text" v-model="text">
  </div>
</template>

<script>
    
    import CustomText from '../components/CustomText.vue'

    export default {
        data () {
            return {
                text: 'Placeholder'
            }
        },
        components: {
            CustomText
        }
    }

</script>
<style scoped>
  .homepage {
      text-align: center;
  }
</style>

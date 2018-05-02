<template>
  <div id="homepage">
    <h2> This is the home page </h2>
    <hola :text="text"/>
    <input type="text" v-model="text">

  </div>
</template>

<script>
    
    import Hola from '../components/Hola.vue'

    export default {
        data () {
            return {
                text: ''
            }
        },
        components: {
            Hola
        }

    }

</script>
<style>
  
</style>

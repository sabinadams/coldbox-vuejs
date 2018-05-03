<template>
    <div class="test">
        <h1>{{computedText}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'CustomText',
        props: ['text'],
        computed: {
            computedText: function() {
                return `!!! ${this.text} !!!`
            }
        }
    }
</script>

<style scoped lang="scss">
   h1 {
       color: green;
   }
</style>
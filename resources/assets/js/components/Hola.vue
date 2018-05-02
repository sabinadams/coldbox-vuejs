<template>
    <div>
        <h1>{{computedText}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Hola',
        props: ['text'],
        computed: {
            computedText: function() {
                return `!!! ${this.text} !!!`
            }
        }
    };
</script>

<style>
    h1 {
        color: green;
    }
</style>
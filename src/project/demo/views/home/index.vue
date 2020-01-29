<template>
  <div class="container">
    index1
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    let str:string = '124';
    console.log(str);
    console.log(1)
    console.log(2)
  }
})
</script>
<style lang="scss">
  div{
    color: blue;
  }
</style>


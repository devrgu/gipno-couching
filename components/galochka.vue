<template>

</template>
<script>
export default {
  data () {
    return {
        active: false
    }
  },
    methods:{
        checked(){
            var v = this
            v.active = true;
            setTimeout(() => v.active = false, 2000);
            
        }
    }
}
</script>
<style>
</style>

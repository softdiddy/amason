<template>
  <h1>{{ params }}</h1>
</template>

<script>
export default {
    asyncData({ $xios, params }){
        return {
            params: params.id
        };
    }
};
</script>

<style>

</style>
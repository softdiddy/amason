<template>
  <main>
    <Header />
    <div class="all-products">
      <div class="container-fluid browsing-history">
        <div class="row">
          ddcd
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }){
    try {
      let response = await $axios.$get("http://localhost:5000/api/products");
      return{
        products: response.products
      }
    } catch (error) {
      
    }
  }
};
</script>

<style>
</style>
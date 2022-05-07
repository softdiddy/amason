<template>
  <main>
    <Header />
    <div class="add-products">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add new product</h2>

            <form>
              <div class="a-spacing-top-medium"></div>
              <label>Category</label>
              <select class="a-select-option">
                 <option>Select Category</option>
                <option
                  v-for="category in categories"
                  :value="category._id"
                  :key="category._id"
                >{{category.type}}</option>
              </select>

              <div class="a-spacing-top-medium"></div>
              <label>Owner</label>
              <select class="form-control">
                <option>Select Owner</option>
                <option
                  v-for="owner in owners"
                  :value="owner._id"
                  :key="owner._id"
                >{{owner.name}}</option>
              </select>

              <div class="a-spacing-top-medium"></div>
              <label>Title</label>
              <input
               
                type="text"
                class="form-control"
                placeholder="Enter Title"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Price</label>
              <input
               
                type="number"
                class="form-control"
                placeholder="Enter Price"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Description</label>
              <textarea
               
                class="form-control"
                placeholder="Enter Description"
              ></textarea>

              <hr />

              <div class="a-spacing-top-medium"></div>
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text">Add Product</span>
                </span>
              </span>

              <NuxtLink
                to="/"
                class="a-button-buy-again"
                style="margin: 10px; padding: 5px"
                >Back to products</NuxtLink
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("http://localhost:5000/api/catigory");
      let owners = $axios.$get("http://localhost:5000/api/owner");

      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owners,
      ]);

     

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        
      };

      

    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>
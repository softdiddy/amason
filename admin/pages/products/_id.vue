<template>
  <main>
    <Header />
    <div class="add-products addProduct">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 card addProduct centered-Div">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Updating {{ product.title }}</h2>

            <form>
              <div class="a-spacing-top-medium"></div>
              <label>Category</label>
              <select class="a-select-option" v-model="categoryId">
                <option>Select Category</option>
                <option
                  v-for="category in categories"
                  :value="category._id"
                  :key="category._id"
                >
                  {{ category.type }}
                </option>
              </select>

              <div class="a-spacing-top-medium"></div>
              <label>Owner</label>
              <select class="form-control" v-model="ownerId">
                <option>Select Owner</option>
                <option
                  v-for="owner in owners"
                  :value="owner._id"
                  :key="owner._id"
                >
                  {{ owner.name }}
                </option>
              </select>

              <div class="a-spacing-top-medium"></div>
              <label>Title</label>
              <input
                v-model="title"
                type="text"
                class="form-control"
                :placeholder="product.title"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Stock Quantity</label>
              <input
                v-model="stockQuantity"
                type="number"
                class="form-control"
                :placeholder="product.stockQuantity"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Price</label>
              <input
                v-model="price"
                type="number"
                class="form-control txtbox"
               :placeholder="product.price"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Description</label>
              <textarea
                v-model="description"
                class="form-control"
                :placeholder="product.description"
              ></textarea>

              <hr />

              <div class="a-spacing-top-medium"></div>
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="editProduct"
                    >Update Product</span
                  >
                </span>
              </span>

               <NuxtLink
                to="/products"
                class="a-button-buy-again"
                style="margin: 10px; padding: 5px"
                >Back</NuxtLink
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
  async asyncData({ $axios, params }) {
    try {
      let categories = $axios.$get("http://localhost:5000/api/catigory");
      let owners = $axios.$get("http://localhost:5000/api/owner");
      let product = $axios.$get(
        `http://localhost:5000/api/products/${params.id}`
        );

      const [catResponse, ownerResponse, productResponse] = await Promise.all([
        categories,
        owners,
        product,
      ]);

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        product: productResponse.product,
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      title: "",
      description: "",
      photo: "",
      price: "",
      stockQuantity: "",
      categoryId: null,
      owerId: null,
      product: [],
    };
  },

  methods: {
    async editProduct() {
      let data = {
        title: this.title,
        description: this.description,
        photo: this.photo,
        price: this.price,
        stockQuantity: this.stockQuantity,
        owerId: this.owerId,
        categoryId: this.categoryId,
      };

      let result = await this.$axios.$put(
        `http://localhost:5000/api/products/${this.$route.params.id}`,
        data
      );
      
      //alert(result.message);
      this.$router.push("/products");
    },

  
  },
};
</script>

<style>
</style>

http://localhost:5000/api/products/
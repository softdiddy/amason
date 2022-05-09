<template>
  <main>
    <Header />
    <div class="add-products addProduct">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 card addProduct">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add new product</h2>

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
                placeholder="Enter Title"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Stock Quantity</label>
              <input
                v-model="stockQuantity"
                type="number"
                class="form-control"
                placeholder="Enter Stock Quantity"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Price</label>
              <input
                v-model="price"
                type="number"
                class="form-control txtbox"
                placeholder="Enter Price"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Description</label>
              <textarea
                v-model="description"
                class="form-control"
                placeholder="Enter Description"
              ></textarea>

              <hr />

              <div class="a-spacing-top-medium"></div>
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="addProduct"
                    >Add Product</span
                  >
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
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <div>
              <b-table
                striped
                hover
                :items="products"
                :fields="fields"
              >
              <template v-slot:cell(edit)="data"> 
                <router-link tag="button" class="a-button-edit" :to="
                  {
                    name: 'editProduct',
                    params: { productId: data.item.title}
                  }
                ">
                <i class="fas fa-edit"></i> Edit
                </router-link>
              </template>

               <template v-slot:cell(delete)="data"> 
                 <button tag="button" class="a-button-delete" @click="deleteProduct(data.item)">Delete</button>
              </template>

              </b-table>
            </div>
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
      let products = $axios.$get("http://localhost:5000/api/products");

      const [catResponse, ownerResponse, productsResponse] = await Promise.all([
        categories,
        owners,
        products,
      ]);

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        products: productsResponse.products,
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
      price: 0,
      stockQuantity: 0,
      categoryId: null,
      owerId: null,
      fields: [
        {
          key: "title",
          sortable: true,
        },
        {
          key: "description",
          sortable: true,
        },
        {
          key: "price",
          sortable: true,
        },
        {
          key: "stockQuantity",
          sortable: true,
          label: "Quantity"
        },
        {
          key: "Edit",
        },
        {
          key: "Delete",
        },

      ], // table rows
      products: [],
    };
  },

  methods: {
    async addProduct() {
      let data = {
        title: this.title,
        description: this.description,
        photo: this.photo,
        price: this.price,
        stockQuantity: this.stockQuantity,
        owerId: this.owerId,
        categoryId: this.categoryId,
      };

      let result = await this.$axios.$post(
        "http://localhost:5000/api/products",
        data
      );
      if (result.status) {
        this.products.push(data);
        (this.title = ""),
          (this.description = ""),
          (this.photo = ""),
          (this.price = ""),
          (this.stockQuantity = ""),
          (this.owerId = ""),
          (this.categoryId = "");
      }
      //alert(result.message);
      //this.$router.push("/");
    },

    deleteProduct(){
      
    }
  },
};
</script>

<style>
</style>
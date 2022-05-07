<template>
  <main>
    <b-navbar toggleable="lg" class="amazon-bg">
      <b-navbar-brand href="#">Amason Admin</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Manage Products</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="a-spacing-large"></div>
    <div class="all-products">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div v-for="(product, index) in products" :key="product._id" class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
            <div class="history-box">
              <!------ Product Image  --->
              <a href="#" class="a-link-normal">
                <img
                  src="https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph"
                  class="img-fluid"
                />
              </a>
              <!------End Product Image  --->

              <!---- product title -->
              <div class="a spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">{{product.title}}</div>
                </span>
              </div>
              <!------ end of product title ---->

              <!---- product rating ----->
              <div class="a-row">
                <a href="#">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </a>
                <span class="a-letter-space"></span>
                <span class="a-color-tertiary a-size-small asin-reviews">(1732)</span>
              </div>
              <!---- End product rating ----->

              <!---- product price ----->
                <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">N{{product.price}}</span>
                </span>
                
               <!---- End product price ----->
               <div class="a-spacing-large"></div>
              <hr/>
              <!---------- product buttons ------>
                <b-button href="#" variant="success">Edit</b-button>
                <b-button href="#" variant="danger">Delete</b-button>
              <!---------- product buttons ------>
            </div>
          </div>
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
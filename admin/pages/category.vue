<template>
  <main>
    <Header />
    <div class="add-products addProduct">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 card addProduct">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add new Category</h2>

            <form>
              <div class="a-spacing-top-medium"></div>
             
            

              <div class="a-spacing-top-medium"></div>
              <label>Type</label>
              <input
                v-model="title"
                type="text"
                class="form-control"
                placeholder="Enter Title"
              />

              
              <hr />

              <div class="a-spacing-top-medium"></div>
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="addProduct"
                    >Add Category</span
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
          
        </div>
      </div>
    </div>
  </main>
</template>
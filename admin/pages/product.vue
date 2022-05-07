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
                <option value="1"></option>
              </select>

              <div class="a-spacing-top-medium"></div>
              <label>Owner</label>
              <select class="form-control">
                <option value="1"></option>
              </select>

              <div class="a-spacing-top-medium"></div>
              <label>Title</label>
              <input v-model="title"
                type="text"
                class="form-control"
                placeholder="Enter Title"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Price</label>
              <input v-model="price"
                type="number"
                class="form-control"
                placeholder="Enter Price"
              />

              <div class="a-spacing-top-medium"></div>
              <label>Description</label>
              <textarea v-model="description"
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
export default {};
</script>

<style>
</style>
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
                v-model="type"
                type="text"
                class="form-control"
                placeholder="Enter Title"
              />

              
              <hr />

              <div class="a-spacing-top-medium"></div>
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="addCategory"
                    >Add Category</span
                  >
                </span>
              </span>

             
            </form>
          </div>

          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <div>
              <b-table
                striped
                hover
                :items="categories"
                :fields="fields"
              >
              <template v-slot:cell(edit)="data"> 
                <router-link tag="button" class="a-button-edit" :to="
                  {
                    name: 'editCategory',
                    params: { categoryId: data.item._id}
                  }
                ">
               Edit
                </router-link>
              </template>

               <template v-slot:cell(delete)="data"> 
                 <button tag="button" class="a-button-delete" @click="deleteCategory(data.item)">Delete</button>
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
     
      const [catResponse] = await Promise.all([
        categories,
      ]);

       
      return {
        categories: catResponse.categories,
      };
      
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      type: "",
     
      fields: [
        {
          key: "type",
          sortable: true,
        },
      
        {
          key: "Edit",
        },
        {
          key: "Delete",
        },

      ], // table rows
      categories: [],
    };
  },

  methods: {
    async addCategory() {
      let data = {
        type: this.type,
      };

      let result = await this.$axios.$post(
        "http://localhost:5000/api/catigory",
        data
      );
      if (result.status) {
        this.categories.push(data);  
      }
   
    },

  },
};
</script>
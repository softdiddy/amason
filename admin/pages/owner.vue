<template>
  <main>
    <Header />
    <div class="add-products addProduct">
      <div class="container-fluid browsing-history">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 card addProduct">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add new Owner</h2>

            <form>
              <div class="a-spacing-top-medium"></div>

              <div class="a-spacing-top-medium"></div>
              <label>Name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Enter Name"
              />

              <div class="a-spacing-top-medium"></div>
              <label>About</label>
              <textarea
                v-model="about"
                type="text"
                class="form-control"
                placeholder="Enter About"
              >
              </textarea>

              <hr />
              <div class="a-spacing-top-medium"></div>
              <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
              <div class="a-spacing-top-medium"></div>
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="addOwner">Add Owner</span>
                </span>
              </span>
            </form>
          </div>

          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <div>
              <b-table striped hover :items="owners" :fields="fields">
                <template v-slot:cell(edit)="data">
                  <router-link
                    tag="button"
                    class="a-button-edit"
                    :to="{
                      name: 'editOwner',
                      params: { ownerId: data.item._id },
                    }"
                  >
                    Edit
                  </router-link>
                </template>

                <template v-slot:cell(delete)="data">
                  <button
                    tag="button"
                    class="a-button-delete"
                    @click="deleteOwner(data.item)"
                  >
                    Delete
                  </button>
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
      let owners = $axios.$get("http://localhost:5000/api/owner");

      const [ownersResponse] = await Promise.all([owners]);

      return {
        owners: ownersResponse.owners,
      };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      name: "",
      about: "",
      error: "",
      fields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "about",
        },
        {
          key: "Edit",
        },
        {
          key: "Delete",
        },
      ], // table rows
      owners: [],
    };
  },

  methods: {
    async addOwner() {
      if (!this.name) {
        this.error = "Please Enter Name";
      } else if (!this.about) {
        this.error = "Please Enter About";
      } else {
        let data = {
          name: this.name,
          about: this.about,
        };

        let result = await this.$axios.$post(
          "http://localhost:5000/api/owner",
          data
        );
        if (result.status) {
          this.owners.push(data);
        }
      }
    },
  },
};
</script>
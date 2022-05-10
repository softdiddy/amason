<template>
  <div>
    <b-navbar toggleable="lg" class="amazon-bg">
      <b-navbar-brand href="#">Amason Admin</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <NuxtLink to="/" class="a-button-buy-again"
            ><font-awesome-icon
              icon="fa-duotone fa-album-circle-plus"
            />Dashboard
          </NuxtLink>
          <NuxtLink to="/products/" class="a-button-buy-again"
            ><font-awesome-icon icon="fa-duotone fa-album-circle-plus" />Manage
            Products</NuxtLink
          >

          <NuxtLink to="/category" class="a-button-buy-again"
            ><font-awesome-icon icon="fa-duotone fa-album-circle-plus" />Manage
            Category</NuxtLink
          >

          <NuxtLink to="/owner" class="a-button-buy-again"
            ><font-awesome-icon icon="fa-duotone fa-album-circle-plus" />Manage
            Owners</NuxtLink
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

         
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
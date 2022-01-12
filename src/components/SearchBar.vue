<template>
  <div class="searchBar">
    <nav class="navbar sticky-top">
          <span class="m-4"
            ><font-awesome-icon icon="search" id="searchIcon" />
            <input placeholder="Search..." />
          </span>
          <!-- <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          /> -->

    </nav>
    <List></List>
  </div>
</template>
<script>
import List from "./List.vue";

export default {
  name: "SearchBar",
  components: {
    List,
  },
};
</script>
<style>
.navbar {
  background-color: #4d4768;
  height: 80px;
  display: flex;
}
#searchIcon {
  color: darkgray;
  margin-right: 20px;
}
input {
  /* height: 100px; */
  /* width: 100px; */
  /* min-width: 100%; */
  background-color: #4d4768;
  padding: 0;
  border-radius: 0;
  transition: 0.2s;
  font-size: 14rem;
  color: #9b9b9b;
  border: none;
  outline: none;
  border-bottom: 2px solid darkgray;

}
</style>

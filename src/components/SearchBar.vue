<template>
  <div class="searchBar">
    <header class="navbar sticky-top">
      <nav class="w-100 ms-5">
        <font-awesome-icon icon="search" id="searchIcon" />
        <input placeholder="SEARCH (Client Name / Policy Number)" />
      </nav>
    </header>
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
<style src="../styles/search-bar.scss" lang="scss"></style>

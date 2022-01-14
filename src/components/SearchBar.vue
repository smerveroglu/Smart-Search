<template>
  <div class="searchBar">
    <header class="navbar sticky-top flex align-items-center">
      <nav class="w-full ml-5">
        <font-awesome-icon :icon="['fas','search']" id="searchIcon" />
        <input
          class="w-8"
          placeholder="SEARCH (Client Name / Policy Number)"
          name="searchInput"
          v-model="input"
        />
      </nav>
    </header>
    <List v-if="filteredData.length > 0" :data="filteredData"></List>
  </div>
</template>
<script>
import List from "./List.vue";
import user from "../user.json";
export default {
  name: "SearchBar",
  components: {
    List,
  },
  data() {
    return {
      input: "",
      data: user,
      filteredData: [],
      key: "",
    };
  },
  methods: {
    getPerson() {
      if (isNaN(parseInt(this.input))) {
        this.key = "name";
      } else {
        this.key = "policyNo";
      }
      this.filteredData = this.data.filter((element) => {
        return element[`${this.key}`]
          .toLowerCase()
          .includes(this.input.toLowerCase());
      });
      console.log(this.filteredData);
    },
  },

  watch: {
    input: {
      handler(newVal) {
        this.filteredData = [];
        if (newVal !== "") this.getPerson();
      },
      deep: true,
    },
  },
};
</script>
<style src="../styles/search-bar.scss" lang="scss"></style>

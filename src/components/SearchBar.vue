<template>
  <div class="searchBar">
    <header class="navbar sticky-top">
      <nav class="w-100 ms-5">
        <font-awesome-icon icon="search" id="searchIcon" />
        <input
          placeholder="SEARCH (Client Name / Policy Number)"
          v-model="input"
        />
      </nav>
    </header>
    <List v-if="filteredData.length > 0" :data="filteredData"></List>
  </div>
</template>
<script>
import List from "./List.vue";
export default {
  name: "SearchBar",
  components: {
    List,
  },
  data() {
    return {
      input: "",
      data: [],
      filteredData: [],
      key: "",
    };
  },

  created() {
    fetch("../user.json")
      .then((response) => response.json())
      .then((data) => (this.data = data))
      .catch((error) => {
        console.log(error);
      });
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

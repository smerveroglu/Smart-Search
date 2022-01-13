<template>
  <div class="list max-w-screen">
    <div class="flex" v-for="person in data" :key="person.policyNo">
      <div class="col-12 m-0 p-0">
        <div class="text-2xl ml-3 text-left">{{ person.name }}</div>
        <div class="grid m-3 text-left">
          <div class="col-12 p-0 lg:col-2 sm:col-4">
            <font-awesome-icon icon="phone" rotation="90" />
            <span class="ml-2">{{ person.phone }}</span>
          </div>
          <div class="col-12 p-0 lg:col-4 sm:col-8 sm:mt-0 mt-3">
            <font-awesome-icon icon="at" />
            <span class="ml-2">{{ person.email }}</span>
          </div>
          <div class="col-12 lg:col-4 sm:col p-0 lg:mt-0 mt-3">
            <font-awesome-icon icon="file-alt" />
            <span class="ml-2">Policy No. {{ person.policyNo }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  props: ["data"],

  created() {
    console.log(this.data);
  },
};
</script>
<style src="../styles/list.scss" lang="scss"></style>

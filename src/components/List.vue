<template>
  <div class="list">
    <div class="table-container" v-for="person in data" :key="person.policyNo">
      <div class="flex-table row">
        <div class="flex-row rowspan">{{ person.name }}</div>
        <div class="column">
          <div class="flex-row">
            <div class="flex-cell">
              <font-awesome-icon icon="phone" rotation="90" /><span
                class="ms-2"
                >{{ person.phone }}</span
              >
            </div>
            <div class="flex-cell">
              <font-awesome-icon icon="at" /><span class="ms-2">{{
                person.email
              }}</span>
            </div>
            <div class="flex-cell">
              <font-awesome-icon icon="file-alt" /><span class="ms-2">{{
                person.policyNo
              }}</span>
            </div>
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

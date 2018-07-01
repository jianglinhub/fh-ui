<template>
  <div id="testupdate">
    This is update router!
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('query:', this.$route.query); // eslint-disable-line
  },
};
</script>

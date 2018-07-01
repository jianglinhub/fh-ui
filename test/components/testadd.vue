<template>
  <div id="testadd">
    This is add router!
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('params:', this.$route.params); // eslint-disable-line
  },
};
</script>

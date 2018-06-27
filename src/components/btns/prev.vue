<template>
  <el-button type="primary" icon="el-icon-arrow-left" @click="toPage">上一行</el-button>
</template>

<script>
export default {
  name: 'prev',
  props: {
    options: {
      type: Object,
      default() {},
      required: true,
    },
  },
  methods: {
    toPage() {
      this.$router.push({
        name: this.options.router,
        params: this.options.params,
        query: this.options.query,
      });
    },
  },
};
</script>

<template>
  <el-button type="primary" icon="el-icon-refresh" @click="toPage">刷新</el-button>
</template>

<script>
export default {
  name: 'refresh',
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

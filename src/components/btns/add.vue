<template>
  <el-button type="primary" icon="el-icon-plus" @click="toPage">新增</el-button>
</template>

<script>
export default {
  name: 'add',
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

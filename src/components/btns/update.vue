<template>
  <el-button type="primary" icon="el-icon-edit-outline" @click="toPage">修改</el-button>
</template>

<script>
export default {
  name: 'update',
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

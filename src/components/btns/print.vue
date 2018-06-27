<template>
  <el-button type="primary" icon="el-icon-printer" @click="toPage">打印</el-button>
</template>

<script>
export default {
  name: 'print',
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

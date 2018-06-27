<template>
  <el-button type="primary" icon="el-icon-close" @click="toPage">关闭</el-button>
</template>

<script>
export default {
  name: 'close',
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

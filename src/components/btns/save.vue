<template>
  <el-button type="primary" icon="el-icon-check" @click="toPage">保存</el-button>
</template>

<script>
export default {
  name: 'save',
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

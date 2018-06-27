<template>
  <el-button type="primary" icon="el-icon-circle-check" @click="toPage">确认选择</el-button>
</template>

<script>
export default {
  name: 'confirm-select',
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

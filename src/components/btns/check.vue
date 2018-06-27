<template>
  <el-button type="primary" icon="el-icon-edit" @click="toPage">批改</el-button>
</template>

<script>
export default {
  name: 'check',
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

<template>
  <el-button type="primary" icon="el-icon-setting" @click="toPage">选项</el-button>
</template>

<script>
export default {
  name: 'options',
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

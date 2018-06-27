<template>
  <el-button type="primary" icon="el-icon-remove-outline" @click="toPage">启用</el-button>
</template>

<script>
export default {
  name: 'start-use',
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

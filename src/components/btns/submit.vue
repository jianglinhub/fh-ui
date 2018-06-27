<template>
  <el-button type="primary" icon="el-icon-upload2" @click="toPage">提交</el-button>
</template>

<script>
export default {
  name: 'submit',
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

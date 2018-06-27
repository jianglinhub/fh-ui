<template>
  <el-button type="primary" @click="toPage">
    导出<i class="el-icon-download el-icon--right"></i>
  </el-button>
</template>

<script>
export default {
  name: 'export',
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

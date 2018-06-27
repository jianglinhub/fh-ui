<template>
  <el-button type="primary" @click="toPage">
    导入<i class="el-icon-upload el-icon--right"></i>
  </el-button>
</template>

<script>
export default {
  name: 'import',
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

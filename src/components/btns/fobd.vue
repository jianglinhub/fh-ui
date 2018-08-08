<template>
  <el-button type="primary" icon="el-icon-plus" @click="click">禁用</el-button>
</template>

<script>
export default {
  name: 'fobd',
  methods: {
    click() {
      this.$emit('handleFobd');
    },
  },
};
</script>

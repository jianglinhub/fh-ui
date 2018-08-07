<template>
  <el-button type="primary" icon="el-icon-plus" @click="click">新增</el-button>
</template>

<script>
export default {
  name: 'add',
  methods: {
    click() {
      this.$emit('handleAdd');
    },
  },
};
</script>

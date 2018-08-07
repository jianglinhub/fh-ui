<template>
  <el-button type="primary" icon="el-icon-delete" @click="click">删除</el-button>
</template>

<script>
export default {
  name: 'delete',
  methods: {
    click() {
      this.$emit('handleDelete');
    },
  },
};
</script>

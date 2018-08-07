<template>
  <el-button type="primary" icon="el-icon-edit-outline" @click="click">修改</el-button>
</template>

<script>
export default {
  name: 'update',
  methods: {
    click() {
      this.$emit('handleUpdate');
    },
  },
};
</script>

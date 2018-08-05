<template>
  <el-button type="primary" icon="el-icon-delete" @click="handleDel">删除</el-button>
</template>

<script>
export default {
  name: 'delete',
  methods: {
    handleDel() {
      const params = {
        actionName: '删除',
      };
      this.$emit('deleteAction', params);
    },
  },
};
</script>

<template>
  <el-button type="primary" icon="el-icon-delete" @click="handleDel">删除</el-button>
</template>

<script>
export default {
  name: 'delete',
  props: {
    options: {
      type: Object,
      default() {
        return {
          id: '0',
        };
      },
      required: true,
    },
  },
  methods: {
    handleDel() {
      const params = {
        id: this.options.id,
        actionName: '删除',
      };
      this.$emit('deleteAction', params);
    },
  },
};
</script>

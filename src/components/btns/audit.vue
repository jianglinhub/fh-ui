<template>
  <el-button type="primary" icon="el-icon-view" @click="handleClick">审核</el-button>
</template>

<script>
export default {
  name: 'audit',
  props: {
    options: {
      type: Object,
      default() {
        return {
          action: '',
        };
      },
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('auditAction', this.options);
    },
  },
};
</script>

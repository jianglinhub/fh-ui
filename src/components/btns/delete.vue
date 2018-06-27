<template>
  <el-button type="primary" icon="el-icon-delete" @click="action">删除</el-button>
</template>

<script>
export default {
  name: 'delete',
  props: {
    options: {
      type: Object,
      default() {
        return {
          id: 0,
        };
      },
      required: true,
    },
  },
  methods: {
    action() {
    },
  },
};
</script>

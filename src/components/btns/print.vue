<template>
  <el-button type="primary" icon="el-icon-printer" @click="printPage">打印</el-button>
</template>

<script>
export default {
  name: 'print',
  methods: {
    printPage() {
      window.print();
    },
  },
};
</script>

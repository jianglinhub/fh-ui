<template>
  <div>
    <base-search :fields="fields" @onSearch="onSearch"></base-search>
    <!--
    <btn-left-group
      :btns="leftBtns"
      @handleAdd="handleAdd"
      @handleAudit="handleAudit"
      @handleCheck="handleCheck"
      @handleConfirmSelect="handleConfirmSelect"
      @handleDelete="handleDelete"
      @handleExport="handleExport"
      @handleImport="handleImport"
      @handleSave="handleSave"
      @handleStartUse="handleStartUse"
      @handleFobd="handleFobd"
      @handleSubmit="handleSubmit"
      @handleUpdate="handleUpdate">
    </btn-left-group>
    <br>
    <btn-right-group
      :btns="rightBtns"
      @handleNext="handleNext"
      @handleOptions="handleOptions"
      @handlePrev="handlePrev"
      @handlePrint="handlePrint"
      @handleClose="handleClose"
      @handleRefresh="handleRefresh">
    </btn-right-group>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [{
        value: '黄金糕',
        label: '黄金糕',
      }, {
        value: '双皮奶',
        label: '双皮奶',
      }, {
        value: '蚵仔煎',
        label: '蚵仔煎',
      }, {
        value: '龙须面',
        label: '龙须面',
      }, {
        value: '北京烤鸭',
        label: '北京烤鸭',
      }],
    };
  },
  // data() {
  //   return {
  //     leftBtns: ['add', 'del', 'update', 'check', 'fobd', 'startUse', 'audit',
  //       'imp', 'exp', 'submit', 'confirmSelect', 'save'],
  //     rightBtns: ['refresh', 'close', 'print', 'next', 'prev', 'options'],
  //   };
  // },
  methods: {
    onSearch(data) {
      console.log('data: ', data); // eslint-disable-line
    },
    // handleAdd() {
    //   console.log('handleAdd'); // eslint-disable-line
    // },
    // handleAudit() {
    //   console.log('handleAudit'); // eslint-disable-line
    // },
    // handleCheck() {
    //   console.log('handleCheck'); // eslint-disable-line
    // },
    // handleClose() {
    //   console.log('handleClose'); // eslint-disable-line
    // },
    // handleConfirmSelect() {
    //   console.log('handleConfirmSelect'); // eslint-disable-line
    // },
    // handleDelete() {
    //   console.log('handleDelete'); // eslint-disable-line
    // },
    // handleExport() {
    //   console.log('handleExport'); // eslint-disable-line
    // },
    // handleImport() {
    //   console.log('handleImport'); // eslint-disable-line
    // },
    // handleNext() {
    //   console.log('handleNext'); // eslint-disable-line
    // },
    // handleOptions() {
    //   console.log('handleOptions'); // eslint-disable-line
    // },
    // handlePrev() {
    //   console.log('handlePrev'); // eslint-disable-line
    // },
    // handlePrint() {
    //   console.log('handlePrint'); // eslint-disable-line
    // },
    // handleRefresh() {
    //   console.log('handleRefresh'); // eslint-disable-line
    // },
    // handleSave() {
    //   console.log('handleSave'); // eslint-disable-line
    // },
    // handleStartUse() {
    //   console.log('handleStartUse'); // eslint-disable-line
    // },
    // handleFobd() {
    //   console.log('handleFobd'); // eslint-disable-line
    // },
    // handleSubmit() {
    //   console.log('handleSubmit'); // eslint-disable-line
    // },
    // handleUpdate() {
    //   console.log('handleUpdate'); // eslint-disable-line
    // },
  },
};
</script>

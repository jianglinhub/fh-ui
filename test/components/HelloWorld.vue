<template>
  <div>
    <base-search :fields="fields" @onSearch="onSearch"></base-search>
    <!--
    <btn-left-group
      :btns="leftBtns"
      :options="leftOptions"
      @handleDelClose="handleDelClose"
      @handleStartUseClose="handleStartUseClose"
      @handleDelConfirm="handleDelConfirm"
      @handleStartUseConfirm="handleStartUseConfirm">
    </btn-left-group>
    <br>
    <btn-right-group
      :btns="rightBtns"
      :options="rightOptions">
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
  //     leftBtns: ['add', 'del', 'update', 'check', 'startUse', 'audit'],
  //     rightBtns: ['refresh', 'close', 'print'],
  //     leftOptions: {
  //       addOptions: {
  //         router: 'testadd',
  //         params: {
  //           name: 'username',
  //           id: '1',
  //         },
  //       },
  //       startUseOptions: {
  //         id: '3',
  //       },
  //       updateOptions: {
  //         router: 'testupdate',
  //         query: {
  //           id: '1',
  //         },
  //       },
  //       checkOptions: {
  //         router: 'testupdate',
  //         query: {
  //           id: '1',
  //         },
  //       },
  //       auditOptions: {
  //         action: '/upload',
  //       },
  //     },
  //     rightOptions: {},
  //   };
  // },
  methods: {
    onSearch(data) {
      console.log('data: ', data); // eslint-disable-line
    },
    // handleDelClose() {
    //   console.log('do something after handleDelClose!'); // eslint-disable-line
    // },
    // handleDelConfirm() {
    //   console.log('do something after handleDelConfirm!'); // eslint-disable-line
    // },
    // handleStartUseClose() {
    //   console.log('do something after handleStartUseClose!'); // eslint-disable-line
    // },
    // handleStartUseConfirm() {
    //   console.log('do something after handleStartUseConfirm!'); // eslint-disable-line
    // },
  },
};
</script>

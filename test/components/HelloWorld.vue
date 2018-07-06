<template>
  <div>
    <base-search :fields="fields" @onSearch="onSearch"></base-search>
    <!--<btn-left-group
      :btns="leftBtns"
      :options="leftOptions"
      @handleDelClose="handleDelClose"
      @handleDelConfirm="handleDelConfirm">
    </btn-left-group>
    <btn-right-group
      :btns="rightBtns"
      :options="rightOptions">
    </btn-right-group>-->
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
  //     leftBtns: ['add', 'del', 'update'],
  //     rightBtns: ['refresh', 'close'],
  //     leftOptions: {
  //       addOptions: {
  //         router: 'testadd',
  //         params: {
  //           name: 'username',
  //           id: '1',
  //         },
  //       },
  //       delOptions: {
  //         id: '2',
  //       },
  //       updateOptions: {
  //         router: 'testupdate',
  //         query: {
  //           id: '1',
  //         },
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
  },
};
</script>

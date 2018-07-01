<template>
  <div>
    <BtnLeftGroup
      :btns="leftBtns"
      :options="leftOptions"
      @handleDelClose="handleDelClose"
      @handleDelConfirm="handleDelConfirm"
    ></BtnLeftGroup>
    <BtnRightGroup
      :btns="rightBtns"
      :options="rightOptions"
    ></BtnRightGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftBtns: ['add', 'del', 'update'],
      rightBtns: ['refresh', 'close'],
      leftOptions: {
        addOptions: {
          router: 'testadd',
          params: {
            name: 'username',
            id: '1',
          },
        },
        delOptions: {
          id: '2',
        },
        updateOptions: {
          router: 'testupdate',
          query: {
            id: '1',
          },
        },
      },
      rightOptions: {},
    };
  },
  methods: {
    handleDelClose() {
      console.log('do something after handleDelClose!'); // eslint-disable-line
    },
    handleDelConfirm() {
      console.log('do something after handleDelConfirm!'); // eslint-disable-line
    },
  },
};
</script>

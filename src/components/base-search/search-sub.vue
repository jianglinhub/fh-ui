<template>
  <div>
      <el-select v-model="options1.field" placeholder="列表字段" size="small" style="width:160px">
        <el-option
          v-for="item in fields"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="options1.condition" placeholder="包含" size="small" style="width:100px">
        <el-option
          v-for="item in conditions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="请输入内容" v-model="options1.value" size="small" style="width:160px">
      </el-input>
      <el-select v-model="options1.and" placeholder="并且" size="small" style="width:80px">
        <el-option
          v-for="item in ands"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
  </div>
</template>
<script>
export default {
  name: 'searchgSub',
  data() {
    return {
      ands: [{
        value: 'AND',
        label: '并且',
      }, {
        value: 'OR',
        label: '或者',
      }],
      conditions: [{
        value: 'neq',
        label: '不等于',
      }, {
        value: 'eq',
        label: '等于',
      }, {
        value: 'gt',
        label: '大于',
      }, {
        value: 'lt',
        label: '小于',
      }, {
        value: 'gte',
        label: '大于等于',
      }, {
        value: 'lte',
        label: '小于等于',
      }, {
        value: 'leftContain',
        label: '左包含',
      }, {
        value: 'rightContain',
        label: '右包含',
      }, {
        value: 'in',
        label: 'in',
      }, {
        value: 'contain',
        label: '包含',
      }, {
        value: 'isNotNull',
        label: '不为空',
      }, {
        value: 'isNull',
        label: '为空',
      }],
      options1: this.options,
    };
  },
  props: {
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
    options: {
      type: Object,
      default() {
        return {
          seqNo: 1,
          field: '',
          condition: '',
          value: '',
          and: '',
        };
      },
    },
  },
};
</script>

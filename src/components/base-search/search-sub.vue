<template>
  <div>
      <el-select
        v-model="options1.fieldCode"
        placeholder="列表字段"
        size="small"
        style="width:160px"
        @change="changeField">
        <el-option
          v-for="item in fields"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="options1.fileType" placeholder="包含" size="small" style="width:100px">
        <el-option
          v-for="item in conditions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input
        placeholder="请输入内容"
        v-model="options1.defValue"
        size="small"
        style="width:200px"
        v-if="fieldType === 'string'">
      </el-input>
      <el-input
        placeholder="请输入内容"
        v-model="options1.defValue"
        size="small"
        type="number"
        style="width:200px"
        v-if="fieldType === 'number'">
      </el-input>
      <el-date-picker
        v-model="options1.defValue"
        size="small"
        type="datetime"
        style="width:200px"
        placeholder="请选择日期时间"
        value-format="yyyy-MM-dd hh:mm:ss"
        v-if="fieldType === 'date'">
      </el-date-picker>
      <el-select
        v-model="options1.defValue"
        placeholder="请选择"
        size="small"
        style="width:200px"
        v-if="fieldType === 'options'">
        <el-option
          v-for="item in fieldOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="options1.logic" placeholder="并且" size="small" style="width:80px">
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
      fieldType: 'string',
      fieldOptions: [],
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
          fieldCode: '',
          fileType: '',
          defValue: '',
          logic: '',
        };
      },
    },
  },
  methods: {
    changeField(key) {
      const item = this.fields.filter(x => x.value === key); // 查询找当前key的type
      this.fieldType = item[0].type ? item[0].type : 'string';
      this.fieldOptions = item[0].options ? item[0].options : [];
    },
  },
};
</script>

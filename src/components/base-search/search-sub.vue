<template>
  <div>
      <el-select v-model="field" placeholder="列表字段" size="small" style="width:160px">
        <el-option
          v-for="item in fields"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="condition" placeholder="包含" size="small" style="width:100px">
        <el-option
          v-for="item in conditions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="请输入内容" v-model="value" size="small" style="width:160px">
      </el-input>
      <el-select v-model="and" placeholder="并且" size="small" style="width:80px">
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
  props: {
    value: {
      type: String,
      default: '',
    },
    field: {
      type: String,
      default: '',
    },
    and: {
      type: String,
      default: '',
    },
    ands: {
      type: Array,
      default() {
        return [];
      },
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
    },
    condition: {
      type: String,
      default: '',
    },
    conditions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

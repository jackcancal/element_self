<template>
  <div class="select_options">
    <el-select v-model="card_calss" filterable placeholder="请选择">
      <el-option
        v-for="item in card_calss_options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span class="select_options_icon">
        <i class="el-icon-d-caret"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name: "select",
    data () {
      return {
        card_calss: '',
        card_calss_options: [// 会员卡类型选项
          {
            value: '选项1',
            label: '普通会员卡'
          },
          {
            value: '选项2',
            label: '白银会员卡'
          },
          {
            value: '选项3',
            label: '黄金会员卡'
          },
          {
          value: '选项4',
          label: '白金会员卡'
        },
          {
          value: '选项5',
          label: '钻石会员卡'
        }],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .select_options{
    position: relative;
    display: inline-block;
    width: 142px;
    .el-select{
      .el-input__suffix{
        display: none;
      }
      .el-input{
        width: 142px;
        height: 32px;
        .el-input_inner{
          width: 100%;
          height: 100%;
          padding: 0;
          text-align: center;
          line-height: 32px;
        }
      }
    }
    .select_options_icon{
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translate(0, -50%);
    }
  }
</style>

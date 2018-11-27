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
    name: "selection",
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
@import "../assets/scss/mixin";
  .select_options{
    @include select_options(178px,40px,#000,10px,16px)
  }

</style>

<template>
  <div class="date">
    <el-date-picker
      v-model="value1"
      type="year"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "date",
    data (){
      return {
        value1:'',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() <= Date.now();
          }
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
.date{
  /deep/ .el-input{
    width: 146px;
    height: 32px;
    position: relative;
    display: flex;
    align-items: center;
    .el-input__inner{
      width: 146px;
      height: 32px;
      padding: 0;
      font-size: 12px;
      color: #9B9B9B;
      letter-spacing: 0;
      padding-left: 12px;
      box-sizing: border-box;
    }
    .el-input__prefix{
      position: static;
      transform: translateX(-100%);
      .el-input__icon{
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>

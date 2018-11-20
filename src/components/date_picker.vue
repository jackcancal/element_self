<template>
  <div class="date_picker">
    <div class="start_time">
      <el-date-picker
        v-model="startTime"
        type="date"
        :clearable="false"
        placeholder="开始日期">
      </el-date-picker>
    </div>
    <div class="to">至</div>
    <div class="end_time">
      <el-date-picker
        v-model="endTime"
        type="date"
        :clearable="false"
        placeholder="结束日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    name: "date_picker",
    data () {
      return {
        startTime: '',
        endTime: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .date_picker{
    display: flex;
    align-items: center;
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
    .to{
      margin-left: 8px;
      margin-right: 11px;
      font-size: 12px;
      color: #303343;
      letter-spacing: 0;
      line-height: 32px;
    }
  }
</style>

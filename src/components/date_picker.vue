<template>
  <div class="date_picker">
    <div class="start_time">
      <el-date-picker
        v-model="startTime"
        type="date"
        :clearable="false"
        @change="date_change('start')"
        placeholder="开始日期">
      </el-date-picker>
    </div>
    <div class="to">至</div>
    <div class="end_time">
      <el-date-picker
        v-model="endTime"
        type="date"
        :clearable="false"
        @change="date_change('end')"
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
    },
    methods: {
      date_change(type) {
        let {startTime,endTime} = this
        if (!startTime || !endTime) return
        let dis = new Date(endTime) - new Date(startTime)
        if (dis <= 0) {
          this.$alert('结束时间必须大于开始时间!', '提示', {
            confirmButtonText: '确定',
            callback: action => {
              if (type === 'start') this.startTime = ''
              else if (type === 'end') this.endTime = ''
            }
          })
        }
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

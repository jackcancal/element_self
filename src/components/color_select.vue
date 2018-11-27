<template>
  <div>
    <div class="card_font_color">
      <el-input v-model="color"></el-input>
      <el-color-picker v-model="color"></el-color-picker>
    </div>
    <div class="input">
      <el-input></el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "color_select",
    data () {
      return {
        color: '#FFFFFF'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/mixin';
  .card_font_color{
    display: flex;
    align-items: center;
    /deep/ .el-input{
      width: 79px;
      height: 32px;
      margin-right: 8px;
      .el-input__inner{
        width: 100%;
        height: 100%;
        padding: 0;
        text-align: center;
        line-height: 32px;
      }
    }
    /deep/ .el-color-picker{
      width: 48px;
      height: 32px;
      .el-color-picker__trigger{
        width: 100%;
        height: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .el-color-picker__color{
          width: 20px;
          height: 20px;
          margin-left: 7px;
          border: none;
        }
        .el-color-picker__empty{
          display: none;
        }
        .el-color-picker__icon{
          color: #4A4A4A;
          width: 20px;
          height: 20px;
          display: flex!important;
          align-items: center;
          justify-content: center;
          margin-right: -10px;
          transform: translate(15%, -50%);
        }
      }
    }
  }
  .input{
    @include input(100px,50px,#ccc,18px)
  }
</style>

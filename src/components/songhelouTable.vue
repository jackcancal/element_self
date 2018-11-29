<template>
  <div class="songhelou_table">
    <div class="table_wrap">
      <div class="table_header">
        <div class="title">{{title}}</div>
        <div class="operation">
          <div class="operation_icon">
            <i class="el-icon-caret-right"></i>
          </div>
          <div class="operation_name">{{operate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "songhelouTable",
    props: {
      title: {
        type: String,
        default: '销售列表'
      },
      operate: {
        type: String,
        default: '批量销售'
      },
    }

  }
</script>

<style lang="scss" scoped>
.songhelou_table{
  width: 100%;
  font-size: 13px;
  color: #303343;
  .table_wrap{
    .table_header{
      display: flex;
      align-items: center;
      .title{
        margin-right: 10px;
      }
      .operation{
        display: flex;
        align-items: center;
        cursor: pointer;
        .operation_icon{
          color: #4A90E2;
        }
      }
    }
  }
}
</style>

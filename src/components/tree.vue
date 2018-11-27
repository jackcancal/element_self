<template>
  <div class="tree_list">
    <!--<el-tree
      :data="data2"
      node-key="id"
      :expand-on-click-node="false"
      :check-on-click-node="false"
      :auto-expand-parent="false"
      icon-class="el-icon-plus"
      :default-expanded-keys="[1,2,3,4,5]"
      :default-checked-keys="[1,2,3,4,5]"
      @node-click="clicks"
      :props="defaultProps">
    </el-tree>-->
    <el-tree :data="treeList" node-key="polyOrganiId" ref="treeList" highlight-current :props="defaultProps" default-expand-all :expand-on-click-node="false">
      <div class="custom-tree-node2" slot-scope="{ node, data }">
        <div >
          <span class="addborder">111</span>
        </div>
      </div>
    </el-tree>
  </div>

</template>

<script>
  export default {
    name: "tree",
    data() {
      return {
        treeList: [
          {
          id: 1,
          label: '一级 1',
          children: [
            {
            id: 4,
            label: '二级 1-1',
            children: [
              {
              id: 9,
              label: '三级 1-1-1'
              },
              {
              id: 10,
              label: '三级 1-1-2'
              }]
          }]
        },
          {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
          {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
        ],
        defaultProps: {
          label: 'polyOrganiLabel',
          children: 'childList',
          organiLevel: 'organiLevel'
        }
      };
    },
    methods: {
      clicks(a,b,c) {
        console.log(a,b,c)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../colorManage";
  .tree_list {
    .el-dialog__body{padding:5px 20px;}
    .el-form-item__content{
      min-height: 100px;
      max-height: 300px;
      border:1px solid #ebebeb;
      border-radius: 5px;
      padding:10px;
      overflow: auto;
    }
    .el-tree>.el-tree-node {
      left: 0;
      &:before {
        display: none;
      }
      >.el-tree-node__content {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-left: 22px !important;
        >.el-tree-node__expand-icon {
          display: none
        }
      }
    }
    .el-tree-node {
      position: relative;
      left: 50px;
      &:before {
        content: '';
        position: absolute;
        left: 6px;
        top: 0;
        height: 100%;
        border-left: 1px dashed $label_color;
      }
    }
    .el-tree-node__content {
      height: 32px;
      padding-left: 0 !important; //
      background: rgba(0,0,0,0) !important;
    }
    .el-tree-node__children {
      >.el-tree-node:last-child {
        &:before {
          height: 20px;
        ;
        }
      }
    }
    .el-tree-node__expand-icon {
      padding: 0 !important;
      border: 1px solid $body_bg;
      border-radius: 2px;
      line-height: 10px;
      text-align: center;
      width: 10px;
      background: #fff;
      margin-right: 10px;
      transform: rotate(0deg) !important;
      color: $body_bg !important;
      &:before {
        content: '+';
        position: relative;
        top: -1px;
      }
      &:after {
        content: '';
        position: absolute;
        left: 12px;
        top: 4px;
        width: 8px;
        border-top: 1px dashed $label_color;
      }
    }
    .el-tree-node__expand-icon.expanded,
    .el-tree-node__expand-icon.is-leaf {
      &:before {
        content: '-'
      }
    }
    .el-tree-node__content {
      &:hover .el-icon-circle-close {
        display: block !important;
      }
    }

    .custom-tree-node2 {
      >div.selected .addborder {
        background: $body_bg !important;
        color: #fff !important;
        border-color: $body_bg !important;
      }
      .disabled,
      .checked {
        color: #ccc;
        background: #fff;
        cursor: not-allowed;
      }
      >div.checked .addborder {
        border-color: #ccc;
      }
      .nolookStoreColor {
        color: #ccc;
        cursor: not-allowed;
      }
    }
    .addborder {
      font-size: 12px;
      line-height: 14px;
      border: 1px solid #606266;
      padding: 4px 12px;
      border-radius: 4px;
    }
  }
</style>

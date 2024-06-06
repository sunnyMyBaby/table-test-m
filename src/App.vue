<template>
  <div id="table-wrapper" class="table-wrapper">
    <div v-if="isFullScreen" class="header">
      <div class="title">商务需关注异常合同</div>
      <img @click="closeFullScreenFn" src="./assets/vertical.png" />
    </div>
    <vxe-table
      :height="height"
      header-row-class-name="header-row-class-name"
      header-cell-class-name="header-cell-class-name"
      cell-class-name="cell-class-name"
      row-class-name="row-class-name"
      border="inner"
      min-height="35"
      :column-config="{resizable: true}"
      :row-config="{isHover: true}"
      :data="tableData"
    >
      <vxe-column fixed="left" field="name" title="名称" min-width="200"></vxe-column>
      <vxe-column field="reason" title="异常原因" min-width="100"></vxe-column>
      <vxe-column field="money" title="涉及金额" min-width="100"></vxe-column>
      <vxe-column field="money" title="涉及金额" min-width="100"></vxe-column>
      <vxe-column field="money" title="涉及金额" min-width="100"></vxe-column>
      <vxe-column field="money" title="涉及金额" min-width="100"></vxe-column>
      <vxe-column field="money" title="涉及金额" min-width="100"></vxe-column>
      <vxe-column field="money" title="涉及金额22" min-width="100"></vxe-column>
    </vxe-table>
    <div v-if="!isFullScreen" @click="fullScreenFn">全屏</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { fullScreen, closeFullScreen } from "./aaa.js";
const tableData = ref([
  { name: "北京银行智慧教育", reason: "验收款支付超期", money: "500万" },
  { name: "开放银行场景应用", reason: "尾款支付超期", money: "500万" },
  { name: "工商银行社保卡", reason: "验收款支付超期", money: "500万" },
  { name: "北京银行智慧教育", reason: "验收款支付超期", money: "500万" },
  { name: "开放银行场景应用", reason: "尾款支付超期", money: "500万" },
  { name: "工商银行社保卡", reason: "验收款支付超期", money: "500万" },
  { name: "北京银行智慧教育", reason: "验收款支付超期", money: "500万" },
  { name: "开放银行场景应用", reason: "尾款支付超期", money: "500万" },
  { name: "工商银行社保卡", reason: "验收款支付超期", money: "500万" },
  { name: "北京银行智慧教育", reason: "验收款支付超期", money: "500万" },
  { name: "开放银行场景应用", reason: "尾款支付超期", money: "500万" },
  { name: "工商银行社保卡", reason: "验收款支付超期", money: "500万" },
  { name: "北京银行智慧教育", reason: "验收款支付超期", money: "500万" },
  { name: "开放银行场景应用", reason: "尾款支付超期", money: "500万" },
  { name: "工商银行社保卡", reason: "验收款支付超期", money: "500万" },
  { name: "北京银行智慧教育", reason: "验收款支付超期", money: "500万" },
  { name: "开放银行场景应用", reason: "尾款支付超期", money: "500万" },
  { name: "工商银行社保卡", reason: "验收款支付超期", money: "500万" }
]);
const isFullScreen = ref(false);
const width = ref(null);
const height = ref(311);

const screenDirection = ref(""); // horizontal 横屏 vertical 竖屏

//判断屏幕方向

function fullScreenFn() {
  const direction = fullScreen("#table-wrapper");
  isFullScreen.value = !isFullScreen.value;
  console.log(99999, direction);
  if (direction === "vertical") {
    let clientWidth = document.documentElement.clientWidth;
    height.value = clientWidth - 72;
  } else if (direction === "horizontal") {
    let clientHeight = document.documentElement.clientHeight;
    height.value = clientHeight - 72;
  }
}

function closeFullScreenFn() {
  const direction = closeFullScreen("#table-wrapper");
  isFullScreen.value = !isFullScreen.value;
}
</script>
<style>
* {
  box-sizing: border-box;
}
.table-wrapper {
  padding: 0 20px 20px 20px;
}
.table-wrapper .header {
  height: 52px;
  line-height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.table-wrapper .header .title {
  font-family: SourceHanSansSC, SourceHanSansSC;
  font-weight: bold;
  font-size: 16px;
  color: #222222;
}
.vxe-table {
  overflow: hidden;
  border-radius: 10px !important;
}
.header-row-class-name {
  background: #f5f7f9;
  border-radius: 10px !important;
  overflow: hidden !important;
}
.vxe-table .vxe-table--header-wrapper .vxe-table--header-border-line {
  border-color: #e1ecf2 !important;
}
.vxe-table .vxe-table--header-wrapper {
  background: transparent !important;
  box-shadow: inset 0px -1px 0px 0px #e1ecf2 !important;
}
.vxe-table--render-default .vxe-table--border-line {
  border: 1px solid #e6eaec !important;
  border-radius: 10px !important;
  overflow: hidden !important;
}

.vxe-table--render-default.border--inner .vxe-table--body .vxe-body--column {
  background-image: linear-gradient(#e1ecf2, #e1ecf2);
  box-shadow: inset 0px -1px 0px 0px #e1ecf2;
}

.vxe-table--render-default.border--inner
  .vxe-table--body
  .vxe-body--row:last-child
  .vxe-body--column {
  background-image: none !important;
  box-shadow: none;
}

.cell-class-name .vxe-cell--label {
  font-family: SourceHanSansSC, SourceHanSansSC;
  font-size: 14px;
  color: #222222;
}
.header-cell-class-name .vxe-cell--title {
  font-family: SourceHanSansSC, SourceHanSansSC;
  font-weight: bold;
  font-size: 12px;
  color: #747883;
  line-height: 35px;
}
.vxe-table--render-default .vxe-header--column:not(.col--ellipsis) {
  padding: 0 !important;
}
.vxe-table--render-default .vxe-body--column:not(.col--ellipsis) {
  padding: 12px 0px !important;
}
.row-class-name .cell-class-name:first-child .vxe-cell--label {
  font-weight: bold;
}

.horizontal-full-screen {
  position: fixed !important;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
}

.vertical-full-screen {
  position: fixed !important;
  z-index: 1000;
  /* width: 100vh;
  height: 100vw; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: rotate(90deg);
}
</style>
<template>
  <div>
    <div id="begin"></div>
    <nuxt/>
    <div id="end"></div>
  </div>
</template>

<style lang="less">


  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-size: 12pt;
    line-height: 14.5pt;
    font-weight: lighter;
    font-family: Source Han Sans CN, serif;
  }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .page {
    position: relative;
    width: 21cm;
    min-height: 29.7cm;
    padding: 0;
    margin: 0 auto;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .page-img {
    width: 21cm;
    height: 29.7cm;
    position: absolute;
    top: 0;
    left: 0;
  }

  @page {
    size: A4;
    margin: 0;
  }

  table {
    border: none;
    border-collapse: collapse;
    tr th, tr td {
      border: 1pt solid;
    }
  }

</style>

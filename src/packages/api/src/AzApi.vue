<template>
  <div class="apiBox">
    <h3 class="attrTitle">Attributes</h3>
    <table class="table" v-for="a in table">
      <thead>
      <tr>
        <th v-for="b in a.title">{{b}}</th>
      </tr>
      </thead>
      <tbody v-for="c in a.trs">
      <tr v-for="d in c.tr">
        <td v-for="e in d.td">{{e}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "AzApi",
    props: ["table"]
  }
</script>

<style scoped>
  .apiBox {
    margin: 0 auto;
    width: 80%;
  }

  .attrTitle {
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
  }

  .table {
    border-collapse: collapse;
    width: 80%;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 30px;
  }

  .table th {
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: 400;
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
  }

  .table td {
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: 400;
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
  }
</style>

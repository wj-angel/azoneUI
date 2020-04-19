<template>
  <div>
    <uploader :options="options" class="uploader-example">
      <uploader-unsupport></uploader-unsupport>
      <uploader-drop>
        <p>将文件放到此处 或</p><br/>
        <uploader-btn>选择文件</uploader-btn>
        <uploader-btn :attrs="attrs">选择图像</uploader-btn>
        <uploader-btn :directory="true">选择文件夹</uploader-btn>
      </uploader-drop>
      <uploader-list></uploader-list>
    </uploader>
  </div>
</template>

<script>
    export default {
      name: "AzUploader",
      props:["options","attrs"],
      components:{}
    }
</script>

<style scoped>
  @import "../../libs/theme/uploader.css";
</style>

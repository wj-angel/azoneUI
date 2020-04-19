<template>
    <div>
      <!--<az-assembly-left></az-assembly-left>-->
      <!--<az-right-azone></az-right-azone>-->
      <!--assembly  -->
      <!--<az-right-banner></az-right-banner>-->
      <!--<az-right-classify></az-right-classify>-->
      <az-dorp-down-menu-show></az-dorp-down-menu-show>

    </div>
</template>

<script>
    import AzAssemblyLeft from "../components/assembly/AzAssemblyLeft";
    import AzDorpDownMenuShow from "../components/AzGroupLibrary/AzDorpDownMenuShow";
    import ElColorPickerDropdown from "element-ui/packages/color-picker/src/components/picker-dropdown";
    import AzRightAzone from "../components/assembly/AzRightAzone";
    import AzRightBanner from "../components/assembly/AzRightBanner";
    import AzRightClassify from "../components/assembly/AzRightClassify";
    export default {
        name: "dowork",
      components: {
        AzRightClassify,
        AzRightBanner, AzRightAzone, ElColorPickerDropdown, AzDorpDownMenuShow, AzAssemblyLeft}
    }
</script>

<style scoped>

</style>

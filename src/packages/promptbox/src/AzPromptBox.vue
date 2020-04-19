<template>
  <div class="content">
    <div class="dummy dummy-text">
      <p>
        <span class="tooltip tooltip-effect-4">
          <span class="tooltip-item">{{tooltiptext1}}</span>
          <span class="tooltip-content clearfix">
            <span class="tooltip-text">
              {{tooltip1}}
            </span>
          </span>
        </span><br><br><br><br><br><br>
        <span class="tooltip tooltip-effect-5">
          <span class="tooltip-item">{{tooltiptext2}}</span>
          <span class="tooltip-content clearfix">
            <span class="tooltip-text">
              {{tooltip2}}
            </span>
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  import "../../libs/jquery.min"

  export default {
    name: "AzPromptBox",
    props:{
      tooltiptext1:{
        type:String,
        default:''
      },
      tooltiptext2:{
        type:String,
        default:''
      },
      tooltip1:{
        type:String,
        default:''
      },
      tooltip2:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/promptbox.css";
</style>

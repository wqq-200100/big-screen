<template>
<!--左右两边头部的标题  -->
  <div>
    <div class="disbox">
      <div>
        <div class="fontsty">
          <slot name="headerleft"></slot>
        </div>
        <dv-decoration5 :dur="2" style="width:300px;height:40px;"/>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.fontsty {
  text-align: center;
}

.disbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

</style>

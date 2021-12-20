<template>
  <div class='v-popup'>
    <div class="v-popup__header">
      <span>Popup name</span>
      <span>
        <i class="material-icons">close</i>
      </span>
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button class="close_modal">Close</button>
      <button class="submit_btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .v-popup {
    padding: 16px;
    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit_btn{
      padding: 8px;
      color: #ffffff;
      background: #26ae68;
    }
    .close_modal {
      background: red;
      padding: 8px;
      color: #ffffff;
    }
  }
</style>
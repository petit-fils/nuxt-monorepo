<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style  scoped>
.button {
  border: none;
  padding: 12px 22px;
  background: rgb(33, 33, 33);
  color: rgb(225, 225, 225);
  border-radius: 8px;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  cursor: pointer;
}

.button:hover {
  background: rgb(51, 51, 51);
}
</style>
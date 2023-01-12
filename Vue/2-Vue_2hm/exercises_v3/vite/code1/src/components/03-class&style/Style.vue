<template>
  <div>
    <!-- <h3
      class="thin"
      :class="[isItalic ? 'italic' : '', isDelete ? 'delete' : '']"
    >
      MyStyle组件
    </h3>
    <button @click="isItalic = !isItalic">Toggole Italic</button>
    <button @click="isDelete = !isDelete">Toggole Delete</button> -->
    <h3 class="thin" :class="classObj">MyStyle组件</h3>
    <button @click="classObj.italic = !classObj.italic">Toggole Italic</button>
    <button @click="classObj.delete = !classObj.delete">Toggole Delete</button>
    <hr />
    <div
      :style="{
        color: active,
        fontSize: fsize + 'px',
        'background-color': bgcolor
      }"
    >
      栗子
    </div>
    <button @click="fsize += 1">+1</button>
    <button @click="fsize -= 1">-1</button>
  </div>
</template>

<script>
export default {
  name: 'MyStyle',
  data() {
    return {
      isItalic: true,
      isDelete: false,
      classObj: {
        italic: false,
        delete: false
      },
      active: 'red',
      fsize: 30,
      bgcolor: 'pink'
    }
  }
}
</script>

<style>
.thin {
  font-weight: 200;
}
.italic {
  font-style: italic;
}
.delete {
  text-decoration: line-through;
}
</style>

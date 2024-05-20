<script setup>
import { ref } from "vue";

const emit = defineEmits(["close", "renameFile"]);

const inputname = ref("");

function handleSubmit() {
  emit("renameFile", inputname.value);
}
</script>

<template>
  <div class="renameForm">
    <div id="blackout">
      <form id="form" @submit.prevent="handleSubmit">
        <div class="name">
          <label>Введите новое название файла</label>
          <input type="text" class="form-control" v-model="inputname" />
        </div>

        <button type="submit" class="btn btn-primary">Сохранить</button>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="$emit('close')"
        >
          Отмена
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.renameForm {
  z-index: 6;
  position: relative;
}

#blackout {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background-color: rgb(255, 255, 255);
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.name {
  margin-top: 30px;
}

input {
  display: block;
  margin: 5px auto 10px auto;
  width: 80%;
}

button {
  margin: 5px 20px;
}
</style>

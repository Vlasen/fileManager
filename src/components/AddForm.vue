<script setup>
import { ref } from "vue";

const emit = defineEmits(["close", "addFile"]);

const newFile = ref({
  name: "",
  size: "",
  format: "",
  file: null,
});

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    if (!newFile.value.name) {
      newFile.value.name = file.name.split(".")[0];
    }
    newFile.value.file = file;
    newFile.value.size = file.size;
    newFile.value.format = file.name.split(".")[1];
  }
}

function handleSubmit() {
  emit("addFile", newFile.value);
}
</script>

<template>
  <div class="addForm">
    <div id="blackout">
      <form id="form" @submit.prevent="handleSubmit">
        <div class="name">
          <label>Название файла (необязательно)</label>
          <input type="text" class="form-control" v-model="newFile.name" />
        </div>
        <div class="file">
          <label>Прикрепите файл</label>
          <input type="file" class="form-control" @change="handleFileChange" />
        </div>

        <button type="submit" class="btn btn-primary" id="addButton">
          Добавить
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          id="close_add_form"
          @click="$emit('close')"
        >
          Отмена
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.addForm {
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
#close_add_form,
addButton {
  margin: 20px;
  width: 100px;
}
</style>

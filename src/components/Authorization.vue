<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  user: Object,
});

const login = ref("");
const password = ref("");

const emit = defineEmits(["close"]);

alert('Тестовая учетная запись: логин - admin, пароль - 1234.');

function handleSubmit() {
  if (
    login.value === props.user.login &&
    password.value === props.user.password
  ) {
    emit("close");
  } else {
    alert("Неверный логин или пароль");
  }
}
</script>

<template>
  <div class="addForm">
    <div id="blackout">
      <form id="form" @submit.prevent="handleSubmit">
        <div>
          <label>Логин</label>
          <input
            type="text"
            class="form-control"
            placeholder="Логин"
            v-model="login"
          />
        </div>

        <div>
          <label>Пароль</label>
          <input
            type="password"
            class="form-control"
            placeholder="Пароль"
            v-model="password"
          />
        </div>

        <button type="submit" class="btn btn-primary" id="addButton">
          Войти
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
  background-color: rgba(255, 255, 255);
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
  padding: 14px;
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

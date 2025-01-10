<script setup>
import { ref } from "vue";

const emit = defineEmits(["showForm", "open-auth"]);

const isActiveUserButton = ref(false);

const showLogin = () => {
  isActiveUserButton.value = true;
};

const closeLoginBox = () => {
  isActiveUserButton.value = false;
};

function logout() {
  emit("open-auth");
}
</script>

<template>
  <header>
    <div class="content">
      <img height="30" class="m-3" src="../assets/caseButton.svg" alt="logo" />
      <span>File manager</span>
    </div>

    <div class="buttons">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="$emit('showForm')"
      >
        Добваить файл
      </button>

      <a
        class="icon-link"
        href="#"
        @click="logout"
        @mouseover="showLogin"
        @mouseleave="closeLoginBox"
      >
        <img class="login" src="../assets/authButton.svg" alt="auth" />
      </a>
    </div>
  </header>

  <div class="userLoginBox" v-if="isActiveUserButton">
    <div class="login">Логин</div>
    <small class="logout">Нажмите, чтобы выйти</small>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: x-large;
  font: 1.2rem "Fira Sans", sans-serif;
  font-weight: bold;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-bottom: solid;
  border-color: rgb(212, 212, 212);
  border-width: 1px;
  z-index: 5;
}

svg {
  margin: 18px;
  width: 30px;
  height: 23px;
}

button {
  margin: 20px;
}
.buttons {
  display: flex;
}

.userLoginBox {
  position: fixed;

  align-items: center;
  background-color: rgb(255, 255, 255, 1);
  width: 200px;
  height: 100px;
  right: 5px;
  top: 40px;
  z-index: 6;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.login {
  margin: 20px;
  font-weight: bold;
}

/* css формы добваления */

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
}

form {
  position: absolute;
  top: 30%;
  left: 20%;
  background-color: rgb(255, 255, 255);
  width: 600px;
  height: 270px;
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

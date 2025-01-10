<script setup>
import { ref, reactive } from "vue";

import Header from "./components/Header.vue";
import FileList from "./components/FileList.vue";
import AddForm from "./components/AddForm.vue";
import Authorization from "./components/Authorization.vue";
import RenameForm from "./components/RenameForm.vue";

const files = reactive([
  { name: "File1", size: 23, format: "pdf" },
  { name: "File2", size: 100, format: "docx" },
  { name: "File3", size: 75, format: "xlsx" },
  { name: "File4", size: 23, format: "pdf" },
  { name: "File5", size: 100, format: "docx" },
  { name: "File6", size: 75, format: "xlsx" },
  { name: "File7", size: 23, format: "pdf" },
  { name: "File8", size: 100, format: "docx" },
  { name: "File9", size: 75, format: "xlsx" },
  { name: "File10", size: 23, format: "pdf" },
  { name: "File11", size: 100, format: "docx" },
  { name: "File12", size: 75, format: "xlsx" },
  { name: "File13", size: 23, format: "pdf" },
  { name: "File14", size: 100, format: "docx" },
  { name: "File15", size: 75, format: "xlsx" },
]);

const user = {
  login: "admin",
  password: "1234",
};

const editmode = ref(false);
const isAddFormVisible = ref(false);
const isAuthModal = ref(true);

const currentFile = ref({});

const currentPage = ref(1);
const filesPerPage = ref(10);

files.map((i) => (i.id = getID()));

function getID() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function setFile(item) {
  currentFile.value = item;
  editmode.value = true;
}

function closeRenameForm() {
  editmode.value = false;
}

const showForm = () => {
  isAddFormVisible.value = true;
};

const closeForm = () => {
  isAddFormVisible.value = false;
};

const showAuthModal = () => {
  isAuthModal.value = true;
};

const closeAuthModal = () => {
  isAuthModal.value = false;
};

const addFile = (file) => {
  file.id = getID();
  if (file) {
    files.push(file);
  }
  closeForm();
};

function renameFile(name) {
  if (name) {
    currentFile.value.name = name;
  }
  closeRenameForm();
}

function getCurrentFiles() {
  const indexOfLastFile = currentPage.value * filesPerPage.value;
  const indexOfFirstFile = indexOfLastFile - filesPerPage.value;
  return files.slice(indexOfFirstFile, indexOfLastFile);
}

function changePage(pageNumber) {
  currentPage.value = pageNumber;
}
</script>

<template>
  <div>
    <Header @show-form="showForm" @open-auth="showAuthModal" />
    <div class="container">
      <div class="content">
        <FileList :files="getCurrentFiles()" @setFile="setFile" />

        <div>
          <button
            class="btn btn-primary rounded-3"
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
          >
            Previous
          </button>
          <span>{{ currentPage }}</span>
          <button
            class="btn btn-primary rounded-3"
            @click="changePage(currentPage + 1)"
            :disabled="currentPage * filesPerPage >= files.length"
          >
            Next
          </button>
        </div>
      </div>

      <RenameForm
        v-if="editmode"
        @renameFile="renameFile"
        @close="closeRenameForm"
      />

      <AddForm v-if="isAddFormVisible" @close="closeForm" @add-file="addFile" />

      <Authorization v-if="isAuthModal" :user="user" @close="closeAuthModal" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  height: 85%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
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

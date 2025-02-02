<script setup>
const props = defineProps({
  files: Array,
});

const emit = defineEmits(["setFile"]);

const setFile = (file) => {
  emit("setFile", file);
};
</script>

<template>
  <table class="table table-striped">
    <thead>
      <tr class="col">
        <th>Название</th>
        <th>Размер</th>
        <th>Формат</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="file in files" 
        :key="file.id">
          <td> {{ file.name }} </td>
          <td>{{ file.size }}</td>
          <td>{{ file.format }}</td>
          <td>
            <button 
              @click="setFile(file)" 
              class="btn btn-primary rounded-3">
              <img src="../assets/editButton.svg" alt="edit" />
            </button>
          </td>
        </tr>
    </tbody> 
    <div v-if="total > files.length">
      <button @click="loadMore">Load More</button>
    </div>
  </table>

</template>

<style scoped>
table {
  width: 95%;
}
</style>

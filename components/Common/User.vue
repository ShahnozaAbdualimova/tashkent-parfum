<template>
  <div>
    <button @click="fetchUser">Fetch User</button>
    <p>{{ user?.name }}</p>
  </div>
</template>

<script setup>
const user = ref();
const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  user.value = await response.json();
};
</script>

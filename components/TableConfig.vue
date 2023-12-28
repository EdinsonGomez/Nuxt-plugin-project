<template>
  <div class="configs__container">
    <h2>Headers</h2>
    <div class="headers__item" v-for="(header, index) in headers" :key="index">
      <PrimeInputGroup>
        <PrimeInputGroupAddon>Clave de columna: </PrimeInputGroupAddon>
        <PrimeInputText :value="header.key" @input="onUpdateHeader($event, index, 'key')" />
      </PrimeInputGroup>
      <PrimeInputGroup>
        <PrimeInputGroupAddon>Texto de columna: </PrimeInputGroupAddon>
        <PrimeInputText :value="header.value" @input="onUpdateHeader($event, index, 'value')"/>
      </PrimeInputGroup>
    </div>
    <PrimeButton label="Guardar" @click="onSaveHeaders" />
  </div>
</template>

<script setup>
  import tableConfig from '~/configData.json';

  const headers = ref([]);

  Object.keys(tableConfig.headers).forEach((key) => {
    headers.value.push({ key, value: tableConfig.headers[key]})
  });

  console.log(headers.value);

  const onUpdateHeader = (event, index, key) => {
    headers.value[index] = {
      ...headers.value[index],
      [key]: event.target.value
    }
  }

  const onSaveHeaders = () => {
    console.log(headers.value);
  }

</script>

<style scoped>
  .configs__container {
    padding: 0 50px;
  }
  .headers__item {
    display: flex;
    margin: 20px 0;
    column-gap: 20px;
    padding: 0 30px;
  }
</style>
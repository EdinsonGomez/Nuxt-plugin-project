<template>
  <div class="mainDiv">
    <PrimeCard>
      <template #title> 
        <slot name="card-title">
          Votacion Activa 
        </slot>
      </template>
      <template #content>
        <h3>{{ voteInfo.question }}</h3>
        <h4>Opción de Respuesta</h4>
        <h6 v-for="(value, index) in voteInfo.choices" :key="index">
          {{ value.id }}. {{ value.answer }}
        </h6>
      </template>
    </PrimeCard>
    <div class="card">
        <PrimeDataTable :value="results" tableStyle="min-width: 50rem">
            <slot name="Table-Cols">
              <PrimeColumn field="id" header="Id"></PrimeColumn>
              <PrimeColumn field="answer" header="Respuesta"></PrimeColumn>
              <PrimeColumn field="count" header="Personas"></PrimeColumn>
              <PrimeColumn field="porcent" header="Porcentaje"></PrimeColumn>
            </slot>
        </PrimeDataTable>
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  // import { dataService }  from '../service/dataService';
  const { data } = await useFetch('/api/voteInfo');
  
  const voteInfo = ref('');
  const results = ref();

  voteInfo.value = data.value;

  // onMounted(() => {
  //   voteInfo.value = dataService.getVoteInfo()
  //   dataService.getresults().then((data) => results.value = data)
  // })
</script>

<style>

.mainDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>
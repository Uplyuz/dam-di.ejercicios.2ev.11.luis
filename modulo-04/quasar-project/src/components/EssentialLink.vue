<template>
  <q-item
    clickable
    tag="router-link"
    :to="props.to"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
  },

  to: {
    type: String,
  },

  icon: {
    type: String,
  }
})
</script>

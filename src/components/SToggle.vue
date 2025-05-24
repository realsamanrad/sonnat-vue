<template>
  <div :class="sizeClass">
    <label :for="name" v-text="label" />
    <div class="px-2">
      <input :name type="checkbox" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const { disabled = false, size = 'md' } = defineProps<{
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  label?: string
  name: string
}>()

const sizeClass = computed(() => {
  return {
    sm: 's-btn-sm',
    md: 's-btn-md',
    lg: 's-btn-lg',
  }[size]
})
</script>

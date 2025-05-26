<template>
  <div>
    <label :for="inputId" v-text="label" />
    <div
      class="w-10.5 h-6 rounded-full bg-black-24 relative inline-flex items-center has-checked:bg-primary group transition duration-240"
    >
      <input
        :id="inputId"
        class="w-full h-full peer cursor-pointer opacity-0"
        type="checkbox"
        :disabled
      />
      <span
        class="absolute z-10 top-1/2 -translate-y-1/2 size-5 rounded-full bg-white transition-all duration-240 peer-checked:-translate-x-5 -translate-x-0.5 before:opacity-0 group-hover:before:opacity-100 pointer-events-none before:size-11 before:scale-0 before:bg-black/4 peer-checked:before:bg-primary/4 before:absolute before:rounded-full flex items-center justify-center before:transition-all before:duration-240 shadow-[0_2px_4px_rgba(0,0,0,0.24)] group-hover:before:scale-100 before:-z-10 group-active:peer-checked:before:bg-primary/8 group-active:before:bg-black/8 peer-focus-visible:before:opacity-100 peer-focus-visible:before:scale-100 peer-focus-visible:before:bg-black/12 peer-checked:peer-focus-visible:before:bg-primary/12"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useId } from 'vue'

const inputId = 'toggle-' + useId()

const { disabled = false, size = 'md' } = defineProps<{
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  label?: string
}>()

const sizeClass = computed(() => {
  return {
    sm: 's-toggle-sm',
    md: 's-toggle-md',
    lg: 's-toggle-lg',
  }[size]
})
</script>

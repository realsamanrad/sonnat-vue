<template>
  <div class="flex items-center" :class="sizeClass" role="button" :aria-disabled="disabled">
    <div
      class="group size-8 rounded-full ml-1 cursor-pointer relative flex items-center justify-center"
    >
      <input
        class="peer size-full cursor-pointer _appearance-none before:size-full before:bg-black/4 before:absolute before:rounded-full appearance-none before:opacity-0 before:scale-0 group-hover:before:scale-100 group-hover:before:opacity-100 before:transition checked:before:bg-primary/4 before:duration-240 focus-visible:before:bg-black/12 checked:focus-visible:before:bg-primary/12 focus-visible:before:opacity-100 focus-visible:before:scale-100 focus-visible:outline-0"
        type="radio"
        :id="inputId"
      />
      <span
        class="size-4 rounded-full border border-black/24 absolute peer-checked:border-primary/32 pointer-events-none after:bg-primary after:size-2 after:absolute after:rounded-full flex items-center justify-center after:scale-0 after:opacity-0 peer-checked:after:scale-100 peer-checked:after:opacity-100 after:transition after:duration-240"
      />
    </div>
    <label :for="inputId" class="text-sm text-neutral-800" v-text="label" />
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'

const inputId = 'radio-' + useId()

const { disabled = false, size = 'sm' } = defineProps<{
  disabled?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
}>()

const sizeClass = computed(() => {
  return {
    sm: 's-radio-sm',
    md: 's-radio-md',
    lg: 's-radio-lg',
  }[size]
})
</script>

<template>
  <div
    :class="sizeClass"
    class="inline-flex items-center gap-1 aria-disabled:cursor-not-allowed aria-disabled:[&>*]:pointer-events-none"
    :aria-disabled="disabled"
  >
    <label
      v-if="label"
      :for="inputId"
      v-text="label"
      class="text-black-87 in-aria-disabled:text-black-24"
    />
    <input
      :id="inputId"
      class="cursor-pointer appearance-none bg-black-24 rounded-full checked:bg-primary transition duration-240 before:absolute before:rounded-full before:bg-black/4 after:rounded-full after:absolute after:bg-white inline-flex items-center hover:before:opacity-100 before:opacity-0 before:transition before:duration-240 before:scale-0 hover:before:scale-100 after:transition after:duration-240 checked:before:bg-primary/4 active:before:bg-black/8 checked:active:before:bg-primary/8 focus-visible:before:bg-black/12 checked:focus-visible:before:bg-primary/12 focus-visible:outline-0 focus-visible:before:opacity-100 focus-visible:before:scale-100 after:shadow-[0_2px_4px_rgba(0,0,0,0.24)] disabled:bg-black-8 disabled:after:shadow-none checked:disabled:bg-black-12 mx-2"
      type="checkbox"
      :disabled
    />
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

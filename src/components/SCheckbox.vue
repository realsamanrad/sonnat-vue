<template>
  <div
    :aria-disabled="disabled"
    :class="sizeClass"
    class="inline-flex items-center gap-1"
    role="button"
  >
    <div class="inline-flex items-center justify-center">
      <input
        :id="inputId"
        :disabled
        class="relative before:size-full appearance-none cursor-pointer peer before:rounded-full before:bg-black/4 checked:before:bg-primary/4 before:opacity-0 before:absolute before:scale-0 before:transition before:duration-240 focus-visible:not-hover:before:bg-black/12 focus-visible:not-hover:checked:before:bg-primary/12 focus-visible:outline-0 focus-visible:not-hover:before:scale-100 focus-visible:before:opacity-100 disabled:pointer-events-none hover:before:scale-100 hover:before:opacity-100 group"
        type="checkbox"
      />
      <div
        class="rounded-xs ring ring-black-24 ring-inset absolute _pointer-events-none peer-checked:bg-primary peer-checked:ring-0 flex items-center justify-center peer-not-checked:[&>svg]:hidden peer-disabled:peer-checked:bg-black/12 peer-disabled:ring-black/12"
      >
        <inline-svg
          :src="CheckSVG"
          class="text-white rotate-45 transition-all duration-1000 peer-checked:rotate-0"
        />
      </div>
    </div>
    <label :for="inputId" class="text-black-87" v-text="label" />
  </div>
</template>

<script lang="ts" setup>
import { computed, useId } from 'vue'
import CheckSVG from '@/assets/icons/check.svg'

const { size = 'md', disabled = false } = defineProps<{
  label: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

const inputId = 'checkbox-' + useId()

const sizeClass = computed(() => {
  return {
    sm: 's-checkbox-sm',
    md: 's-checkbox-md',
    lg: 's-checkbox-lg',
  }[size]
})
</script>

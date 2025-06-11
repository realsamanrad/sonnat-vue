<template>
  <div :aria-invalid="showError" :class="sizeClass" class="flex flex-col w-full">
    <label
      v-if="label"
      :class="{ 'pointer-events-none': readonly }"
      :for="inputId"
      class="mb-2 font-medium text-black-87"
      v-text="label"
    />
    <textarea
      :id="inputId"
      v-model="model"
      :disabled
      :placeholder
      :readonly
      :required
      :rows
      :tabindex="readonly || disabled ? -1 : 0"
      class="transition duration-240 border rounded-sm border-black-24 not-in-aria-invalid:hover:border-black-48 outline-primary resize-none placeholder:text-black-32 text-black-87 disabled:border-black-12 disabled:text-black-24 read-only:pointer-events-none read-only:not-disabled:bg-black-4 in-aria-invalid:border-error in-aria-invalid:outline-error"
      @change="showError = false"
    />
    <p
      v-if="helperText || helperIcon || showError"
      class="pr-2 mt-1 text-black-56 in-aria-invalid:text-error"
    >
      <component :is="helperIcon" class="size-4" />
      <small
        v-if="helperText || showError"
        class="text-xs"
        v-text="showError ? error : helperText"
      />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useId, defineModel, computed, type Component, ref } from 'vue'

const inputId = 'textarea-' + useId()
const model = defineModel<string>({ default: '' })

const {
  disabled = false,
  size = 'md',
  readonly = false,
  required = false,
  rows = 4,
  error = undefined,
} = defineProps<{
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  name?: string
  readonly?: boolean
  label?: string
  required?: boolean
  helperText?: string
  helperIcon?: Component
  rows?: number
  error?: string
}>()

const showError = ref(!!error)

const sizeClass = computed(() => {
  return {
    sm: 's-textarea-sm',
    md: 's-textarea-md',
    lg: 's-textarea-lg',
  }[size]
})
</script>

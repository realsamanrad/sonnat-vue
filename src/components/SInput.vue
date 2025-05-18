<template>
  <div>
    <label :for="name" class="text-sm font-medium text-neutral-800 mb-2 block">
      {{ label }}
      <span v-if="required" class="text-error">*</span>
    </label>
    <div
      :class="[sizeClass]"
      class="rounded-sm border border-black/24 flex items-center hover:border-black/48 transition duration-240 focus-within:ring focus-within:ring-primary focus-within:ring-inset focus-within:!border-primary"
    >
      <inline-svg v-if="prependIcon" :src="prependIcon" class="size-4 text-black/32" />
      <input
        v-model.trim="model"
        :disabled
        :name
        :placeholder
        :readonly
        class="outline-none size-full mr-1 text-black/87"
      />
      <div class="flex items-center">
        <slot name="append" />
        <inline-svg v-if="appendIcon" :src="appendIcon" class="size-4 text-black/32 mr-1" />
      </div>
    </div>
    <div class="flex items-center mt-1 pr-2">
      <inline-svg v-if="helperIcon" :src="helperIcon" class="size-4 text-black/32 ml-1" />
      <span v-if="helperText" class="text-xs text-black/56" v-text="helperText" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const model = defineModel<string>({ default: '' })
const {
  disabled = false,
  variant = 'outlined',
  size = 'md',
  rounded = false,
  readonly = false,
  required = false,
} = defineProps<{
  placeholder?: string
  disabled?: boolean
  variant?: 'filled' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  name: string
  rounded?: boolean
  readonly?: boolean
  helperText?: string
  helperIcon?: string
  prependIcon?: string
  appendIcon?: string
  label?: string
  required?: boolean
}>()

const sizeClass = computed(() => {
  return {
    sm: 's-input-sm',
    md: 's-input-md',
    lg: 's-input-lg',
  }[size]
})
</script>

<template>
  <div :class="sizeClass">
    <label :for="name" class="text-sm font-medium text-black-64 mb-2 block">
      {{ label }}
      <span v-if="required" class="text-error">*</span>
    </label>
    <div
      :class="[
        {
          '!rounded-full': rounded,
        },
      ]"
      class="rounded-sm border border-black-24 flex items-center hover:border-black-48 transition duration-240 focus-within:ring focus-within:ring-primary focus-within:ring-inset focus-within:!border-primary has-disabled:pointer-events-none has-disabled:text-black-12 text-black-32"
    >
      <inline-svg v-if="prependIcon" :src="prependIcon" class="shrink-0" />
      <input
        v-model.trim="model"
        :disabled
        :name
        :placeholder
        :readonly
        class="outline-none size-full mr-1 text-black-64 disabled:text-black-32"
      />
      <div class="flex items-center">
        <slot name="append">
          <span class="text-nowrap text-black-32" v-text="appendText" />
        </slot>
        <inline-svg v-if="appendIcon" :src="appendIcon" class="" />
      </div>
    </div>
    <p class="flex items-center mt-1 px-2">
      <inline-svg v-if="helperIcon" :src="helperIcon" class="text-black-32 ml-1" />
      <span v-if="helperText" class="text-black-56" v-text="helperText" />
    </p>
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
  appendText?: string
}>()

const sizeClass = computed(() => {
  return {
    sm: 's-input-sm',
    md: 's-input-md',
    lg: 's-input-lg',
  }[size]
})
</script>

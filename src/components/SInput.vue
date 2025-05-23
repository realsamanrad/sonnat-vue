<template>
  <div :class="sizeClass">
    <label v-if="!floatLabel" :for="name" class="text-sm font-medium text-black-64 mb-2 block">
      {{ label }}
      <span v-if="required" class="text-error">*</span>
    </label>
    <div
      :class="[
        {
          '!rounded-full': rounded,
          'bg-black-4': readonly && !floatLabel,
        },
      ]"
      class="rounded-sm border border-black-24 flex items-center hover:border-black-48 transition duration-240 focus-within:ring focus-within:ring-primary focus-within:ring-inset focus-within:!border-primary has-disabled:pointer-events-none has-disabled:text-black-12 text-black-32 cursor-text relative has-disabled:border-black-12 has-[input:read-only]:pointer-events-none"
    >
      <inline-svg v-if="prependIcon" :src="prependIcon" class="shrink-0 z-10" />
      <input
        :required
        v-model.trim="model"
        :disabled
        :name
        :type="showPassword ? 'text' : type"
        :placeholder
        :readonly
        class="peer outline-none size-full mr-1 disabled:text-black-32 placeholder-black-32 text-black-87"
        :class="{ 'placeholder-transparent': floatLabel }"
      />
      <label
        v-if="floatLabel"
        class="absolute peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-placeholder-shown:top-1/2 -translate-y-1/2 top-0 transition-all pointer-events-none peer-placeholder-shown:text-black-32 peer-[:not(:placeholder-shown)]:text-black-64 peer-placeholder-shown:[&>span]:text-error-300"
      >
        {{ label }}
        <span v-if="required" class="text-error"> * </span>
      </label>
      <div class="flex items-center">
        <slot name="append">
          <span class="text-nowrap text-black-32" v-text="appendText" />
        </slot>
        <inline-svg
          role="button"
          class="cursor-pointer hover:text-black-48 transition duration-240"
          :class="{ 'text-primary': showPassword }"
          v-if="type === 'password'"
          :src="showPassword ? EyeSVG : EyeCrossSVG"
          @click="showPassword = !showPassword"
        />
        <inline-svg v-else-if="appendIcon" :src="appendIcon" />
      </div>
    </div>
    <p class="flex items-center mt-1 px-2">
      <inline-svg v-if="helperIcon" :src="helperIcon" class="text-black-32 ml-1" />
      <span v-if="helperText" class="text-black-56" v-text="helperText" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import EyeSVG from '@/assets/icons/eye.svg'
import EyeCrossSVG from '@/assets/icons/eye-cross.svg'

const model = defineModel<string>({ default: '' })
const {
  disabled = false,
  variant = 'outlined',
  size = 'md',
  rounded = false,
  readonly = false,
  required = false,
  type = 'text',
  floatLabel = false,
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
  floatLabel?: boolean
  type?: 'text' | 'number' | 'email' | 'password'
}>()

const showPassword = ref(false)

const sizeClass = computed(() => {
  return {
    sm: 's-input-sm',
    md: 's-input-md',
    lg: 's-input-lg',
  }[size]
})
</script>

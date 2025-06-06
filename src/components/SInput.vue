<template>
  <div :class="sizeClass">
    <label
      v-if="!floatLabel && label"
      :for="inputId"
      class="text-sm font-medium text-black-64 mb-2 block"
    >
      {{ label }}
      <span v-if="required" class="text-error">*</span>
    </label>
    <div
      :aria-invalid="showError ? true : undefined"
      :class="[
        _class[variant],
        {
          '!rounded-full': rounded,
          'bg-black-4': readonly && !floatLabel,
        },
      ]"
      class="rounded-sm flex items-center transition duration-240 focus-within:ring focus-within:ring-primary focus-within:ring-inset has-disabled:pointer-events-none cursor-text relative has-[input:read-only]:pointer-events-none text-black-32 aria-[invalid]:border-error aria-[invalid]:focus-within:ring-error aria-[invalid]:hover:border-error aria-[invalid]:text-error group peer"
      @click="inputRef?.focus()"
    >
      <component v-if="prependIcon" :is="prependIcon" class="shrink-0 z-10" />
      <input
        ref="inputRef"
        v-model.trim="model"
        :class="{ 'placeholder-transparent': floatLabel }"
        :disabled
        :name
        :id="inputId"
        :placeholder
        :readonly
        :required
        :type="showPassword ? 'text' : type"
        class="peer outline-none size-full mr-1 transition placeholder-black-32 text-black-87"
        @change="showError = false"
      />
      <label
        :for="inputId"
        v-if="floatLabel"
        class="absolute peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-placeholder-shown:top-1/2 -translate-y-1/2 top-0 transition-all pointer-events-none peer-placeholder-shown:text-black-32 peer-[:not(:placeholder-shown)]:text-black-64 peer-placeholder-shown:[&>span]:text-error-300 group-aria-[invalid]:peer-[:not(:placeholder-shown)]:text-error"
      >
        {{ label }}
        <span v-if="required" class="text-error"> * </span>
      </label>
      <div class="flex items-center">
        <slot name="append">
          <span class="text-nowrap" v-text="appendText" />
        </slot>
        <component
          v-if="type === 'password'"
          :class="{ 'text-primary': showPassword }"
          :is="showPassword ? EyeSVG : EyeCrossSVG"
          class="cursor-pointer hover:text-black-48 transition duration-240"
          role="button"
          @click="showPassword = !showPassword"
        />
        <component v-else-if="appendIcon" :is="appendIcon" />
      </div>
    </div>
    <p
      v-if="helperText || showError"
      class="flex items-center mt-1 px-2 peer-aria-[invalid]:[&>*]:text-error"
    >
      <component
        v-if="helperIcon || showError"
        :is="showError ? InfoCircleSVG : helperIcon"
        class="text-black-32 ml-1"
      />
      <small
        v-if="helperText || showError"
        class="text-black-56"
        v-text="showError ? error : helperText"
      />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { type Component, computed, ref, useId, useTemplateRef } from 'vue'
import EyeSVG from '@/assets/icons/eye.svg'
import EyeCrossSVG from '@/assets/icons/eye-cross.svg'
import InfoCircleSVG from '@/assets/icons/info-circle.svg'

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

const inputId = 'input-' + useId()

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
  error = undefined,
} = defineProps<{
  placeholder?: string
  disabled?: boolean
  variant?: 'filled' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  name?: string
  rounded?: boolean
  readonly?: boolean
  helperText?: string
  helperIcon?: Component
  prependIcon?: Component
  appendIcon?: Component
  label?: string
  required?: boolean
  appendText?: string
  floatLabel?: boolean
  type?: 'text' | 'number' | 'email' | 'password'
  error?: string
}>()

const showPassword = ref(false)

const showError = ref(!!error)

const sizeClass = computed(() => {
  return {
    sm: 's-input-sm',
    md: 's-input-md',
    lg: 's-input-lg',
  }[size]
})

const _class = {
  filled: 'bg-black-4 not-focus-within:hover:bg-black-8 focus-within:ring-2',
  outlined:
    'border border-black-24 not-focus-within:hover:border-black-48 focus-within:border-primary has-disabled:border-black-12 has-disabled:text-black-12 [&>input]:disabled:text-black-32',
}
</script>

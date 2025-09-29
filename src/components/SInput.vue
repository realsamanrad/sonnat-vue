<template>
  <div :class="sizeClass">
    <label
      v-if="!floatLabel && label"
      :for="inputId"
      class="text-sm font-medium text-gray-64 mb-2 block"
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
          'bg-gray-4': readonly && !floatLabel,
        },
      ]"
      class="rounded-sm flex items-center transition duration-240 focus-within:ring focus-within:ring-primary focus-within:ring-inset has-disabled:pointer-events-none cursor-text relative has-[input:read-only]:pointer-events-none text-gray-32 aria-[invalid]:border-error aria-[invalid]:focus-within:ring-error aria-[invalid]:hover:border-error aria-[invalid]:text-error group peer"
      @click="inputRef?.focus()"
    >
      <component :is="prependIcon" v-if="prependIcon" class="shrink-0 z-10" />
      <input
        :id="inputId"
        ref="input"
        v-model.trim="model"
        :class="{ 'placeholder-transparent': floatLabel }"
        :disabled
        :name
        :placeholder
        :readonly
        :required
        :type="showPassword ? 'text' : type"
        class="peer outline-none size-full mr-1 transition placeholder-gray-32 text-gray-87"
        @blur="emit('blur')"
        @change="handleChange"
        @focus="emit('focus')"
      />
      <label
        v-if="floatLabel"
        :for="inputId"
        class="absolute peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-placeholder-shown:top-1/2 -translate-y-1/2 top-0 transition-all pointer-events-none peer-placeholder-shown:text-gray-32 peer-[:not(:placeholder-shown)]:text-gray-64 peer-placeholder-shown:[&>span]:text-error-300 group-aria-[invalid]:peer-[:not(:placeholder-shown)]:text-error"
      >
        {{ label }}
        <span v-if="required" class="text-error"> * </span>
      </label>
      <div class="flex items-center">
        <slot name="append">
          <span class="text-nowrap" v-text="appendText" />
        </slot>
        <component
          :is="showPassword ? EyeSVG : EyeCrossSVG"
          v-if="type === 'password'"
          :class="{ 'text-primary': showPassword }"
          class="cursor-pointer hover:text-gray-48 transition duration-240"
          role="button"
          @click="showPassword = !showPassword"
        />
        <component :is="appendIcon" v-else-if="appendIcon" />
      </div>
    </div>
    <p
      v-if="helperText || showError"
      class="flex items-center mt-1 px-2 peer-aria-[invalid]:[&>*]:text-error"
    >
      <component
        :is="showError ? InfoCircleSVG : helperIcon"
        v-if="helperIcon || showError"
        class="text-gray-32 ml-1"
      />
      <small
        v-if="helperText || showError"
        class="text-gray-56"
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

const model = defineModel<string>({ default: '' })

const inputRef = useTemplateRef<HTMLInputElement>('input')
const inputId = 'input-' + useId()
const showPassword = ref(false)
const showError = ref(!!error)

const emit = defineEmits(['focus', 'blur', 'change'])

const _class = {
  filled: 'bg-gray-4 not-focus-within:hover:bg-gray-8 focus-within:ring-2',
  outlined:
    'border border-gray-24 not-focus-within:hover:border-gray-48 focus-within:border-primary has-disabled:border-gray-12 has-disabled:text-gray-12 [&>input]:disabled:text-gray-32',
}

const sizeClass = computed(() => {
  return {
    sm: 's-input-sm',
    md: 's-input-md',
    lg: 's-input-lg',
  }[size]
})

function handleChange() {
  showError.value = false
  emit('change')
}
</script>

<template>
  <button
    :class="[{ '!rounded-full': rounded || iconOnly }, sizeClass, _class[variant][color]]"
    class="rounded-sm font-medium transition cursor-pointer flex items-center justify-center duration-300 disabled:pointer-events-none w-fit focus-visible:outline-2 outline-primary outline-offset-1"
  >
    <STooltip v-if="tooltip" :label="tooltip" />
    <component v-if="iconOnly" :is="icon" />
    <template v-else>
      <component v-if="icon" :is="icon" />
      <slot>
        <span v-text="label" />
      </slot>
      <component v-if="trailingIcon" :is="trailingIcon" />
    </template>
  </button>
</template>

<script lang="ts" setup>
import { type Component, computed } from 'vue'
import STooltip from '@/components/STooltip.vue'

const {
  variant = 'filled',
  color = 'default',
  rounded = false,
  size = 'md',
  label,
  icon,
} = defineProps<{
  label?: string
  variant?: 'filled' | 'outlined' | 'inlined'
  color?: 'primary' | 'default' | 'warning' | 'error' | 'success' | 'info'
  rounded?: boolean
  trailingIcon?: Component
  icon?: Component
  size?: 'sm' | 'md' | 'lg'
  tooltip?: string
}>()

const sizeClass = computed(() => {
  return {
    sm: 's-btn-sm',
    md: 's-btn-md',
    lg: 's-btn-lg',
  }[size]
})

const iconOnly = computed(() => !label && icon)

const _class = {
  filled: {
    default:
      'bg-black/56 hover:bg-black/48 text-white active:bg-black/64 disabled:bg-black/12 disabled:text-black/24',
    primary:
      'bg-primary hover:bg-primary-400 text-white active:bg-primary-600 disabled:bg-primary/12 disabled:text-black/32',
    warning:
      'bg-warning hover:bg-warning-400 text-white active:bg-warning-600 disabled:bg-warning/12 disabled:text-black/32',
    error:
      'bg-error hover:bg-error-400 text-white active:bg-error-600 disabled:bg-error/12 disabled:text-black/32',
    success:
      'bg-success hover:bg-success-400 text-white active:bg-success-600 disabled:bg-success/12 disabled:text-black/32',
    info: 'bg-info hover:bg-info-400 text-white active:bg-info-600 disabled:bg-info/12 disabled:text-black/32',
  },
  outlined: {
    default:
      'border border-black/56 text-black/56 hover:bg-black/4 active:bg-black/12 disabled:text-black/32 disabled:border-black/12',
    primary:
      'border border-primary text-primary hover:bg-primary/4 active:bg-primary/12 disabled:text-primary-400/32 disabled:border-primary/12',
    warning:
      'border border-warning text-warning hover:bg-warning/4 active:bg-warning/12 disabled:text-warning-400/32 disabled:border-warning/12',
    error:
      'border border-error text-error hover:bg-error/4 active:bg-error/12 disabled:text-error-400/32 disabled:border-error/12',
    success:
      'border border-success text-success hover:bg-success/4 active:bg-success/12 disabled:text-success-400/32 disabled:border-success/12',
    info: 'border border-info text-info hover:bg-info/4 active:bg-info/12 disabled:text-info-400/32 disabled:border-info/12',
  },
  inlined: {
    default: 'text-black/56 hover:bg-black/4 active:bg-black/12 disabled:text-black/32',
    primary: 'text-primary hover:bg-primary/4 active:bg-primary/12 disabled:text-primary-400/32',
    warning: 'text-warning hover:bg-warning/4 active:bg-warning/12 disabled:text-warning-400/32',
    error: 'text-error hover:bg-error/4 active:bg-error/12 disabled:text-error-400/32',
    success: 'text-success hover:bg-success/4 active:bg-success/12 disabled:text-success-400/32',
    info: 'text-info hover:bg-info/4 active:bg-info/12 disabled:text-info-400/32',
  },
}
</script>

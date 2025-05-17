<template>
  <div
    :class="[_class[variant][color], dense ? 's-tag-dense' : 's-tag']"
    class="flex justify-center items-center rounded-sm w-fit px-2"
  >
    <inline-svg v-if="icon" :src="icon" class="size-4 ml-1 -mr-1" />
    <slot>
      <span v-text="label" />
    </slot>
    <button
      v-if="removable"
      class="h-full group cursor-pointer flex justify-center items-center -ml-1 mr-1"
    >
      <inline-svg
        :class="btnStateClass[color]"
        :src="CloseSVG"
        class="size-4 rounded-full transition duration-300"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import CloseSVG from '@/assets/icons/close.svg'

const {
  variant = 'filled',
  color = 'default',
  dense = false,
  removable = false,
} = defineProps<{
  label?: string
  variant?: 'filled' | 'outlined'
  color?: 'primary' | 'default' | 'warning' | 'error' | 'success' | 'info'
  dense?: boolean
  icon?: string
  removable?: boolean
}>()

const btnStateClass = {
  default: 'group-hover:bg-black/12 group-active:bg-black/24',
  primary: 'group-hover:bg-primary/12 group-active:bg-primary/24',
  warning: 'group-hover:bg-warning/12 group-active:bg-warning/24',
  error: 'group-hover:bg-error/12 group-active:bg-error/24',
  success: 'group-hover:bg-success/12 group-active:bg-success/24',
  info: 'group-hover:bg-info/12 group-active:bg-info/24',
}

const _class = {
  filled: {
    default: 'bg-black/4 text-black/56',
    primary: 'bg-primary/4 text-primary',
    warning: 'bg-warning/4 text-warning',
    error: 'bg-error/4 text-error',
    success: 'bg-success/4 text-success',
    info: 'bg-info/4 text-info',
  },
  outlined: {
    default: 'border border-black/12 text-black/56',
    primary: 'border border-primary/24 text-primary',
    warning: 'border border-warning/24 text-warning',
    error: 'border border-error/24 text-error',
    success: 'border border-success/24 text-success',
    info: 'border border-info/24 text-info',
  },
}

defineEmits(['remove'])
</script>

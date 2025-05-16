<template>
  <div
    class="flex justify-center items-center rounded-sm w-fit"
    :class="[_class[variant][color], dense ? 's-tag-dense' : 's-tag']"
  >
    <inline-svg class="size-4 ml-1 -mr-1" v-if="icon" :src="icon" />
    <slot>
      <span v-text="label" />
    </slot>
    <SButton
      v-if="removable"
      class="!size-4 mr-1 -ml-1"
      :color
      variant="inlined"
      :icon="CloseSVG"
      @click="$emit('remove')"
    />
  </div>
</template>

<script setup lang="ts">
import SButton from '@/components/SButton.vue'
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

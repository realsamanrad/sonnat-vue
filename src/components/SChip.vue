<template>
  <div
    role="button"
    :aria-disabled="disabled"
    class="rounded-sm flex items-center justify-center w-fit select-none transition duration-300"
    :class="[
      // _class[variant][color],
      sizeClass,

      {
        '!rounded-full': rounded,
        'cursor-pointer': behavior === 'selective' || behavior === 'interactive',
        'pointer-events-none': disabled,
        [interactiveClass[variant][color]]: behavior === 'interactive',
        [selectiveClass[selected ? 'true' : 'false'][variant][color]]: behavior === 'selective',
        [removableClass[variant][color]]: behavior === 'removable',
      },
    ]"
    @click="handleClick"
  >
    <inline-svg v-if="icon" :src="icon" />
    <slot>
      <span v-text="label" />
    </slot>
    <button
      v-if="behavior === 'removable'"
      class="h-full group cursor-pointer flex justify-center items-center"
    >
      <inline-svg
        class="size-4 rounded-full transition duration-300"
        :class="closeBtnClass"
        :src="CloseSVG"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CloseSVG from '@/assets/icons/close.svg'

const {
  variant = 'filled',
  color = 'default',
  rounded = false,
  size = 'md',
  behavior = 'interactive',
  disabled = false,
} = defineProps<{
  label?: string
  variant?: 'filled' | 'outlined'
  color?: 'primary' | 'default'
  rounded?: boolean
  trailingIcon?: string
  icon?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  behavior?: 'removable' | 'selective' | 'interactive'
}>()

const closeBtnClass = computed(() => {
  const colorMap: Record<string, string> = {
    default: 'group-hover:bg-black/12 group-active:bg-black/24',
    primary: 'group-hover:bg-primary/12 group-active:bg-primary/24',
  }
  return colorMap[color] || ''
})

const sizeClass = computed(() => {
  return {
    sm: 's-chip-sm',
    md: 's-chip-md',
    lg: 's-chip-lg',
  }[size]
})

const interactiveClass = {
  filled: {
    default: 'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24',
    primary: 'text-white bg-primary hover:bg-primary-400 active:bg-primary-600',
  },
  outlined: {
    default: 'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12',
    primary: 'text-primary border border-primary hover:bg-primary/12 active:bg-primary/24',
  },
}

const selectiveClass = {
  true: {
    filled: {
      default: 'text-white bg-black/56 hover:black/48 active:!bg-black/64',
      primary: 'text-white bg-primary hover:bg-primary-400 active:bg-primary-600',
    },
    outlined: {
      default:
        'text-black/56 border border-black/48 bg-black/4 hover:bg-black/12 active:bg-black/24',
      primary:
        'text-primary border border-primary bg-primary/4 hover:bg-primary/12 active:bg-primary/24',
    },
  },
  false: {
    filled: {
      default: 'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24',
      primary: 'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24',
    },
    outlined: {
      default: 'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12',
      primary: 'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12',
    },
  },
}

const removableClass = {
  filled: {
    default: 'text-black/56 bg-black/4',
    primary: 'text-white bg-primary',
  },
  outlined: {
    default: 'text-black/56 border border-black/12 bg-black/4',
    primary: 'text-primary border border-primary bg-primary/4',
  },
}

const selected = defineModel<boolean>('selected', {
  default: false,
})

function handleClick() {
  if (behavior === 'selective') {
    selected.value = !selected.value
  }
}

defineEmits(['remove'])
</script>

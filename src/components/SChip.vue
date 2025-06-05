<template>
  <div
    :aria-disabled="disabled"
    :class="[
      sizeClass,
      _class,
      {
        '!rounded-full': rounded,
        'cursor-pointer': behavior === 'selective' || behavior === 'interactive',
        'pointer-events-none': disabled,
      },
    ]"
    :role="behavior !== 'removable' ? 'button' : undefined"
    :tabindex="disabled || behavior === 'removable' ? -1 : 0"
    class="rounded-xs flex items-center justify-center w-fit select-none transition duration-300 focus-visible:outline-2 outline-offset-1 outline-primary"
    @click="handleClick"
  >
    <component v-if="icon" :is="icon" />
    <slot>
      <span v-text="label" />
    </slot>
    <button
      v-if="behavior === 'removable'"
      :class="btnStateClass[variant]"
      :tabindex="disabled ? -1 : 0"
      class="h-full group cursor-pointer flex justify-center items-center focus-visible:outline-0"
      @click="$emit('remove')"
    >
      <CloseSVG class="size-4 rounded-full transition duration-300" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { type Component, computed } from 'vue'
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
  icon?: Component
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  behavior?: 'removable' | 'selective' | 'interactive'
}>()

const selected = defineModel<boolean>('selected', {
  default: false,
})

const sizeClass = computed(() => {
  return {
    sm: 's-chip-sm',
    md: 's-chip-md',
    lg: 's-chip-lg',
  }[size]
})

const btnStateClass = {
  filled: 'hover:[&>svg]:bg-black/12 active:[&>svg]:bg-black/24 focus-visible:[&>svg]:bg-black/12',
  outlined:
    'hover:[&>svg]:bg-primary/12 active:[&>svg]:bg-primary/24 focus-visible:[&>svg]:bg-primary/12',
}

const interactiveClass = {
  filled: {
    default:
      'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-black/4 aria-disabled:text-black/24',
    primary:
      'text-white bg-primary hover:bg-primary-400 active:bg-primary-600 aria-disabled:bg-primary/8 aria-disabled:text-black/24',
  },
  outlined: {
    default:
      'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12 aria-disabled:border-black/12 aria-disabled:text-black/24',
    primary:
      'text-primary border border-primary hover:bg-primary/12 active:bg-primary/24 aria-disabled:border-primary/12 aria-disabled:text-primary/32',
  },
}

const selectiveClass = {
  true: {
    filled: {
      default:
        'text-white bg-black/56 hover:black/48 active:!bg-black/64 aria-disabled:bg-black/4 aria-disabled:text-black/24',
      primary:
        'text-white bg-primary hover:bg-primary-400 active:bg-primary-600 aria-disabled:bg-primary/8 aria-disabled:text-black/24',
    },
    outlined: {
      default:
        'text-black/56 border border-black/48 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-black/4 aria-disabled:text-black/24 aria-disabled:border-transparent',
      primary:
        'text-primary border border-primary bg-primary/8 hover:bg-primary/12 active:bg-primary/24 aria-disabled:bg-primary/8 aria-disabled:text-black/24 aria-disabled:border-transparent',
    },
  },
  false: {
    filled: {
      default:
        'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-black/4 aria-disabled:text-black/24',
      primary:
        'text-black/56 bg-black/4 hover:bg-black/12 active:bg-black/24 aria-disabled:bg-primary/8 aria-disabled:text-primary/32',
    },
    outlined: {
      default:
        'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12 aria-disabled:border-black/12 aria-disabled:text-black/24',
      primary:
        'text-black/56 border border-black/12 hover:bg-black/4 active:bg-black/12 aria-disabled:border-primary/12 aria-disabled:text-primary/32',
    },
  },
}

const removableClass = {
  filled: {
    default: 'text-black/56 bg-black/4 aria-disabled:text-black/24 aria-disabled:bg-black/4',
    primary: 'text-white bg-primary aria-disabled:text-black/24 aria-disabled:bg-primary/8',
  },
  outlined: {
    default:
      'text-black/56 border border-black/12 bg-black/4 aria-disabled:text-black/24 aria-disabled:border-black/12 aria-disabled:bg-transparent',
    primary:
      'text-primary border border-primary bg-primary/8 aria-disabled:text-primary/32 aria-disabled:border-primary/12 aria-disabled:bg-transparent',
  },
}

const _class = computed(() => {
  if (behavior === 'interactive') {
    return interactiveClass[variant][color]
  }
  if (behavior === 'selective') {
    return selectiveClass[selected.value ? 'true' : 'false'][variant][color]
  }
  return removableClass[variant][color]
})

function handleClick() {
  if (behavior === 'selective') {
    selected.value = !selected.value
  }
}

defineEmits(['remove'])
</script>

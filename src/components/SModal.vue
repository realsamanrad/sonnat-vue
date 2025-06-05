<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        ref="floatingRef"
        class="fixed inset-0 bg-black/48 flex items-center justify-center p-4 z-50"
        @click.self="handleClose"
        role="presentation"
        tabindex="0"
      >
        <div
          v-if="model"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          :aria-describedby="descriptionId"
          class="bg-white rounded-sm shadow-lg w-80 p-4"
          :data-open="model"
        >
          <h2 :id="titleId" v-text="title" />
          <div class="max-h-40 overflow-auto mt-4">
            <slot />
          </div>
          <div class="flex justify-end mt-4">
            <slot name="actions" />
            <SButton label="بستن" @click="model = false" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useId, watch } from 'vue'
import SButton from '@/components/SButton.vue'
import { onKeyStroke, tryOnMounted } from '@vueuse/core'
import { useElementStyle } from '@vueuse/motion'

const { persisted = false } = defineProps<{
  title: string
  persisted?: boolean
}>()

const titleId = `modal-title-${useId()}`
const descriptionId = `modal-description-${useId()}`

const model = defineModel<boolean>({ default: false })

let style: ReturnType<typeof useElementStyle>['style'] | null = null

tryOnMounted(() => {
  const { style: bodyStyle } = useElementStyle(document.body)
  style = bodyStyle

  // Apply the initial state if modal is already open on mount
  if (model.value) {
    style.height = '100vh'
    style.overflowY = 'hidden'
  }
})

// Watch `model` only after mounted
watch(model, (val) => {
  if (style) {
    if (val) {
      style.height = '100vh'
      style.overflowY = 'hidden'
    } else {
      style.overflowY = 'auto'
      style.height = 'auto'
    }
  }
})

function handleClose() {
  if (!persisted) {
    model.value = false
  }
}

onKeyStroke('Escape', () => handleClose())
</script>

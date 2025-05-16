<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-secondary-dark">Sonnat Vue Components</h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8">
      <!-- Buttons Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Buttons</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <s-button>Default Button</s-button>
            <s-button variant="secondary">Secondary Button</s-button>
          </div>
          <div class="flex gap-4">
            <s-button disabled>Disabled Button</s-button>
            <s-button>
              <template #prefix>
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </template>
              With Icon
            </s-button>
          </div>
        </div>
      </section>

      <!-- Inputs Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Inputs</h2>
        <div class="space-y-4 max-w-md">
          <s-input v-model="inputValue" placeholder="Type something..." />
          <s-input type="password" placeholder="Password" />
          <s-input disabled placeholder="Disabled input" />
        </div>
      </section>

      <!-- Select Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Select</h2>
        <div class="space-y-4 max-w-md">
          <s-select
            v-model="selectedOption"
            :options="selectOptions"
            placeholder="Choose an option"
          />
          <s-select
            disabled
            :options="selectOptions"
            placeholder="Disabled select"
          />
        </div>
      </section>

      <!-- Checkbox & Radio Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Checkbox & Radio</h2>
        <div class="space-y-6">
          <div class="space-y-2">
            <s-checkbox v-model="checkboxValue">Accept terms</s-checkbox>
            <s-checkbox disabled>Disabled checkbox</s-checkbox>
          </div>
          <div class="space-y-2">
            <s-radio
              v-model="radioValue"
              name="options"
              value="1"
            >Option 1</s-radio>
            <s-radio
              v-model="radioValue"
              name="options"
              value="2"
            >Option 2</s-radio>
            <s-radio
              disabled
              name="options"
              value="3"
            >Disabled option</s-radio>
          </div>
        </div>
      </section>

      <!-- Card Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <s-card>
            <template #header>
              <h3 class="text-lg font-medium">Basic Card</h3>
            </template>
            <p>This is a basic card with header and content.</p>
          </s-card>

          <s-card elevated>
            <template #header>
              <h3 class="text-lg font-medium">Elevated Card</h3>
            </template>
            <p>This is an elevated card with header and footer.</p>
            <template #footer>
              <s-button variant="secondary">Cancel</s-button>
              <s-button>Submit</s-button>
            </template>
          </s-card>
        </div>
      </section>

      <!-- Modal Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Modal</h2>
        <s-button @click="isModalOpen = true">Open Modal</s-button>
        <s-modal v-model="isModalOpen" title="Example Modal">
          <p>This is an example modal dialog with a title and footer actions.</p>
          <template #footer>
            <s-button variant="secondary" @click="isModalOpen = false">Cancel</s-button>
            <s-button @click="isModalOpen = false">Confirm</s-button>
          </template>
        </s-modal>
      </section>

      <!-- Tooltip Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Tooltips</h2>
        <div class="flex gap-4">
          <s-tooltip content="Top tooltip">
            <s-button>Hover me (Top)</s-button>
          </s-tooltip>
          <s-tooltip content="Right tooltip" placement="right">
            <s-button variant="secondary">Hover me (Right)</s-button>
          </s-tooltip>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const selectedOption = ref('')
const checkboxValue = ref(false)
const radioValue = ref('1')
const isModalOpen = ref(false)

const selectOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
]
</script> 
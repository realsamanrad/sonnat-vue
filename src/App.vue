<template>
  <div class="mr-10 mt-10 flex flex-col gap-6">
    <SButton :icon="HeartSVG" color="primary" size="md" variant="inlined" />
    <SBadge label="جدید" />
    <STag :icon="HeartSVG" color="success" label="محصولات" removable />
    <div class="flex gap-4 flex-wrap mb-12">
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        rounded
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        rounded
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        label="گران ترین"
        rounded
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        rounded
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        rounded
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        label="گران ترین"
        rounded
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="default"
        disabled
        label="ارزان‌ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="interactive"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />

      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        v-model:selected="selected"
        :icon="HeartSVG"
        behavior="selective"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />

      |

      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="default"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        disabled
        label="گران ترین"
        variant="filled"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="default"
        disabled
        label="گران ترین"
        variant="outlined"
      />
      <SChip
        :icon="HeartSVG"
        behavior="removable"
        color="primary"
        disabled
        label="گران ترین"
        variant="outlined"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SButton from '@/components/SButton.vue'
import SBadge from '@/components/SBadge.vue'
import STag from '@/components/STag.vue'
import SChip from '@/components/SChip.vue'
import HeartSVG from '@/assets/icons/heart.svg'
import { ref } from 'vue'

const selected = ref(true)
</script>

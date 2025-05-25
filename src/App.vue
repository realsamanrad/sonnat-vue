<template>
  <div class="mx-10 mt-10 flex flex-col gap-6">
    <div class="flex gap-4">
      <SSelect />
    </div>
    <div class="border p-2 w-fit mx-auto">
      <span>hover me</span>
      <STooltip label="این یک متن راهنما است" placement="top" />
    </div>
    <SRadio label="پرداخت در محل" name="test" />
    <SButton
      :icon="HeartSVG"
      label="سلامتی"
      color="primary"
      size="md"
      variant="filled"
      tooltip="سلامتی"
    />
    <SBadge label="جدید" />
    <div class="flex flex-wrap gap-4">
      <SToggle name="family" />
    </div>
    <div class="flex flex-col gap-4">
      <SInput
        v-model="text"
        :append-icon="HeartSVG"
        :helper-icon="HeartSVG"
        :prepend-icon="HeartSVG"
        append-text="تستی است"
        class=""
        error="لطفا به صورت صحیح وارد کنید."
        float-label
        helper-text="این یک متن راهنما است"
        label="نام خانوادگی"
        name="test2"
        placeholder="نام خانوادگی"
        required
        rounded
        size="lg"
        variant="outlined"
      />
      <SInput
        v-model="text"
        :append-icon="HeartSVG"
        :helper-icon="HeartSVG"
        :prepend-icon="HeartSVG"
        append-text="تستی است"
        class=""
        helper-text="این یک متن راهنما است"
        label="نام خانوادگی"
        name="test"
        placeholder="نام خانوادگی"
        required
        rounded
        size="sm"
      />
    </div>
    <div class="flex flex-wrap gap-3">
      <STag :icon="HeartSVG" color="success" label="محصولات" removable />
      <STag :icon="HeartSVG" color="success" label="محصولات" removable variant="outlined" />
      <STag :icon="HeartSVG" color="success" dense label="محصولات" removable />
      <STag :icon="HeartSVG" color="success" dense label="محصولات" removable variant="outlined" />
    </div>
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
import SRadio from '@/components/SRadio.vue'
import SInput from '@/components/SInput.vue'
import SToggle from '@/components/SToggle.vue'
import STooltip from '@/components/STooltip.vue'
import SSelect from '@/components/SSelect.vue'

const selected = ref(true)
const text = ref('نام')
</script>

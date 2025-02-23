<script setup lang="ts">
import type { RecipeResponses } from '~~/types/type'

defineProps<{
  data: RecipeResponses | undefined
}>()
</script>

<template>
  <div
    v-for="recipe in data?.recipes"
    :key="recipe.id"
    class="flex flex-col shadow rounded-md"
  >
    <NuxtImg
      :src="recipe.image"
      sizes="xs:100vw sm:50vw lg:400px"
      format="webp"
      densities="x1"
      alt="{{ recipe.name }}"
      class="rouded-t-md"
    />
    <div class="flex flex-col py-6 px-4 flex-1">
      <p class="text-xl lg:text-2xl font-semibold mb-2">
        {{ recipe.name }}
      </p>
      <div
        class="font-normal w-full •bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto"
      >
        <div class="flex items-center gap-1">
          <Icon name="material-symbols:alarm-on" style="color: #f79f1a" />
          <span>{{ recipe.cookTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon
            name="material-symbols:local-fire-department-rounded"
            style="color: #f79f1a"
          />
          <span>{{ recipe.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon
            name="material-symbols:family-star-sharp"
            style="color: #f79f1a"
          />
          <span>{{ recipe.rating }} </span>
        </div>
      </div>

      <Button
        label="Découvrir la recette"
        :to="`/recipes/${recipe.id}`"
      ></Button>
    </div>
  </div>
</template>

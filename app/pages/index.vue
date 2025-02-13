<script setup lang="ts">
import { type RecipeResponses } from '../../types/type'
// definePageMeta({
//   layout: 'login',
// })

const { data, error } = await useFetch<RecipeResponses>(
  'https://dummyjson.com/recipes/search?q=Margherita'
)
</script>

<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div
        class="container flex flex-col lg:flex-row items-center py-20 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <UButton to="#recipes" label="Browse Recipes" />
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            sizes="xs:100vw sm:667px"
            src="/nuxt-course-hero.png"
            format="webp"
            densities="x1"
            alt="assiette remplie de nourriture"
          />
        </div>
      </div>
    </section>
    <section id="recipes" class="py-20 container">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
      >
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
          </div>
        </div>
      </div>
      <!-- <div
        v-if="!error"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
      >
        <RecipeCard v-for="recipe in data?.recipes" :recipe="recipe" />
      </div>
      <p v-else class="text-xl">
        Opps, something went wrong. Please try again later
      </p> -->
    </section>
    <section class="bg-[#f1f1f1] py-20">
      <SignupForm />
    </section>
  </main>
</template>

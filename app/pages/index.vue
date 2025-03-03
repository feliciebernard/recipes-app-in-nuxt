<script setup lang="ts">
import RecipesList from './RecipesList.vue'

const fetchFromNotion = async () => {
  const res = await fetch('http://localhost:3000/api/notion')
  const data = await res.json()

  return data
}

const rows = await fetchFromNotion()

useSeoMeta({
  title: 'Nuxtcipes',
  description: 'Recipes for you to cook!',
  ogTitle: 'Nuxtcipes',
  ogDescription: 'Recipes for you to cook!',
  ogImage: '/nuxt-course-hero.png',
  ogUrl: '[og:url]',
  twitterTitle: 'Nuxtcipes',
  twitterDescription: 'Recipes for you to cook!',
  twitterImage: '/nuxt-course-hero.png',
  twitterCard: 'summary',
})
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
    <section class="py-20 container">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <!-- <div
        v-if="!error"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
      > -->
      <RecipesList :data="rows" />
      <ul>
        <li v-for="item in rows" :key="item.plain_text">
          <strong>{{ item.person_number }}</strong> -
          {{ item.title }}
          <div>{{ item.created_at }}</div>
        </li>
      </ul>
      <!-- </div> -->
      <!-- <p v-else class="text-xl">
        Quelque chose ne va pas... Essayez plus tard !
      </p> -->
    </section>
    <section class="bg-[#f1f1f1] py-20">
      <SignupForm />
    </section>
  </main>
</template>

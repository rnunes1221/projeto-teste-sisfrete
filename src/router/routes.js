const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'drinksByCategory', component: () => import('pages/DrinksByCategoryPage.vue') },
      { path: 'detailsByDrink', component: () => import('src/pages/DetailsByDrinkPage.vue') },
      { path: 'favoriteDrinks', component: () => import('src/pages/FavoriteDrinksPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

export default defineNuxtRouteMiddleware((to) => {
  console.log('langRegionValidator');
  const path = to.fullPath;

  if (!path.startsWith('/en')) {
    return navigateTo('/en');
  }

  return null;
});

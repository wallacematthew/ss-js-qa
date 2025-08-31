<template>
  <header class="site-header">
    <nav class="nav">
      <router-link class="brand" to="/">SS JS QA</router-link>
      <div class="links">
        <router-link to="/financial-aid">Financial Aid</router-link>
        <router-link to="/graduate-programs">Graduate Programs</router-link>
        <router-link to="/undergraduate-programs">Undergraduate Programs</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/search">Search</router-link>
      </div>
    </nav>
  </header>
  <main class="container">
    <RouterView />
  </main>
  <footer class="site-footer">
    <small>Demo app for testing SearchStax UI kit integration.</small>
  </footer>
</template>

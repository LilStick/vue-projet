<template>
  <div>
    <div x-data="{ navOpen: false }">
      <header x-show="!navOpen" class="bg-blue-900 p-4 text-white text-center">
        <a href="https://www.linkedin.com/" target="_blank" class="mx-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            alt="LinkedIn"
            class="w-4 h-4"
          />
        </a>
      </header>
    </div>

    <main class="max-w-4xl mx-auto p-4 text-center">
      <h1 class="text-3xl font-bold mb-4">
        Abderrahmane Bessalah - Etudiant Développeur
      </h1>
      <p class="mb-4">
        Je suis un étudiant en développement et en data à Efrei Paris, passionné
        par les nouvelles technologies et déterminé à construire une carrière
        réussie dans ce domaine en constante évolution.
      </p>

      <!-- Information about additional persons -->
      <div class="flex justify-around">
        <div>
          <h2 class="text-xl font-bold">Noé Le Roux</h2>
          <p>
            Je suis un étudiant en développement et en data à Efrei Paris,
            passionné par les nouvelles technologies et déterminé à construire
            une carrière réussie dans ce domaine en constante évolution
          </p>
        </div>
        <div>
          <h2 class="text-xl font-bold">Ilian Kherbouche</h2>
          <p>
            Je suis un étudiant en développement et en data à Efrei Paris,
            passionné par les nouvelles technologies et déterminé à construire
            une carrière réussie dans ce domaine en constante évolution
          </p>
        </div>
        <div>
          <h2 class="text-xl font-bold">Dorian Franot</h2>
          <p>
            Je suis un étudiant en développement et en data à Efrei Paris,
            passionné par les nouvelles technologies et déterminé à construire
            une carrière réussie dans ce domaine en constante évolution
          </p>
        </div>
      </div>
    </main>

    <footer class="bg-black text-white text-center p-4">
      <h2 class="text-2xl">Merci à vous</h2>
    </footer>
  </div>
</template>

<script>
export default {
  name: "QuiSommesNous",
};
</script>

<style scoped>
/* Copiez vos styles CSS ici */
</style>

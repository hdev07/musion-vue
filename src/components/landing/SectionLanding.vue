<script setup lang="ts"></script>

<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Estas son algunas de las ventajas que tiene usar MUSION
        </h2>

        <!-- <p class="mt-4 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.
        </p> -->
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          class="block rounded-xl border border-pink-500/10 p-8 hover:shadow-xl transition bg-secondary hover:border-pink-500/30 hover:shadow-pink-500/30"
        >
          <vue-feather type="map" stroke="#FF4081" size="2.5rem"></vue-feather>
          <h2 class="mt-4 text-xl font-bold text-white">
            Explora la Ciudad de México a través de un viaje cultural único
          </h2>

          <p class="mt-1 text-sm text-gray-300">
            Descubre la riqueza cultural de la Ciudad de México a través de un viaje único con
            Musion.
          </p>
        </a>

        <a
          class="block rounded-xl border border-pink-500/10 p-8 hover:shadow-xl transition bg-secondary hover:border-pink-500/30 hover:shadow-pink-500/30"
        >
          <vue-feather type="grid" stroke="#FF4081" size="2.5rem"></vue-feather>

          <h2 class="mt-4 text-xl font-bold text-white">
            Descubre la increíble diversidad de los museos de la Ciudad
          </h2>

          <p class="mt-1 text-sm text-gray-300">
            Sumérgete en la diversidad de los museos de la Ciudad de México con Musion. Desde arte
            clásico hasta ciencia y tecnología
          </p>
        </a>

        <a
          class="block rounded-xl border border-pink-500/10 p-8 hover:shadow-xl transition bg-secondary hover:border-pink-500/30 hover:shadow-pink-500/30"
        >
          <vue-feather type="image" stroke="#FF4081" size="2.5rem"></vue-feather>
          <h2 class="mt-4 text-xl font-bold text-white">
            Sumérgete en el mundo del arte y la historia de la Ciudad
          </h2>

          <p class="mt-1 text-sm text-gray-300">
            Explora exposiciones impresionantes, aprende sobre la historia de la ciudad y déjate
            sorprender por la belleza y el significado detrás de cada obra de arte.
          </p>
        </a>

        <a
          class="block rounded-xl border border-pink-500/10 p-8 hover:shadow-xl transition bg-secondary hover:border-pink-500/30 hover:shadow-pink-500/30"
        >
          <vue-feather type="shield" stroke="#FF4081" size="2.5rem"></vue-feather>

          <h2 class="mt-4 text-xl font-bold text-white">
            Musion te lleva de la mano a través de los museos más fascinantes de la Ciudad
          </h2>

          <p class="mt-1 text-sm text-gray-300">
            Deja que Musion te guíe a través de los museos más fascinantes de la Ciudad de México.
          </p>
        </a>

        <a
          class="block rounded-xl border border-pink-500/10 p-8 hover:shadow-xl transition bg-secondary hover:border-pink-500/30 hover:shadow-pink-500/30"
        >
          <vue-feather type="camera" stroke="#FF4081" size="2.5rem"></vue-feather>

          <h2 class="mt-4 text-xl font-bold text-white">
            Haz de tu visita a los museos de la Ciudad una experiencia inolvidable
          </h2>

          <p class="mt-1 text-sm text-gray-300">
            Descubre exposiciones impresionantes, participa en eventos especiales y crea recuerdos
            duraderos mientras exploras la cultura y el arte de la ciudad.
          </p>
        </a>

        <a
          class="block rounded-xl border border-pink-500/10 p-8 hover:shadow-xl transition bg-secondary hover:border-pink-500/30 hover:shadow-pink-500/30"
        >
          <vue-feather type="unlock" stroke="#FF4081" size="2.5rem"></vue-feather>

          <h2 class="mt-4 text-xl font-bold text-white">
            Musion: desbloquear la riqueza cultural de la Ciudad
          </h2>

          <p class="mt-1 text-sm text-gray-300">
            Nuestra aplicación web te brinda acceso a una amplia gama de museos, exposiciones y
            eventos culturales, permitiéndote sumergirte en la historia y la diversidad
          </p>
        </a>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-4 text-center">
        <a
          href="'https://app.musion.day/login'"
          class="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:shadow-xl focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:bg-transparent hover:text-white hover:shadow-pink-500/30"
        >
          Inicia sesion
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<template>
  <section class="bg-background text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </h2>

        <p class="mt-4 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="block rounded-xl border border-pink-500/10 bg-secondary p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/30"
        >
          <div class="flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-full object-cover"
            />

            <div>
              <div class="flex justify-center gap-0.5 text-primary">
                <vue-feather
                  v-for="index in 4"
                  :key="index"
                  type="star"
                  fill="#FF4081"
                  size="1rem"
                />
                <vue-feather type="star" stroke="#FF4081" size="1rem" fill="none" />
              </div>

              <p class="mt-1 text-lg font-medium text-white">Paul Starr</p>
            </div>
          </div>

          <p class="line-clamp-2 sm:line-clamp-none mt-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut
            provident sapiente repellendus.
          </p>
        </div>

        <div
          class="block rounded-xl border border-pink-500/10 bg-secondary p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/30"
        >
          <div class="flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-full object-cover"
            />

            <div>
              <div class="flex justify-center gap-0.5 text-primary">
                <vue-feather
                  v-for="index in 5"
                  :key="index"
                  type="star"
                  fill="#FF4081"
                  size="1rem"
                />
              </div>

              <p class="mt-1 text-lg font-medium text-white">Paul Starr</p>
            </div>
          </div>

          <p class="line-clamp-2 sm:line-clamp-none mt-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut
            provident sapiente repellendus.
          </p>
        </div>

        <div
          class="block rounded-xl border border-pink-500/10 bg-secondary p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/30"
        >
          <div class="flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-full object-cover"
            />

            <div>
              <div class="flex justify-center gap-0.5 text-primary">
                <vue-feather
                  v-for="index in 4"
                  :key="index"
                  type="star"
                  fill="#FF4081"
                  size="1rem"
                />
                <vue-feather type="star" stroke="#FF4081" size="1rem" fill="none" />
              </div>

              <p class="mt-1 text-lg font-medium text-white">Paul Starr</p>
            </div>
          </div>

          <p class="line-clamp-2 sm:line-clamp-none mt-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut
            provident sapiente repellendus.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

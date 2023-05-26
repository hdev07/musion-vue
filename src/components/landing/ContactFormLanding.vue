<script setup lang="ts"></script>

<template>
  <section class="bg-background">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <p class="max-w-xl text-lg text-white">
            At the same time, the fact that we are wholly owned and totally independent from
            manufacturer and other group control gives you confidence that we will only recommend
            what is right for you.
          </p>
        </div>

        <div class="rounded-lg bg-secondary p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Name</label>
              <input
                class="w-full rounded-lg bg-background p-3 text-sm text-white"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg p-3 text-sm bg-background text-white"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                  class="w-full rounded-lg p-3 text-sm bg-background text-white"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea
                class="w-full rounded-lg p-3 text-sm bg-background text-white"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div class="mt-4 flex justify-center">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(name: string) {
      if (name?.length >= 2) return true

      return 'Ingresa tu nombre.'
    },
    email(email: string) {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/i.test(email))
        return true

      return 'Ingresa un correo valido.'
    },
    comment(comment: string) {
      if (comment?.length >= 10) return true

      return 'Ingresa un mensaje.'
    }
  }
})

const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const comment = useField('comment')
const body = ref({
  name: name.value,
  telephone: phone.value,
  email: email.value,
  comment: comment.value
})
</script>
<template>
  <form>
    <v-text-field
      v-model="name.value.value"
      :error-messages="name.errorMessage.value"
      :loading="false"
      label="Nombre(s)*"
      color="primary"
      variant="outlined"
    />
    <div class="block sm:flex">
      <v-text-field
        v-model="phone.value.value"
        :error-messages="phone.errorMessage.value"
        label="Número de teléfono"
        :loading="false"
        type="tel"
        color="primary"
        variant="outlined"
        class="sm:mr-2 w-full"
      />

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        :loading="false"
        label="Correo*"
        color="primary"
        variant="outlined"
        class="sm:ml-2 w-full"
      />
    </div>
    <v-textarea
      v-model="comment.value.value"
      :error-messages="comment.errorMessage.value"
      :loading="false"
      label="Comentario*"
      color="primary"
      variant="outlined"
    />

    <div class="flex justify-center">
      <v-btn class="" color="primary" @click="handleSubmit"> Enviar comentarios </v-btn>
    </div>
    <!-- <v-btn @click="handleReset"> clear </v-btn> -->
  </form>
</template>

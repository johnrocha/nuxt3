<template>
  <section class="card-surface">
    <h2 class="font-display text-3xl font-bold text-slate-900">Envie sua mensagem</h2>
    <p class="mt-3 text-base leading-relaxed text-slate-600">
      Retornamos o contato com o time certo para o assunto selecionado.
    </p>

    <form class="mt-8 grid gap-6" @submit.prevent="submitForm">
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label class="label-field" for="nome">Nome*</label>
          <input id="nome" v-model="form.nome" class="input-field" type="text" autocomplete="name" />
          <p v-if="errors.nome" class="error-text">{{ errors.nome }}</p>
        </div>

        <div>
          <label class="label-field" for="email">E-mail*</label>
          <input id="email" v-model="form.email" class="input-field" type="email" autocomplete="email" />
          <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label class="label-field" for="telefone">Telefone*</label>
          <input id="telefone" v-model="form.telefone" class="input-field" type="tel" autocomplete="tel" />
          <p v-if="errors.telefone" class="error-text">{{ errors.telefone }}</p>
        </div>

        <div>
          <label class="label-field" for="assunto">Assunto*</label>
          <select id="assunto" v-model="form.assunto" class="input-field">
            <option v-for="option in subjectOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          <p v-if="errors.assunto" class="error-text">{{ errors.assunto }}</p>
        </div>
      </div>

      <div>
        <label class="label-field" for="origem">Onde nos encontrou?*</label>
        <select id="origem" v-model="form.origem" class="input-field">
          <option v-for="option in sourceOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
        <p v-if="errors.origem" class="error-text">{{ errors.origem }}</p>
      </div>

      <div>
        <label class="label-field" for="mensagem">Mensagem*</label>
        <textarea
          id="mensagem"
          v-model="form.mensagem"
          class="input-field min-h-[140px]"
          rows="5"
        />
        <p v-if="errors.mensagem" class="error-text">{{ errors.mensagem }}</p>
      </div>

      <p v-if="serverError" class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        {{ serverError }}
      </p>

      <p v-if="successProtocol" class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
        Recebemos sua mensagem com sucesso. Protocolo: <strong>{{ successProtocol }}</strong>.
      </p>

      <button class="btn-primary inline-flex w-fit items-center justify-center" type="submit" :disabled="isSending">
        <span v-if="isSending">Enviando...</span>
        <span v-else>Enviar mensagem</span>
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { sourceOptions, subjectOptions } from "~/data/site-content";
import type { SourceOption, SubjectOption } from "~/types/site";

interface ContactFormPayload {
  nome: string;
  email: string;
  telefone: string;
  assunto: SubjectOption;
  origem: SourceOption;
  mensagem: string;
}

interface ContactApiResponse {
  protocol: string;
  message: string;
}

const form = reactive<ContactFormPayload>({
  nome: "",
  email: "",
  telefone: "",
  assunto: subjectOptions[0],
  origem: sourceOptions[0],
  mensagem: "",
});

const errors = reactive<Partial<Record<keyof ContactFormPayload, string>>>({});
const isSending = ref(false);
const successProtocol = ref("");
const serverError = ref("");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resetErrors = () => {
  (Object.keys(errors) as Array<keyof ContactFormPayload>).forEach((key) => {
    delete errors[key];
  });
  serverError.value = "";
};

const validateForm = () => {
  resetErrors();

  if (!form.nome.trim()) {
    errors.nome = "Informe seu nome.";
  }

  if (!emailRegex.test(form.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!form.telefone.trim()) {
    errors.telefone = "Informe um telefone para contato.";
  }

  if (!subjectOptions.includes(form.assunto)) {
    errors.assunto = "Selecione um assunto válido.";
  }

  if (!sourceOptions.includes(form.origem)) {
    errors.origem = "Selecione como nos encontrou.";
  }

  if (!form.mensagem.trim()) {
    errors.mensagem = "A mensagem é obrigatória.";
  }

  return Object.keys(errors).length === 0;
};

const resetForm = () => {
  form.nome = "";
  form.email = "";
  form.telefone = "";
  form.assunto = subjectOptions[0];
  form.origem = sourceOptions[0];
  form.mensagem = "";
};

const submitForm = async () => {
  successProtocol.value = "";

  if (!validateForm()) {
    return;
  }

  isSending.value = true;

  try {
    const response = await $fetch<ContactApiResponse>("/api/contact", {
      method: "POST",
      body: {
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        assunto: form.assunto,
        origem: form.origem,
        mensagem: form.mensagem,
      },
    });

    successProtocol.value = response.protocol;
    resetForm();
    resetErrors();
  } catch (error: unknown) {
    const typedError = error as {
      data?: { message?: string; errors?: Partial<Record<keyof ContactFormPayload, string>> };
    };

    if (typedError.data?.errors) {
      Object.entries(typedError.data.errors).forEach(([field, message]) => {
        if (message) {
          errors[field as keyof ContactFormPayload] = message;
        }
      });
    }

    serverError.value = typedError.data?.message ?? "Não foi possível enviar sua mensagem agora.";
  } finally {
    isSending.value = false;
  }
};
</script>

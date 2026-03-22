export const SUBJECT_OPTIONS = ["CVM", "Varfarma", "Consultoria"] as const;
export const SOURCE_OPTIONS = [
  "Google",
  "Projeto desenvolvido por vocês",
  "Indicação",
  "Outro",
] as const;

export type ContactSubject = (typeof SUBJECT_OPTIONS)[number];
export type ContactSource = (typeof SOURCE_OPTIONS)[number];

export interface ContactPayload {
  nome: string;
  email: string;
  telefone: string;
  assunto: ContactSubject;
  origem: ContactSource;
  mensagem: string;
}

export interface ContactRecord extends ContactPayload {
  id: string;
  protocol: string;
  createdAt: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getString = (value: unknown) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
};

export const validateContactPayload = (body: unknown) => {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  const parsed = {
    nome: getString((body as Record<string, unknown>)?.nome),
    email: getString((body as Record<string, unknown>)?.email),
    telefone: getString((body as Record<string, unknown>)?.telefone),
    assunto: getString((body as Record<string, unknown>)?.assunto),
    origem: getString((body as Record<string, unknown>)?.origem),
    mensagem: getString((body as Record<string, unknown>)?.mensagem),
  };

  if (!parsed.nome) {
    errors.nome = "Nome é obrigatório.";
  }

  if (!parsed.email || !emailRegex.test(parsed.email)) {
    errors.email = "E-mail inválido.";
  }

  if (!parsed.telefone) {
    errors.telefone = "Telefone é obrigatório.";
  }

  if (!SUBJECT_OPTIONS.includes(parsed.assunto as ContactSubject)) {
    errors.assunto = "Assunto inválido.";
  }

  if (!SOURCE_OPTIONS.includes(parsed.origem as ContactSource)) {
    errors.origem = "Origem inválida.";
  }

  if (!parsed.mensagem) {
    errors.mensagem = "Mensagem é obrigatória.";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false as const, errors };
  }

  const payload: ContactPayload = {
    nome: parsed.nome,
    email: parsed.email,
    telefone: parsed.telefone,
    assunto: parsed.assunto as ContactSubject,
    origem: parsed.origem as ContactSource,
    mensagem: parsed.mensagem,
  };

  return { valid: true as const, payload };
};

export const generateProtocol = () => {
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
  const randomSuffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `INSP-${timestamp}-${randomSuffix}`;
};

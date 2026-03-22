import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { ContactRecord } from "../utils/contact";
import { generateProtocol, validateContactPayload } from "../utils/contact";

const contactsFilePath = join(process.cwd(), "server", "data", "contacts.json");

const readContactRecords = async () => {
  try {
    const rawContent = await readFile(contactsFilePath, "utf8");
    const parsed = JSON.parse(rawContent);

    if (Array.isArray(parsed)) {
      return parsed as ContactRecord[];
    }

    return [];
  } catch {
    return [];
  }
};

const writeContactRecords = async (records: ContactRecord[]) => {
  await mkdir(dirname(contactsFilePath), { recursive: true });
  await writeFile(contactsFilePath, JSON.stringify(records, null, 2), "utf8");
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const validation = validateContactPayload(body);

  if (!validation.valid) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      data: {
        message: "Não foi possível enviar. Revise os campos obrigatórios.",
        errors: validation.errors,
      },
    });
  }

  const protocol = generateProtocol();
  const record: ContactRecord = {
    id: randomUUID(),
    protocol,
    createdAt: new Date().toISOString(),
    ...validation.payload,
  };

  const currentRecords = await readContactRecords();
  currentRecords.unshift(record);
  await writeContactRecords(currentRecords);

  setResponseStatus(event, 201);

  return {
    protocol,
    message: "Contato registrado com sucesso.",
  };
});

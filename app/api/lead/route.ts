import { NextResponse } from "next/server";

type LeadPayload = {
  nome?: string;
  restaurante?: string;
  telefone?: string;
  faturamento?: string;
  tipo?: string;
};

export async function POST(req: Request) {
  let data: LeadPayload;
  try {
    data = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { error: "JSON inválido." },
      { status: 400 },
    );
  }

  const required: Array<keyof LeadPayload> = [
    "nome",
    "restaurante",
    "telefone",
    "faturamento",
    "tipo",
  ];
  const missing = required.filter((k) => !data[k] || String(data[k]).trim() === "");
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Campos obrigatórios: ${missing.join(", ")}.` },
      { status: 422 },
    );
  }

  // TODO: integrar com CRM / planilha / Supabase.
  // Por ora, apenas registra no console do servidor.
  console.log("[Fluxa lead]", {
    at: new Date().toISOString(),
    ...data,
  });

  return NextResponse.json({ ok: true });
}

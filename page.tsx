import { getAula, aulas } from "@/lib/dados";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return aulas.map((aula) => ({
    slug: aula.slug,
  }));
}

export default function AulaPage({ params }: { params: { slug: string } }) {
  const aula = getAula(params.slug);

  if (!aula) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <span className="text-primary font-semibold text-sm">{aula.modulo}</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">{aula.titulo}</h1>
      </div>
      <div className="prose prose-lg max-w-none prose-slate" dangerouslySetInnerHTML={{ __html: aula.conteudo }} />
    </div>
  );
}
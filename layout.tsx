import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { aulas } from "@/lib/dados";
import { BookOpen, Code2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMaster - Plataforma de Ensino",
  description: "Aprenda do HTML ao Banco de Dados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Agrupar aulas por módulo
  const modulos = Array.from(new Set(aulas.map((a) => a.modulo)));

  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex min-h-screen`}>
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 fixed h-full overflow-y-auto hidden md:block">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-xl font-bold text-primary flex items-center gap-2">
              <Code2 /> DevMaster
            </h1>
          </div>
          <nav className="p-4">
            {modulos.map((modulo) => (
              <div key={modulo} className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {modulo}
                </h3>
                <ul className="space-y-2">
                  {aulas.filter(a => a.modulo === modulo).map((aula) => (
                    <li key={aula.slug}>
                      <Link href={`/aula/${aula.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 p-2 rounded transition-colors">
                        <BookOpen size={16} />
                        {aula.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-8">{children}</main>
      </body>
    </html>
  );
}
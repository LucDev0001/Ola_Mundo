const aulas = [
    {
      slug: "introducao-html",
      titulo: "1. O que é HTML?",
      modulo: "Fundamentos Web",
      conteudo: `
        <h2>A Estrutura da Web</h2>
        <p>HTML (HyperText Markup Language) é o bloco de construção mais básico da Web. Ele define o significado e a estrutura do conteúdo da web.</p>
        <h3>Exemplo Prático</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
  &lt;html&gt;
    &lt;body&gt;
      &lt;h1&gt;Olá Mundo&lt;/h1&gt;
    &lt;/body&gt;
  &lt;/html&gt;</code></pre>
      `
    },
    {
      slug: "estilizando-css",
      titulo: "2. Estilizando com CSS",
      modulo: "Fundamentos Web",
      conteudo: `
        <h2>Dando Vida ao Site</h2>
        <p>CSS (Cascading Style Sheets) é usado para estilizar e criar layout de páginas da Web.</p>
        <pre><code>body { background-color: blue; }</code></pre>
      `
    },
    {
      slug: "interatividade-js",
      titulo: "3. Interatividade com JS",
      modulo: "Programação",
      conteudo: `
        <h2>Lógica no Navegador</h2>
        <p>JavaScript é uma linguagem de programação que permite implementar itens complexos em páginas web.</p>
      `
    },
    {
      slug: "configurando-banco-dados",
      titulo: "4. Configurando Banco de Dados",
      modulo: "Backend & Infra",
      conteudo: `
        <h2>Conectando ao Mundo Real</h2>
        <p>Para criar um sistema completo, precisamos persistir dados. Vamos usar o PostgreSQL.</p>
        <h3>Passo 1: Instalação</h3>
        <p>Você pode usar o Docker para subir um banco rapidamente:</p>
        <pre><code>docker run --name meu-postgres -e POSTGRES_PASSWORD=minhasenha -d postgres</code></pre>
        <h3>Passo 2: Conexão com Node.js</h3>
        <p>Utilize bibliotecas como 'pg' ou ORMs como 'Prisma'.</p>
      `
    }
  ];
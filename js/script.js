document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    loadAula();
});

function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    // Agrupar aulas por módulo
    const modulos = {};
    aulas.forEach(aula => {
        if (!modulos[aula.modulo]) {
            modulos[aula.modulo] = [];
        }
        modulos[aula.modulo].push(aula);
    });

    // Gerar HTML
    let html = '';
    for (const [nomeModulo, listaAulas] of Object.entries(modulos)) {
        html += `
            <div class="mb-6">
                <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 pl-2">
                    ${nomeModulo}
                </h3>
                <ul class="space-y-1">
                    ${listaAulas.map(aula => `
                        <li>
                            <a href="aula.html?slug=${aula.slug}" 
                               class="block px-2 py-2 text-sm text-slate-600 hover:text-primary hover:bg-blue-50 rounded transition-colors ${window.location.search.includes(aula.slug) ? 'bg-blue-50 text-primary font-medium' : ''}">
                                ${aula.titulo}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    nav.innerHTML = html;
}

function loadAula() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    
    // Se não tiver slug, pega a primeira aula
    const aula = slug ? aulas.find(a => a.slug === slug) : aulas[0];

    if (aula) {
        document.getElementById('aula-modulo').textContent = aula.modulo;
        document.getElementById('aula-titulo').textContent = aula.titulo;
        document.getElementById('aula-conteudo').innerHTML = aula.conteudo;
        document.title = `${aula.titulo} - DevMaster`;
    }
}
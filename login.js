// ── Lógica de Login AcquaSafe ──────────────────────────────────────────

// Credenciais de teste (Substitua por uma API real futuramente)
const USUARIOS_TESTE = [
    { login: 'usuario@email.com', senha: '123', nome: 'Usuário Comum' },
    { login: '12345678900', senha: '123', nome: 'Ana Paula' }
];

function handleLogin(event) {
    event.preventDefault();
    
    const login = document.getElementById('login-usuario').value.trim();
    const senha = document.getElementById('login-senha').value;
    const btnText = document.getElementById('btn-text');
    
    // Feedback visual de carregamento
    const originalText = btnText.textContent;
    btnText.textContent = 'Verificando...';
    
    setTimeout(() => {
        // Verifica se é um usuário comum
        const usuario = USUARIOS_TESTE.find(u => u.login === login && u.senha === senha);
        
        if (usuario) {
            // Login de usuário comum bem-sucedido
            sessionStorage.setItem('usuarioLogado', 'true');
            sessionStorage.setItem('nomeUsuario', usuario.nome);
            window.location.href = 'dashboard.html'; // Redireciona para o painel do usuário
        } else {
            // Se não for usuário comum, verifica se é admin (opcional se quiser login unificado)
            // Mas o ideal é que o admin use a página login-admin.html
            
            alert('Usuário ou senha incorretos.');
            btnText.textContent = originalText;
        }
    }, 800);
}

// Inicializa ícones Lucide
if (window.lucide) {
    lucide.createIcons();
}
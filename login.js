// ── Lógica de Login AcquaSafe ──────────────────────────────────────────

// Credenciais de teste
const USUARIOS_TESTE = [
    { login: 'usuario@email.com', senha: '123', nome: 'Usuário Comum' },
    { login: '12345678900', senha: '123', nome: 'Ana Paula' }
];

function handleLogin(event) {
    event.preventDefault();
    
    const loginInput = document.getElementById('login-usuario');
    const senhaInput = document.getElementById('login-senha');
    const btnText    = document.getElementById('btn-text');
    
    const login = loginInput.value.trim();
    const senha = senhaInput.value;
    
    // Feedback visual
    const originalText = btnText.textContent;
    btnText.textContent = 'Verificando...';
    
    setTimeout(() => {
        // Validação estrita: só entra se o login E a senha coincidirem com a lista
        const usuario = USUARIOS_TESTE.find(u => u.login === login && u.senha === senha);
        
        if (usuario) {
            // Login de usuário comum
            sessionStorage.setItem('usuarioLogado', 'true');
            sessionStorage.setItem('nomeUsuario', usuario.nome);
            window.location.href = 'dashboard.html'; 
        } else {
            // Erro de login
            alert('Usuário ou senha incorretos.');
            btnText.textContent = originalText;
            senhaInput.value = '';
            senhaInput.focus();
        }
    }, 600);
}

// Inicializa ícones Lucide
if (window.lucide) {
    lucide.createIcons();
}
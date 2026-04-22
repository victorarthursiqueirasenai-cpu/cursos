document.addEventListener("DOMContentLoaded", () => {
    
    // Lógica para formatar o CPF automaticamente
    const inputCpf = document.getElementById('cpf');

    inputCpf.addEventListener('input', function(e) {
        let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
        
        // Adiciona os pontos e o traço conforme o usuário digita
        if (valor.length > 3 && valor.length <= 6) {
            valor = valor.replace(/(\d{3})(\d+)/, '$1.$2');
        } else if (valor.length > 6 && valor.length <= 9) {
            valor = valor.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
        } else if (valor.length > 9) {
            valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        }
        
        e.target.value = valor;
    });

    // Simulação do clique no botão de entrar
    const formLogin = document.getElementById('form-login');
    
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que a página recarregue
        
        const cpfDigitado = inputCpf.value;
        const senhaDigitada = document.getElementById('senha').value;

        // Simulação simples de verificação
        if(cpfDigitado.length === 14 && senhaDigitada.length > 0) {
            alert("Login realizado com sucesso! Redirecionando para o Feed...");
            
            // Redireciona o usuário para a página inicial (Feed)
            window.location.href = "index.html"; 
        } else {
            alert("Por favor, preencha o CPF corretamente e insira sua senha.");
        }
    });
});
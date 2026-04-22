document.addEventListener("DOMContentLoaded", () => {
    
    const formDenuncia = document.getElementById("form-denuncia");

    formDenuncia.addEventListener("submit", function(e) {
        e.preventDefault(); // Impede o envio padrão para podermos validar primeiro

        // Captura os valores digitados
        const alunoDenunciado = document.getElementById("aluno-denunciado").value.trim();
        const motivo = document.getElementById("motivo").value;
        const descricao = document.getElementById("descricao").value.trim();

        // Verificação extra de segurança (embora o HTML já tenha o 'required')
        if (alunoDenunciado === "" || motivo === "" || descricao === "") {
            alert("⚠️ Por favor, preencha todos os campos obrigatórios para que a coordenação possa analisar o caso.");
            return;
        }

        if (descricao.length < 20) {
            alert("⚠️ Por favor, forneça mais detalhes na descrição (mínimo de 20 caracteres) para entendermos o que houve.");
            return;
        }

        // Simulação de envio com sucesso
        alert(`🚨 Denúncia registrada com sucesso!\n\nO usuário "${alunoDenunciado}" será investigado pela coordenação. Obrigado por ajudar a manter o TrocaTech seguro.`);
        
        // Limpa o formulário após o envio
        formDenuncia.reset();
        
        // Redireciona de volta para o Feed
        window.location.href = "index.html";
    });
});
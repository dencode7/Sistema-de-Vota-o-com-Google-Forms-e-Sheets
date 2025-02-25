# Sistema de Votação com Google Forms e Sheets

Este projeto permite criar um sistema de votação usando Google Forms para coletar votos, Google Sheets para armazenar os dados e Google Apps Script para processar e exibir os resultados em tempo real.

## 🚀 Funcionalidades

- **Coleta de Votos**: Utiliza Google Forms para receber votos.
- **Armazenamento**: Salva as respostas em uma planilha do Google Sheets.
- **Contagem Automática**: Processa os votos e calcula os resultados.
- **Resultados em Tempo Real**: Exibe os resultados em uma página HTML atualizável.

## 📋 Pré-requisitos

- Uma conta do Google com acesso ao Google Forms, Google Sheets e Google Apps Script.
- Um formulário do Google Forms configurado com uma pergunta de múltipla escolha.
- Uma planilha do Google Sheets vinculada ao formulário.

## ⚙️ Configuração

1. **Google Forms**:
   - Crie um formulário com uma pergunta de múltipla escolha.
   - No menu de respostas, clique no ícone do Google Sheets para criar uma planilha vinculada.

2. **Google Apps Script**:
   - Abra o Google Sheets vinculado ao Form.
   - Vá em Extensões > Apps Script.
   - Cole o código fornecido no repositório.
   - Salve o projeto.

3. **Publicar como Aplicação Web**:
   - No menu do Apps Script, vá em `Implantar > Nova implantação`.
   - Escolha `Tipo de implantação > Aplicação Web`.
   - Defina:
     - **Executar como**: "Eu mesmo".
     - **Quem tem acesso**: "Qualquer pessoa" (se quiser público) ou "Apenas você".
   - Clique em `Implantar`.

4. **Acessar Resultados**:
   - Execute a função `setupWebApp` no Apps Script.
   - Copie a URL gerada no Log e acesse no navegador.

## 📄 Estrutura do Código

- `getVoteResults`: Contabiliza os votos a partir da planilha.
- `doGet`: Gera a página HTML com os resultados.
- `setupWebApp`: Configura a aplicação web e gera a URL de acesso.

## 📧 Exemplo de Página HTML

A página gerada contém:
- Título: `Resultados da Votação`
- Tabela com as opções de voto e a contagem.
- Link para atualizar a página.

## 📜 Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 💡 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato:
- E-mail: danielcguimaraes.03@gmail.com
- GitHub: [@dencode7](https://github.com/dencode7)

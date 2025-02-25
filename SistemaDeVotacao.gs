// Função para contar os votos a partir da planilha
function getVoteResults() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Respostas ao Formulário 1"); // Altere para o nome da sua aba
  const data = sheet.getDataRange().getValues();
  const votes = {};

  // Ignora o cabeçalho (primeira linha)
  for (let i = 1; i < data.length; i++) {
    const vote = data[i][1]; // Supondo que a coluna B contém os votos
    if (votes[vote]) {
      votes[vote]++;
    } else {
      votes[vote] = 1;
    }
  }

  return votes;
}

// Função para gerar a página HTML com os resultados
function doGet() {
  const votes = getVoteResults();
  let htmlOutput = `
    <html>
      <head>
        <title>Resultados da Votação</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
            color: #333;
          }
          h1 {
            color: #4CAF50;
            text-align: center;
          }
          table {
            width: 60%;
            margin: 20px auto;
            border-collapse: collapse;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: #4CAF50;
            color: white;
          }
          tr:hover {
            background-color: #f1f1f1;
          }
          a {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: #4CAF50;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Resultados da Votação</h1>
        <table>
          <tr>
            <th>Opção</th>
            <th>Votos</th>
          </tr>
  `;

  // Adiciona cada opção e sua contagem à tabela
  for (const [option, count] of Object.entries(votes)) {
    htmlOutput += `
      <tr>
        <td>${option}</td>
        <td>${count}</td>
      </tr>
    `;
  }

  htmlOutput += `
        </table>
        <a href="${ScriptApp.getService().getUrl()}">Atualizar Resultados</a>
      </body>
    </html>
  `;

  return HtmlService.createHtmlOutput(htmlOutput);
}

// Função para configurar a aplicação web e gerar a URL
function setupWebApp() {
  const scriptId = ScriptApp.getScriptId();
  const url = `https://script.google.com/macros/s/${scriptId}/exec`;
  Logger.log(`Acesse a aplicação web em: ${url}`);
}

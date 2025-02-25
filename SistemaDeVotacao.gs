// Código para contabilizar votos e exibir resultados
function getVoteResults() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Respostas ao Formulário 1"); // Altere para o nome da sua aba
  const data = sheet.getDataRange().getValues();
  const votes = {};

  // Ignora o cabeçalho
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

// Função para exibir os resultados em uma página HTML
function doGet() {
  const votes = getVoteResults();
  let htmlOutput = `
    <html>
      <head>
        <title>Resultados da Votação</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { color: #4CAF50; }
          table { width: 50%; border-collapse: collapse; }
          th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background-color: #f2f2f2; }
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
        <p><a href="${ScriptApp.getService().getUrl()}">Atualizar</a></p>
      </body>
    </html>
  `;

  return HtmlService.createHtmlOutput(htmlOutput);
}

// Função para configurar o deploy da aplicação web
function setupWebApp() {
  const scriptId = ScriptApp.getScriptId();
  const url = `https://script.google.com/macros/s/${scriptId}/exec`;
  Logger.log(`Acesse a aplicação web em: ${url}`);
}

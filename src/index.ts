import { loadConfig } from './config/config.js';
import { Server } from './server/server.js';
import { createLoggerWithConfig } from './utils/logger.js';

// Versão e nome do servidor
const SERVER_NAME = 'g2n-mcp-gcal-sse';
const SERVER_VERSION = '1.2.0';

// Função principal
async function main() {
  const config = loadConfig();

  // Inicializa o logger com a configuração carregada
  const logger = createLoggerWithConfig(config);

  logger.info(`Iniciando ${SERVER_NAME} v${SERVER_VERSION}`);
  
  // Criar e iniciar o servidor
  const server = new Server(config, SERVER_NAME, SERVER_VERSION, logger);
  await server.start(config.PORT, config.HOST);
}

// Iniciar o servidor
main().catch(error => {
  console.error('Erro fatal:', error);
  process.exit(1);
}); 
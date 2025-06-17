[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/gabriel-g2n-g2n-mcp-gcal-sse-badge.png)](https://mseep.ai/app/gabriel-g2n-g2n-mcp-gcal-sse)

# G2N MCP Google Calendar SSE Server

🌎 This README is available in multiple languages:
- 🇺🇸 [English](README.md)
- 🇧🇷 [Portuguese](README.pt-br.md)

## Overview

The G2N MCP Google Calendar SSE Server is a Model Context Protocol (MCP) server implementation that provides Google Calendar integration through Server-Sent Events (SSE). This server exposes Google Calendar functionality as tools that can be used by AI models and applications like Cursor, Claude, and n8n to interact with Google Calendar.

Built with the latest MCP SDK version, this server provides robust integration between MCP-compatible models and Google Calendar services.

## Features

The server provides the following MCP tools for Google Calendar management:

- `list-calendars`: List all available calendars
- `get-calendar`: Get details of a specific calendar
- `list-events`: List events from a calendar with filtering options
- `get-event`: Get detailed information about a specific event
- `create-event`: Create a new calendar event
- `update-event`: Update an existing calendar event
- `delete-event`: Delete a calendar event
- `list-colors`: List available colors for events and calendars

### What's New in v1.1.0
- Comprehensive logging system with configurable log levels
- Request/response logging middleware for better monitoring
- SSE heartbeat implementation for stable connections
- Enhanced error handling and debugging capabilities
- Improved Docker configuration with proper data directory permissions
- Enhanced OAuth flow with better token management
- Code refactoring for better maintainability

### What's New in v1.0.1

- First stable release
- Production-ready with Docker and Docker Swarm support
- Enhanced environment variables configuration
- Improved connection URLs for different deployment scenarios
- Better documentation for n8n integration
- Traefik configuration guidelines
- Multi-platform Docker images (amd64, arm64, arm/v7)

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Google Cloud project with Calendar API enabled
- OAuth 2.0 Client ID and Client Secret

### Environment Variables

The server uses the following environment variables:

```env
PORT=3001                                # Server port (default: 3001)
PUBLIC_URL=https://your-domain.com       # Public URL for OAuth callbacks
GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}     # Google OAuth Client ID
GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET} # Google OAuth Client Secret
OAUTH_REDIRECT_PATH=/oauth/callback      # OAuth callback path (default: /oauth/callback)
```

**Important Notes:**
- When using Traefik, make sure to configure it to point to the port specified in the `PORT` environment variable
- This is crucial for successfully receiving the Google refresh token
- The `PUBLIC_URL` must be internet-accessible for OAuth callbacks to work

## Authentication Flow

1. Start the server using Docker or directly
2. Navigate to the `/auth` endpoint in your browser
3. Grant permissions to the application using your Google account
4. After authorization, the server will store refresh tokens for continuous access
5. The server will automatically refresh tokens when needed

To revoke access, use the `/revoke` endpoint:
```bash
curl -X POST https://your-domain.com/revoke
```

## Usage with MCP-Compatible Applications

### Connection URLs

Depending on your deployment scenario, use the appropriate URL format:

1. **Docker Swarm / n8n internal access:**
   ```
   http://[stack-service-name]:3001/sse
   ```
   Example: If your service is named `g2n-mcp-gcal-sse` in the stack, use:
   ```
   http://g2n-mcp-gcal-sse:3001/sse
   ```

2. **External access (Cursor, Claude, etc.):**
   ```
   https://your-domain.com/sse
   ```

3. **Local development:**
   ```
   http://localhost:3001/sse
   ```

### Cursor AI

You can use this server with Cursor AI by configuring the MCP connection in your settings:

1. Open Cursor settings
2. Configure the MCP server URL using your public domain:
   ```
   https://your-domain.com/sse
   ```
3. Start using Google Calendar features through AI commands

### Claude Desktop

For Claude Desktop:

1. Navigate to Settings > MCP
2. Add a new MCP connection with your public URL:
   ```
   https://your-domain.com/sse
   ```
3. Access Google Calendar functionality through your conversations

### n8n

1. In n8n, add a new MCP node
2. Configure the MCP node with the internal service URL:
   ```
   http://[stack-service-name]:3001/sse
   ```
3. Use the exposed calendar tools in your workflows 

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## About G2NTech

This project is developed and maintained by [Gabriel Augusto](https://github.com/oaugustosgabriel) at G2NTech.

## Support the Project 💜

If you find this project useful, consider supporting it via PIX:
- **PIX Key:** `gabriel@g2ngroup.com` 
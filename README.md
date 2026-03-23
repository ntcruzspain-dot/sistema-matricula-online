Sistema de Matrícula Online (Full Stack)
Este projeto é uma aplicação robusta para gerenciamento de matrículas em cursos, desenvolvida para demonstrar a integração de uma arquitetura Full Stack modern utilizando tipagem forte e reatividade.

Tecnologias e Conceitos
Frontend: Vue.js (Composition API) para uma interface reativa e performática.

Backend: Node.js com Express e TypeScript, garantindo segurança e escalabilidade no código.

Arquitetura: Comunicação via API REST com tratamento de erros e validação de payloads.

Funcionalidades Principais
Gestão de Catálogo: Consumo dinâmico de cursos via endpoint GET /cursos.

Fluxo de Matrícula: Registro de alunos com persistência de dados via POST /matricula.

Validação de Negócio: Camada de validação para impedir matrículas duplicadas ou dados inconsistentes.

UI Responsiva: Interface adaptável para diferentes tamanhos de tela, focada na experiência do usuário (UX).

Como Instalar e Rodar
Pré-requisitos
Node.js instalado (v18 ou superior recomendado)

NPM ou Yarn

Passo a Passo
Clone o repositório:

Bash
git clone [URL-DO-SEU-REPOSITORIO]
Configuração do Backend:

Bash
cd backend
npm install
npm run dev
Configuração do Frontend:

Bash
cd ../frontend
npm install
npm run dev

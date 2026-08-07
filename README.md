# Provedor ISP — Site Institucional

Site institucional para provedores de internet (ISP), com apresentação de planos residenciais e empresariais, montagem de pacote personalizado e canais de atendimento.

**Demonstração:** [provedorisp.rendev.com.br](https://provedorisp.rendev.com.br/)

## Funcionalidades

- Apresentação de planos residenciais (300 Mbps a 1 Gbps) com preços e benefícios por faixa
- Montador de pacote interativo: escolha do plano de internet + serviços opcionais (streaming) com cálculo de total mensal em tempo real
- Seção para empresas (links dedicados, IP fixo, SLA, planos sob medida) com CTA direto para WhatsApp
- FAQ com perguntas frequentes sobre instalação, fidelidade e suporte
- Contato integrado com WhatsApp, telefone e e-mail
- Páginas de Política de Privacidade e Termos de Uso
- Link para Central do Cliente (portal externo)

## Tecnologias

Next.js 14 · React 18 · TypeScript · react-icons

## Executando localmente

```bash
git clone https://github.com/renylson/provedorisp-site.git
cd provedorisp-site
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

### Com Docker

```bash
docker compose up --build
```

## Estrutura do projeto

```
provedorisp-site/
├── app/            # Rotas e páginas (Next.js App Router)
├── components/     # Componentes de UI reutilizáveis
├── lib/            # Funções auxiliares
├── public/         # Imagens e assets estáticos
├── Dockerfile
└── docker-compose.yml
```

## Contexto do projeto

Este site foi desenvolvido como parte da [RenDev](https://rendev.com.br/), iniciativa própria através da qual desenvolvo soluções digitais para empresas — neste caso, um site institucional demonstrativo para o segmento de provedores de internet, área onde tenho mais de 10 anos de experiência técnica como Técnico em Telecomunicações.

> Projeto de portfólio / demonstração comercial. Dados de contato e CNPJ exibidos no site são fictícios.

## Autor

**Renylson Marques**

- GitHub: [github.com/renylson](https://github.com/renylson)
- LinkedIn: [linkedin.com/in/renylsonmarques](https://www.linkedin.com/in/renylsonmarques/)

---

# Projeto de Automação de Testes com Cypress

Este projeto é um exemplo de automação de testes de interface utilizando **Cypress**, simula o fluxo de busca e visualização de produtos em uma página de e-commerce.

## Pré-requisitos

- **Node.js** e **npm** instalados. [Download Node.js](https://nodejs.org/)
- **Cypress** instalado globalmente ou como dependência do projeto.

## Instalação

1. Clone o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/seuusuario/seuprojeto.git
    cd seuprojeto
    ```

2. Instale as dependências do Cypress:

    ```bash
    npm install cypress --save-dev
    ```

## Estrutura do Teste

O teste contido em `cypress/e2e/teste_exemplo.cy.js` executa as seguintes ações:

1. Acessa a página inicial.
2. Realiza uma busca pelo termo "Mouse gamer".
3. Seleciona o primeiro item da lista de resultados.
4. Navega entre as imagens na galeria do produto.

## Execução do Teste

Para executar o teste, utilize o comando:

```bash
npx cypress open
```

No painel do Cypress, selecione o teste `teste_exemplo.cy.js` para rodar.

## Exemplo de Código

```javascript
describe('Teste de exemplo', () => {
    it('Visita a página inicial', () => {
        cy.visit('/');
        cy.get('input[placeholder="Buscar produtos, marcas e muito mais…"]').type('Mouse gamer');
        cy.get('button.nav-search-btn[type=submit]').click();
        cy.get('.ui-search-layout__item').first().click();
        cy.wait(1000);
        cy.get('.ui-pdp-gallery__figure').first().click();
        cy.get('button[title="Next (arrow right)"]').click();
        cy.get('button[title="Next (arrow right)"]').click();
        cy.get('button[title="Next (arrow right)"]').click();
    });
});
```

## Relatórios

Após a execução, o Cypress gera logs e capturas de tela automáticas para facilitar a análise dos resultados.


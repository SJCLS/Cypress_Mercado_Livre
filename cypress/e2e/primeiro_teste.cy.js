describe('Teste de exemplo', () => {
    it('Visita a página inicial', () => {
        cy.visit('/');
        cy.get('input[placeholder="Buscar produtos, marcas e muito mais…"]').type('Mouse gamer')
        cy.get('button.nav-search-btn[type=submit]').click()
        cy.get('.ui-search-layout__item').first().click(); 
        cy.wait(1000);
        cy.get('.ui-pdp-gallery__figure').first().click(); 
        cy.get('button[title="Next (arrow right)"]').click()
        cy.get('button[title="Next (arrow right)"]').click()
        cy.get('button[title="Next (arrow right)"]').click()
    });
})

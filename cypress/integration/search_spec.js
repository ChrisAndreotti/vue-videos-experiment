describe('Search Tests', () => {
    it('Can search using keyword', () => {
        cy.visit('http://localhost:8080');
        cy.get( 'input#searchInput').type('cats{enter}');
        cy.get( '.list-group-item' ).should( 'have.length', 5 );
    });

    it('Can load main video module', () => {
        cy.visit('http://localhost:8080');
        cy.get( 'input#searchInput').type('cats{enter}');
        cy.get( '.list-group-item' ).eq(0).click();
    });
})
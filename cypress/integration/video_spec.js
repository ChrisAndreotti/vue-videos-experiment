describe('Video Tests', () => {

    it('Can load main video module', () => {
        cy.visit('http://localhost:8080');
        cy.get( 'input#searchInput').type('cats{enter}');
        cy.get( '.list-group-item' ).eq(0).click();
        cy.get( '[data-test="featured-video"]' ).should( 'have.length', 1 );
    });
})
describe('Basic Tests', () => {
    it('Has search input', () => {
        cy.visit('http://localhost:8080');
        cy.get( '[data-test="search-box"]' ).contains( 'Search for YouTube videos:' );
    });

    it('Has form input', () => {
        cy.visit('http://localhost:8080');
        cy.get( 'input#searchInput').invoke('attr', 'placeholder').should( 'contain', 'Enter a search term' );
    });
})
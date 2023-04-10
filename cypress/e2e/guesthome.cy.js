/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('green-garden.onrender.com');
  });

  it('displays title and trending products', () => {
    // should have logo link "Green Garden"
    cy.get('.logo a').should('have.text', 'Green Garden');

    // should have a carousel
    cy.get('.carousel').should('exist');

    // should have what's trending title and items
    cy.get('h3').should('have.text', "What's Trending");
    cy.get('.all-products-tile').should('have.length', 3);
  });

  it('should go to all products if all products button is clicked', () => {
    // clicking primary products button
    cy.get('[data-cy="shop-all-plants-btn"]').click();
    cy.url().should('have.text', '/products');
  });

  it('should go to view plant details when view plant button is clicked', () => {
    // clicking first view plant button
    cy.get('[data-cy="view-plant-btn"]').first().click();
    cy.url().should('have.text', '/products/7');
  });
});

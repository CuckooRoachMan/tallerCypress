/// <reference types="cypress" />

import { beforeEach } from "mocha";

describe('pokedex-search', ()=>{

    beforeEach(()=> {
        cy.visit('https://www.pokemon.com/el/pokedex/')
        cy.get('#onetrust-accept-btn-handler', {timeout:3000}).click
    })
    
    it("Buscar un solo pokemon", ()=>{
       
        cy.get('#searchInput').type('132')
        cy.get('.filter-text-search > #search').click()   
    })

    it("Busqueda avanzada de tipos bichos", ()=>{
        
       
        
        cy.get('.text').click(); 
        cy.get(':nth-child(1) > .type-filter').click()
        cy.get('.filter-action > #search').click()
        cy.get(':nth-child(1) > figure > a > img').click()
        cy.get('.background-color-bug > a').should('be.visible')
    })
    
})
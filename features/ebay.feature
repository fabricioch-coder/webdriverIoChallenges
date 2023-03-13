Feature: El usuario busca un producto por Nombre

  Background:
    Given Abro el sitio de Ebay "home"

  Scenario: Busqueda de Pilas en Ebay
    When El usuario busca "Pilas"
    Then El usuario ve los resultados de la busqueda
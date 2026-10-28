# Accessible Website

Ontwerp en maak voor een opdrachtgever een website toegankelijk volgens WCAG richtlijnen.

De instructie van deze leertaak staat in [WIKI](https://github.com/fdnd-task/all-human-accessible-website/wiki)

## Inhoudsopgave
  * [Introductie](#introductie)
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)
## Introductie
Tijdens deze sprint werk ik wederom aan het project PediaConnect. Dit is een social media platform dat is bedacht om op een makkelijke manier onderling contact te leggen voor kinderartsen. LinkedIn werkt niet goed genoeg voor de artsen, daarom is het project PediaConnect opgezet. Als front-ender (in spé) is het mijn taak om van het design, dat gemaakt is door een (voormalig) CMD-student, een statische website te coderen. 

De CMD-student heeft hun design aan ons doorgegeven:
<img width="1307" height="857" alt="image" src="https://github.com/user-attachments/assets/d5f3f1d9-007e-4c21-9753-047a81d50285" />

Hieronder staat de link naar de website die ik nu aan het maken ben:
https://xinjuliette.github.io/all-human-accessible-website/
<!-- VOEG HIER EEN FOTO VAN DE WBESITE IN -->

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Tijdens deze nieuwe sprint hebben we geleerd van eerdere obstakels en hiervan geleerd. Ook hebben wij deze keer nieuwe kennis op gedaan over hoe wij "human-first" kunnen coderen, toegankelijkheid stond dus centraal. We zijn helemaal opnieuw begonnen, maar nu met als prioriteit om de website toegankelijk te bouwen. 
<!-- VOEG HIER EEN FOTO TOE VAN LIGHTHOUSE TEST -->


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De indeling van het dasboard bestaat uit verschillende secties (HTML). De volgorde hiervan is volgens het design: header (navigatie), introductie (meer navigatie), een recommended sectie met daarin profiel-kaartjes, een bookmarked-sectie met daarin pagina's die zijn opgeslagen door de gebruiker en onderin een footer (mobiele versie).

Om het dropdown-menu te maken heb ik gebruik gemaakt van JavaScript:
``code text``
const navbtn = document.querySelector(".navbtn");
const menubtn = document.querySelector(".hamburgermenu");
const deNav = document.querySelector(".dropdownnav")

menubtn.addEventListener("click", openMenu);


function openMenu(){
  deNav.classList.add("toonMenu")
}

navbtn.addEventListener("click", closeMenu);

function closeMenu(){
  deNav.classList.remove("toonMenu");
}


## Bronnen

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).

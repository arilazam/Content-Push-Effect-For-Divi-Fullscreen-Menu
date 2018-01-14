# Content-Push-Effect-For-Divi-Fullscreen-Menu

I am going to show how to implement a content push effect for Divi Fullscreen menu which looks awesome both on desktop and mobile screens. This effect changes the default fade effect of Fullscreen menu making it slide in from the left-hand side of the screen while pushing the page content to the right.

let’s get it done in a few easy steps.

Step 1 – Add CSS Class Using jQuery
When a user clicks the menu “hamburger” to open the Fullscreen menu, the et_pb_fullscreen_menu_opened class is being added to the fullscreen menu container to make it possible to target the opened menu and apply the specific CSS rules to it.
We need to add a specific CSS class to page content too to be able to target and move it to the right using CSS when the Fullscreen menu is opened. To do this we are going to use the same approach by which the CSS class is being added to Fullscreen menu when clicking the “hamburger”.
So, here is the jQuery, you’ll have to add it into Divi -> Theme Options -> Integrations tab -> Add code to the <head> field, it adds the fullscreen_menu_opened class to the menu bar(#main-header) and the page main area(#et-main-area).

EnlighterJS.js

Step 2 – Add Content Push Effect CSS
Below you can see the Content Push effect CSS snippet, I’ve commented each rule to help you understand what is going on there, you’ll need to add this CSS into the Divi -> Theme Customizer -> Additional CSS section or Divi -> Theme Options -> Custom CSS field. Alternatively, you can add it into your child theme style.css file.

EnlighterCSS.css 

Save everything and enjoy the effect. Hope you find this tutorial useful. 

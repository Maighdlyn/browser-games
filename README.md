# Browser Games [Basic]

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can build basic web sites with HTML & CSS
- Can add behavior to a web site with JavaScript
- Are familiar with DOM manipulation
- Are familiar with games like tic-tac-toe and Simon
- Are interested in making more complex interactive web pages

## Description

Build simple graphical games for the browser.

Fork the the [browser-games repository][browser-games] and use the fork as your project artifact.

Implement the games **Tic-Tac-Toe** and **Simon** from the list in the [games.md][games-list] file.

You will be using FreeCodeCamp challenges as guides and tutorials for building these games.

## Context

This goal will challenge your ability to take a _formal, defined system_ from the real world and replicate it in code. You will start with all of the logic of the system (the rules of the game) and most of the UI already designed.

Your work will be mainly in deciding how to replicate that formal logic and user interface using JavaScript, HTML, and CSS.

## Specifications

- [x] Artifact produced is a fork of the [browser-games][browser-games] repo.
- [ ] For **both** of the games Tic-Tac-Toe and Simon, there exists:
  - [x] A playable, complete version of the game at `public/GAME_NAME.html` (e.g. `public/ticTacToe.html`)
  - [x] A link to the game page from `public/index.html`
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Every pull request has been reviewed by at least one other person.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

[browser-games]: https://github.com/GuildCrafts/browser-games
[games-list]: https://github.com/GuildCrafts/browser-games/blob/master/games.md
[basic-games]: https://github.com/GuildCrafts/browser-games/blob/master/games.md#basic-graphical-games
[mit-license]: https://opensource.org/licenses/MIT


## Notes
Tic Tac Toe is functional in both one and two player modes. One player does not have AI, O's placement is purely random. Game play is not disabled when a winner is declared, it is still possible to click empty boxes until all the boxes are used, even if someone's already won.

Simon is also functional however it does not check if your answer is correct until the player has clicked as many colors as there are in that round. We discussed this earlier, how each iteration of the loop could check the array[i] rather than checking all of them at the very end; i just didn't have time to implement your suggestions. As we discussed, I could also make redLight(), yellowLight() etc. more concise by replacing them all with a single function that's passed a parameter. I did not have time to create a "strict mode:.
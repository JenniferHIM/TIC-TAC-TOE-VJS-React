const App = {
  // All of our selected HTML elements
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  init() {
    App.registerEventListener();
  },

  registerEventListener() {
    // DONE
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });

    // TODO
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game");
    });

    // TODO
    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("New round");
    });

    // TODO
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(`Square with id ${event.target.id} was cliked`);
      });
    });
  },
};

window.addEventListener("load", App.init);

// const menu = document.querySelector('.menu');
// const menuItems = document.querySelector('.items');

// App.$.menu.addEventListener("click", (event) => {
//   App.$.menuItems.classList.toggle("hidden");
// });

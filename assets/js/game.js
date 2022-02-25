var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// create function
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player tor fight or run
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    {
      //if choose Fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy health by subtracting playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName +
            " attacked " +
            enemyName +
            ". " +
            enemyName +
            " now has " +
            enemyHealth +
            " health remaining."
        );
      }
    }
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        // award player money for winning
        playerMoney = playerMoney + 20;
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
      // if player choses to skip
    }
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
      }
    }
  }
};
// execute function
var startGame = function () {
  for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      debugger;
      fight(pickedEnemyName);
    } else {
      window.alert("You have lot your robot in battle! Game Over!");
    }
    endGame();
  }
};
//End game function
var endGame = function () {
  if (playerHealth > 0) {
    window.alert("This game has now ended. Your score is " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle! Game Over!");
  }
  var playAgainConfirm = window.confirm("Woulf you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
startGame();

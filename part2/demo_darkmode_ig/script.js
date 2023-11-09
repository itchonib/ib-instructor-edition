/* The following function will run every time the dark mode button is clicked. */

function toggleDarkMode() {
  // console.log("You clicked the button")
  /*
    👩🏻‍💻 Consider adding the comments to help them as they go along and for notes later. 

    1. Remind students that our goal is to add that dark class to the body. So we need to query/find the body element in the document itself. How do we do that? (some students will say getElementById etc, mention that querySelector is your faveeeee because you can use any css selector)
    2. After creating the element console.log() the body var to show them it is QUITE literally the element and NOW we have the ability to manipulate it using JS. 
    3. Ask students then if they know HOW to add to classList in DOM. Google if no answers. Prob best to pull up the classList MDN now because we will reference it later.
    4. Try doing body.classList.add("dark"). Show them that it works -- but not perfectly. There is another method that already does a check for use -- toggle! 
    5. Show them that magic... it works! 
    6. Break down the logic for the text update. Pseudo code first...
    7. Code it out. Utilize the MDN page to see the contains method. 
    8. Ask students if they can google/find a DOM method that will change the inside text of an element :) 
  */

  //When the button is clicked we want to add a class of "dark" to the body tag
  const body = document.querySelector("body");

  body.classList.toggle("dark");

  //store the darkmode button in the HTML as variable to use later
  const darkModeButton = document.querySelector("#dark-mode-button");

  //if classlist contains the "dark" class
  // button text should be "☀️ Light Mode"
  // else
  // button text should be "🌛 Dark Mode"

  if (body.classList.contains("dark")) {
    darkModeButton.innerText = "☀️ Light Mode";
  } else {
    darkModeButton.innerText = "🌛 Dark Mode";
  }
}

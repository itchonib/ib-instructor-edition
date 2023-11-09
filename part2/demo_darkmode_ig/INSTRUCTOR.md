## Instructor Edition: Dark Mode Toggle

👩🏻‍💻 All annotations and guided notes for this lesson will be denoted be the woman technologist emoji these contain great speaking bits and tips to enhance the lesson.

### Context

- Students are already provided the starter code in HTML and CSS. The dark mode button is coded, and the onclick attribute is ready. The script file has a skeletal function.
- Remember there is a lot of material to cover in this LL. While you can prompt for ideas, it will take time. It is recommended and best if you just demo and explain as you go along. When you come across as chance for a question, just model how you would google that. (Ex: What DOM method exists to add to a classList? Oh let me google... ahh okay look at this MDN doc)

### Overall Plan

💬 [LI] Do ➡️

- Start by looking through the codebase. There are three important things to note that will be vital to building this feature:
  - The `onclick` attached to the dark mode button in `index.html`
    - 👩🏻‍💻 May want to add a console.log to the function and show how that the button is indeed linked. Need to save time during demo? Consider adding it to the starter before class.
  - The `.dark` class rules in `style.css`
    - 👩🏻‍💻 When reviewing this one, show off the modal that appears when you hover over the selectors.
      - > 💬 Look at all these CSS selectors! See how they all have .dark and then a space after? That indicates that .dark is a parent element and everything after that space is child element (doesn't have to be a direct child). You can even see when you hover over the selector it shows you the relationship between the classes. Since we know that .dark must be a parent selector to all these elements, it's best we choose the most parent element to add the "dark" class to. Anyone know what they most "parent" element to our visible HTML elements is? [Wait for responeses] That's right.. the body!
    - 👩🏻‍💻 Navigate to the preview window, inspect then edit the HTML and manually add in the `class="dark"`.
      - > Wow see how that changed it up! So great, we know now that by adding the class of "dark" to the body. That's how we can achieve dark mode. Let's code it out!
  - Go back to the `toggleDarkMode` function in `script.js`
    - Add logic to `toggleDarkMode` one step at a time. Select the elements, toggle the class on and off, conditionally render the button text.
    - See `script.js` file for more tips and guide on how to efficiently guide them through

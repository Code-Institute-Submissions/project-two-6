[Link to the live project](https://ip69719.github.io/MS2/) - UPDATE THIS

# Welcome to my Car Logos learning game!
The project idea was inspired by a six years old boy who loves cars.



## User Experience (UX)

### Project Goals
The primary Project Goal is to create a simple car logos learning game that is suitable for young children.

The target audience are young children who are interested to learn car brand logos.


### User Stories

* As a young player aged between 6 - 8 years old, I want:
* The ability to view a short introduction so I can understand what the game is about.
* The ability to easily navigate throughout the site.
* Any text to be clear and consise so I can easily read and follow the instructions. 
* Feedback when I select an answer letting me know if I selected correct answer.
* The ability to track my score after every answer.
* Feedback at the end of the game so that I know what my overall score is.



### Design choices

* Colour Scheme
  * The color scheme comprises of shade of blue, gray and cream. I find that these colours complement each other.
  * The blue background works well for silver car logo images.
  * Orange color adds an element of vibrancy and fun to the site.


* Typography
  * Chilanka font was chosen for its playful style.



### Wireframes

* [Home Page Wireframe](https://github.com/ip69719/MS2/blob/main/wireframes/MS2%20Wireframe%20Desktop.pdf)
* [Mobile Wireframe ](https://github.com/ip69719/MS2/blob/main/wireframes/MS2%20Wireframe%20Phone.pdf)
* [Tablet Wireframe ](https://github.com/ip69719/MS2/blob/main/wireframes/MS2%20Wireframe%20Tablet.pdf)

## Features

### Existing Features
  * Interactive elements

### Features Left to Implement
  * Responsive design on all device sizes
  * styling of sweetalerts modals for consistency of styling
  * Currently the game questions are  hardcoded 



## Technologies used


### Languages used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

* Google fonts:
  [Google fonts](https://fonts.google.com/) were used to import the 'Chilanka' font into the style.css file which is used on all pages throughout the project.
* Balsamiq Wireframes:
  [Balsamiq Wireframes](https://balsamiq.com/) was used to create wireframes for the project.
* Git:
  [Git](https://git-scm.com/) was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* GitHub:
  [GitHub](https://github.com/) is used to store the projects code after being pushed from Git.



## Testing

  * The W3C Markup Validator and W3C CSS Validator Services were used to validate the project to ensure there were no syntax errors.
    * W3C Markup Validator - [Results](https://github.com/ip69719/MS2/blob/main/testing/W3C%20Markup%20Validator.pdf)
    * W3C CSS Validator - [Results](https://github.com/ip69719/MS2/blob/main/testing/W3C%20CSS%20Validator.pdf)

  * Validated that the modal with the game instructions opens when "Show Instructions" button is clicked.
  * Validated that the modal with the game instructions closes when "X" (close) button is clicked.
  * Validated that the User is taken to the game area when "Start" button is clicked.
  * Validated that the User is presented with the "Good job!..." (Answer correct) pop up message when the correct answer is selected.
  * Validated that the User is presented with the "Opps!!..." (Answer incorrect) pop up message when an incorrect answer is selected.
  * Validated that the progress is updated when an answer is selected:
      * The color changes from gray to green if the correct answer is selected.
      * The color changes from gray to red if an incorrect answer is selected.
  * Validated that the User score is correctly tracked.
  * Validated that the User score is correctly displayed in results section.
  * Validated that when "Replay" button is clicked:
      * The User is returned to the game area
      * The score is reset
      * The progress is reset.
  * Validated that User is taken back to the landing page when "Quit" button is clicked.
  * Validated that when "Start" button is clicked after the User returned from the results area:
      * The score is reset
      * The progress is reset.

  * User stories
  * **As a young player aged between 6 - 8 years old, I want the ability to view a short introduction so I can understand what the game is about.**
  As soon as the page is opened User is presented with a welcome message that gives a brief introduction to the game.
  ![](assets/documents/testing/test_evidence_1.png)

  * **As a young player aged between 6 - 8 years old, I want the ability to easily navigate throughout the site.**
  Both the home section and the results section have only two large bright coloured buttons allowing the User to navigate easily.
  ![](assets/documents/testing/test_evidence_1.png)
  ![](assets/documents/testing/test_evidence_2.png)

  * **As a young player aged between 6 - 8 years old, I want any text to be clear and consise so I can easily read and follow the instructions.**
  The text in every section of the page is short and simple making it easy for the User to understand and make choices. Large font-size and letter-spacing CSS properties were applied to make the text easier to read. 
  [test_evidence_1](https://github.com/ip69719/project-two/blob/main/assets/documents/testing/test_evidence_1.JPG)
  [test_evidence_2](assets/documents/testing/test_evidence_2.png)
  ![](assets/documents/testing/test_evidence_3.png)

  * **As a young player aged between 6 - 8 years old, I want feedback when I select an answer letting me know if I selected correct answer.**
  The User is presented with a pop up message as soon as an answer is selected providing the User with an instant feedback.
  ![](assets/documents/testing/test_evidence_5.png)
  ![](assets/documents/testing/test_evidence_6.png)

  * **As a young player aged between 6 - 8 years old, I want the ability to track my score after every answer.**
  There is a gray circle for every question of the quiz just under the answer alternatives in the game area. The progress is tracked by filling in the circles with either green or red colour when User answer is obtained.
  ![](assets/documents/testing/test_evidence_4.png)

  * **As a young player aged between 6 - 8 years old, I want feedback at the end of the game so that I know what my overall score is.**
  The user is presented with an overall game results as soon as the last question is answered.
  ![](assets/documents/testing/test_evidence_2.png)



## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/ip69719/project-two)
1. In the menu located at the top of this section, click 'Settings'.
1. Scroll down the Settings page until you locate the "GitHub Pages" Section and click on the link provided.
1. Under "Source", click the dropdown and select "main" Branch and "/root" folder and then save.
1. The page is then given a site URL which you will see above the source section.


### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/ip69719/project-two)
1. In the top right corner of the page, click the Fork button 
1. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/ip69719/project-two)
1. Click "Code" botton (beside the green Gitpod botton).
1. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link that is shown in the drop-down.
1. Open Git Bash
1. Change the current working directory to the location where you want the cloned directory to be made.
1. Type git clone, and then paste the URL you copied in Step 3.
$ git clone https://github.com/ip69719/MS-Project-1-v-3.git - UPDATE THIS!
1. Press Enter. Your local clone will be created.

## Credits

### Content

* Content of READ.md was written with reference to [Example README.md template](https://github.com/Code-Institute-Solutions/SampleREADME).

### Media

* Images was sourced from [Pixabay](https://pixabay.com/), [StickPNG](https://www.stickpng.com/) and [Shutterstock](https://www.shutterstock.com/home)

### Code

* Used [Coding Ninjas](https://www.codingninjas.com/blog/2020/11/03/how-to-create-a-quiz-in-javascript/?amp=1) tutorial as a reference to implement project idea.

* Used [Zenva Academy](https://academy.zenva.com/product/javascript-mini-projects-language-learning-game/) tutorial as a reference to implement project idea.

* Learned how to display two divs side by side from [coder coder!](https://coder-coder.com/display-divs-side-by-side/).

* Learned how to create a Modal Box with CSS and JavaScript and adopted code from this [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) tutorial.

* Learned how to create an overlay effect with CSS from this [W3Schools](https://www.w3schools.com/howto/howto_css_overlay.asp) tutorial.

* Learned how to create div elements with a for loop and adopted code from this [Stack Overflow](https://stackoverflow.com/questions/42010723/creating-div-element-with-a-for-loop) post.

* Learned how to remove all elements of a certain class from the DOM from this [Stack Overflow](https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom) post.*

### Acknowledgements

* Special thanks to Code Institute for exellent leaning materials.
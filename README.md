# Pre-work - *Memory Game*

Musical Memory Game! is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Isabella Blair

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/speckle-zany-bellflower?path=README.md%3A9%3A64

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ]

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![]https://cdn.glitch.global/9574f6f1-9709-4907-84d1-5b2e060ef1f0/winning.gif?v=1648874873659
![]https://cdn.glitch.global/9574f6f1-9709-4907-84d1-5b2e060ef1f0/final%20submit.gif?v=1648874885065
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

  https://cssreference.io/property/font-family/
  https://www.geeksforgeeks.org/html-img-tag/
  https://www.w3resource.com/css/selectors/CSS-child-selector.php
  https://www.w3schools.com/cssref/pr_class_display.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

  Whilst attempting to make the images on the buttons show up only during the times the select button is active, much of the code I tried failed and subsequently broke the rest of the program; for instance, I
initially created two new functions (showImg(btn) and hideImg(btn)) which mirrored the lightButton(btn) and clearButton(btn) functions. I created these because I believed that these functions being called 
in playSingleClue() were the key to causing the button state to shift- this is true to an extent, but I was missing the CSS code to go along with these new functions. I spent a while placing console.log()
commands in loops and functions in my code to try and identify where the issue was happening. Eventually, I decided that my next best course of action would be to work my way through the code to fully understand 
what caused a change in the buttons when they are clicked. 
  I talked myself through the program, going back and forth between all of the scripts and figuring out which parts corresponded to lighting the buttons when 
they are clicked and when they are played in the patterns. I realized that I would need to group my images somehow in order to reference them all in my code. I did this by assigning them all to a class in the HTML 
document after analyzing the .hidden CSS class code. I then changed the style of this class in the CSS script so that all of the images would be the same size would all initially be hidden. I also absorbed my hide 
and showImg() functions into the lightButton() and clearButton() functions because I knew that the images would need to appear and disappear under the same conditions. This attempt worked better, though the images 
only appeared during the playing of the patterns and not when clicked by the user. I went back to my CSS script because I knew that CSS was what caused the buttons to change colors when lit, and I realized that if 
I had a way to call the specific images in my CSS code itself, I would be able to change their display status when each button was active. I researched CSS child selectors because I knew that the images were inside 
of the buttons in HTML, and I was finally able to accomplish the task.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  I am interested to learn more about how data is stored in web servers and how this data might be protected: how things like usernames and passwords are kept track of, how specific user data is kept in these
accounts, and how these aspects of a website are encrypted are topics I am curious to learn more about. I would also like to learn more about what the process of developing a website is like. Creating my submission 
took much trial and error, and I want to see what making a fully functional website would look like in industry. Similarly, I am now very interested in web design. There are a lot of gorgeous websites out there, and 
I can’t even begin to imagine how some of them are coded. I am excited to further explore the intersection between human-computer interaction, visual principles, and web development. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  I would like to add features to make the game a bit more dynamic and responsive. It might be interesting to play with adding more buttons each turn that could be incorporated into the pattern or to try different button 
shapes. I might also try to change the button shapes each turn. In order to make the game more difficult, I would test changing the order of the buttons each turn so that the player would have to rely solely on memorizing 
the color and sound of the buttons rather than their positions on the screen. I would also like to add a leaderboard where players can track their best time records for completing the game. 



## Interview Recording URL Link

[My 5-minute Interview Recording]https://www.loom.com/share/07b2721afbde411893b5ff8986177b59


## License

    Copyright Isabella Blair

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
# micro-bit-move-collection
A collection of programs for the BBC micro:bit + kitware :move (micro:bit:move).
-----


## Robot:
* Brain: https://microbit.org/
* Body:  https://kitronik.co.uk/products/5652-move-mini-mk2-buggy-kit-excl-microbit


## Using this as a workshop


### Teaser
You teach the robots to drive autonomously on a black line.
There is no remote control, so the robots have to find their own way.
Together we programme the robots' brains.
In the process, you will learn how programmes are structured and the difference
between software and hardware.
Depending on how fast we are, you can then get creative
with the robots and their software.


### Description 


#### Task:
Robots should follow a black line 
No remote control, robots have to find the way themselves
You have to programme the robots!


#### Given:
Robots have two sensors at the bottom that can distinguish between black and white
microbit.org/code/ webside gives you different IDEs (Integrated Development Environment).

However, today we only use https://makecode.microbit.org/# which offers JavaScript and graphical programming


#### You need:
* a team (2 to 3 people)
* a computer
* a robot
* a test track


### Preperation checklist:
* [ ] prepare one computer per robot
  * [ ] OS up-to-date
  * [ ] able and allowed to auto-mount USB-drive / micro:bit with user permissions
  * [ ] access to internet and https://microbit.org page
  * [ ] Browser: for the case a participate closes window by accident
    * [ ] up-to-date
    * [ ] cookies should be kept at shutdown
    * [ ] restore previous session / tabs 
* [ ] Test each micro:bit:MOVE with the SystemTest
  1. moves forwards (for half a second)
  2. moves backwards (for half a second)
  3. stops
  4. shows a red square on the LED matrix display (for half a second)
  5. switches off all LEDs
  6. LED strip (NeoPixels) cycles through all colours (red, green, blue, white, off) within half a second
  7. Continuous mode: LED strip shows left and right whether the line sensors see white.
* [ ] On the day of the workshop - for every computer before the workshop
  1. Open https://makecode.microbit.org/# in the browser
  2. Create a new project
  3. Add extensions
  4. 1. Advanced -> Extensions -> neopixel
  4. 1. Advanced -> Extensions -> kitronik-servo-lite
  6. Switch to JavaScript mode
  7. Insert start programme
  8. Switch to block mode


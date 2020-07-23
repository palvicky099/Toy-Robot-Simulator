# Toy Robot Simulator (IONIC 5)

## Description

- The application is a simulation of a toy robot moving on a square tabletop,
  of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be
  prevented from falling to destruction. Any movement that would result in the
  robot falling from the table must be prevented, however further valid movement
  commands must still be allowed.
 
The application that can read in commands of the following form

    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT

- PLACE will put the toy robot on the table in position X,Y
  and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that,
  any sequence of commands may be issued, in any order, including another
  PLACE command. The application should discard all commands in the
  sequence until a valid PLACE command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently
  facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction
  without changing the position of the robot.
- REPORT will announce the X,Y and F of the robot.
- Any move that would cause the robot to fall must be ignored.
  
### Download APK from below URL
- https://i.diawi.com/Ap6F7g

### App Screenshots

![alt screenshot](https://firebasestorage.googleapis.com/v0/b/vicky-resume.appspot.com/o/img.png?alt=media&token=3f96fba7-a347-4962-824c-338c64cac0ce)
### Get started
- Make sure you have the Node and git,  installed on your machine

`git --version`  Check installed git version
`node --version`  Check installed node version

### Clone the repo from github
`git clone https://github.com/palvicky099/Toy-Robot-Simulator.git`

- Got to project directory and install npm package

`cd Toy-Robot-Simulator`

`npm install`


- run the in browser
`ionic serve`

- And open http://localhost:8100 to view it in the browser.

- Build the app

`ionic cordova platform add android` Add  platform to project 

`ionic cordova build android` build the project to get the APK 

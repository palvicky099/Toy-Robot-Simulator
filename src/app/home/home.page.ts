import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public blocks = [];
  public isStarted: boolean = true;
  public currentPosition = { x: 0, y: 0, direction: 0 }
  public directionArray = ['East', 'South', 'West', 'North'];
  public initialDirection  = 0;
  public isResetPopup: Boolean = false;
  public tempPosition = {};
  public resetAnimation = '';
  constructor(private toastCtrl: ToastController) {
    this.getTable();
    this.changePosition(this.currentPosition);
    this.tempPosition = this.currentPosition;
  }

  startSimulation() {
    this.isStarted = false;
  }


  // Change Direction left and riht turn
  changeDirection(direction) {
    if (direction == 'right') {
      if (this.initialDirection == 3) {
        this.initialDirection = 0;
      } else {
        this.initialDirection = this.initialDirection + 1
      }
    }
    if (direction == 'left') {
      if (this.initialDirection == 0) {
        this.initialDirection = 3;
      } else {
        this.initialDirection = this.initialDirection - 1;
      }
    }
    this.directionInit();
  }

  //Initilized direction of toy
  directionInit() {
    if (this.directionArray[this.initialDirection] == 'East')
      this.currentPosition.direction = 0;

    if (this.directionArray[this.initialDirection] == 'South')
      this.currentPosition.direction = 90;

    if (this.directionArray[this.initialDirection] == 'West')
      this.currentPosition.direction = 180;

    if (this.directionArray[this.initialDirection] == 'North')
      this.currentPosition.direction = 270;
  }

  //Move forword
  move() {
    switch (this.directionArray[this.initialDirection]) {
      case "East":
        if (this.currentPosition.x == 4) {
          this.presentToast("Cannot move to West. Please try other directions", "danger")
        }
        else {
          this.currentPosition.x = this.currentPosition.x + 1;
          this.currentPosition.direction = 0;
          this.changePosition(this.currentPosition)
        }
        break;
      case "South":
        if (this.currentPosition.y == 0) {
          this.presentToast("Cannot move to South. Please try other directions", "danger")
        }
        else {
          this.currentPosition.y = this.currentPosition.y - 1;
          this.currentPosition.direction = 90;
          this.changePosition(this.currentPosition)
        }
        break;
      case "West":
        if (this.currentPosition.x == 0) {
          this.presentToast("Cannot move to East. Please try other directions", "danger")
        }
        else {
          this.currentPosition.x = this.currentPosition.x - 1;
          this.currentPosition.direction = 180;
          this.changePosition(this.currentPosition)
        }
        break;
      case "North":
        if (this.currentPosition.y == 4) {
          this.presentToast("Cannot move to North. Please try other directions", "danger")
        }
        else {
          this.currentPosition.y = this.currentPosition.y + 1;
          this.currentPosition.direction = 270;
          this.changePosition(this.currentPosition)
        }
        break;
         default:
        break;
    }
  }

  //set position 
  changePosition(coordinates) {
    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i].isPresent == true) {
        this.blocks[i].isPresent = false
      }
      if (this.blocks[i].x == coordinates.x && this.blocks[i].y == coordinates.y) {
        console.log(this.blocks[i])
        this.blocks[i].isPresent = true
      }
    }
  }

  async presentToast(msg, type) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: type,
      position :'top'
    });
    toast.present();
  }


  //init table
  getTable() {
    this.blocks = [
      { id: 1, x: 0, y: 4, isPresent: false },
      { id: 2, x: 1, y: 4, isPresent: false },
      { id: 3, x: 2, y: 4, isPresent: false },
      { id: 4, x: 3, y: 4, isPresent: false },
      { id: 5, x: 4, y: 4, isPresent: false },
      { id: 6, x: 0, y: 3, isPresent: false },
      { id: 7, x: 1, y: 3, isPresent: false },
      { id: 8, x: 2, y: 3, isPresent: false },
      { id: 9, x: 3, y: 3, isPresent: false },
      { id: 10, x: 4, y: 3, isPresent: false },
      { id: 11, x: 0, y: 2, isPresent: false },
      { id: 12, x: 1, y: 2, isPresent: false },
      { id: 13, x: 2, y: 2, isPresent: false },
      { id: 14, x: 3, y: 2, isPresent: false },
      { id: 15, x: 4, y: 2, isPresent: false },
      { id: 16, x: 0, y: 1, isPresent: false },
      { id: 17, x: 1, y: 1, isPresent: false },
      { id: 18, x: 2, y: 1, isPresent: false },
      { id: 19, x: 3, y: 1, isPresent: false },
      { id: 20, x: 4, y: 1, isPresent: false },
      { id: 21, x: 0, y: 0, isPresent: true },
      { id: 22, x: 1, y: 0, isPresent: false },
      { id: 23, x: 2, y: 0, isPresent: false },
      { id: 24, x: 3, y: 0, isPresent: false },
      { id: 25, x: 4, y: 0, isPresent: false },
    ]
  }

  //avanced position set
  setupNewPosition(){
    this.changePosition(this.tempPosition);
    this.popupToggle();
    this.directionInit();
    this.isStarted = false;
  }

  popupToggle(){
    if(!this.isResetPopup){
      this.resetAnimation = 'animate__slideInUp';
        this.isResetPopup = !this.isResetPopup;
    }else{
      this.resetAnimation = 'animate__slideOutDown';
      setTimeout(() => {
        this.isResetPopup = !this.isResetPopup;
      }, 500);
    }
  }


}

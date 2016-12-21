import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private titleName: string = 'ADF Developer';
  constructor() { }

  getTitleName(){
    return this.titleName;
  }
}

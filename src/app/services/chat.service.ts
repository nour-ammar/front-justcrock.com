import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url:string = 'http://jcback.justcrok.com';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message:string) {
    this.socket.emit('chat message', message);
  }

  public getMessages = () => {
    return Observable.create((observer:any) => {
        this.socket.on('chat message', function(msg:any){
          observer.next(msg)
        });
    });
}
}

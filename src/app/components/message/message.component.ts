import { UserService } from './../../service/user.service';
import { ChannelService } from './../../service/channel.service';
import { MessageDTO } from './../../model/message/messageDTO.model';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetcherService } from '../../service/fetcher.service';
import { MessageService } from '../../service/message.service';
import { FormsModule } from '@angular/forms';
import { MessagePostDTO } from '../../model/message/messagePostDTO.model';



@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})


export class MessageComponent {
  ngOnInit() {
    this.fetcherService.loadChannels();
    this.message.getMessagesByChannel(this.inputMessage.channel.id).subscribe((data: MessageDTO[]) => {
      this.message.messages = data;
    });
  }
  constructor(public message: MessageService, private fetcherService: FetcherService, private channelService: ChannelService, private userService: UserService) { }

  inputMessage: MessagePostDTO = {
    content: '',
    timestamp: '',
    channel: { id: 1 },
    user: { id: 1 },

  }

  addMessage() {
    let id: number | undefined = this.userService.user?.id;
    if (id) {
      this.inputMessage.user.id = id;
    } else {
      this.inputMessage.user.id = 0;
    }
    // this.inputMessage.user.id = this.userService.user.id;
    this.inputMessage.channel.id = this.channelService.selectChannel;
    this.message.addMessage(this.inputMessage.channel.id, this.inputMessage.user.id, this.inputMessage).subscribe(
      () => {
          this.recupMessage();
      });

    this.inputMessage.content = '';
  };

  recupMessage() {
    this.message.getMessagesByChannel(this.inputMessage.channel.id).subscribe((data: MessageDTO[]) => {
      this.message.messages = data;
    });
  }

}

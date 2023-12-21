import { MessagePostDTO } from './../../model/message/messagePostDTO.model';
import { Channel } from './../../model/channel/channel.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FetcherService } from '../../service/fetcher.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-add-channel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {

constructor(private message: MessageService){}

  // inputMessage: MessagePostDTO = {
  //   content:'',
  //   timestamp:'',


  // }

  addChannel(){
    // console.log(this.inputMessage);
    // this.message.addMessage(this.inputMessage).subscribe((rep) => console.log(rep));
  };
}
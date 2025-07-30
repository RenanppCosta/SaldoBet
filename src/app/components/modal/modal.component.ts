import { afterRender, Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>("modal");

  open = input(false);

  constructor(){
    afterRender(()=>{
      if(this.open()){
          this.modal().nativeElement.showModal();
      }
    })
  }
}



  
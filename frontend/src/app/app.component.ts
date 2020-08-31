import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu ecommerce';

  soma(a,b){
    return a + b;
  }

  mostraMensagem(){
    alert("Você clicou no botão!");
  }
}




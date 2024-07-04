import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-mon-formulaire',
  standalone: true,
  imports: [],
  templateUrl: './mon-formulaire.component.html',
  styleUrl: './mon-formulaire.component.css'
})
export class MonFormulaireComponent {
   book = {
    author: "",
    title : "",
    year : ""
 }

  onSubmit(form: NgForm) {

  }
}



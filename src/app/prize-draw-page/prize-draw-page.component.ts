import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prize-draw-page',
  templateUrl: './prize-draw-page.component.html',
  styleUrls: ['./prize-draw-page.component.scss']
})
export class PrizeDrawPageComponent implements OnInit {
  public form: FormGroup;
  public lucker: {} = {};
  public luckyNumber: Number;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: '',
      participants: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    
  }
  
  addParticipant() {  
    this.participants().push(this.newParticipant());  
  }  

  removeParticipant(i:number) {  
    this.participants().removeAt(i);  
  }

  participants() : FormArray {  
    return this.form.get("participants") as FormArray  
  }  

  newParticipant(): FormGroup {  
    return this.formBuilder.group({  
      pName: '',  
      number: '',  
    })  
  }
  
  onSubmit() {
    let myValues = this.form.get('participants') as FormArray;
    // console.log(myValues.controls)
    var item = myValues.controls[Math.floor(Math.random() * myValues.controls.length)];
    this.lucker = item.value.pName;
    this.luckyNumber = item.value.number
    // console.log('Lucker', this.lucker, this.luckyNumber);
  }
}
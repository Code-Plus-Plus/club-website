import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'add-form',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  imgSrc: string;
  imgUrl: string;
  firstNameOut: string;
  lastNameOut: string;

  addMemberForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    imgSrc: new FormControl('')
  });


  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event) => { // called once readAsDataURL is completed
          this.imgSrc = event.target.result;
        }
      }
  }

  onSubmit() {
    this.firstNameOut = this.addMemberForm.value.firstName;
    this.lastNameOut = this.addMemberForm.value.lastName;
    this.imgUrl = this.imgSrc;
  }
}

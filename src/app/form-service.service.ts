import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  formStructure = [
    {
      "type": "text",
      // "label": "ala",
      "name": "ala",
      "value": "",
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Name is required"
        }
      ]
    },
    {
      "type": "text",
      // "label": "ala",
      "name": "ala2",
      "value": "",
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Name is required"
        }
      ]
    },
    {
      "type": "number",
      "name": "ma",
      "value": "",
      "validations": [
        {
          "name": "required",
          "validator": "required",
          "message": "Email is required"
        },
        {
          "name": "pattern",
          "validator": "email",
          "message": "Invalid email format"
        }
      ]
    },
    {
      "type": "select",
      "name": "kota",
      "options":["a","b","c"]} 
  ];
​
  getFormStructure() {
    return this.formStructure;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
 ​
 @Component({
   standalone: true,
   selector: 'app-dynamic-form',
   templateUrl: './dynamic-form.component.html',
   styleUrls: ['./dynamic-form.component.css'],
   imports: [ReactiveFormsModule, CommonModule]
 })
 export class DynamicFormComponent implements OnInit {
   dynamicForm!: FormGroup;
 ​
   constructor(private formBuilder: FormBuilder, public formService: FormServiceService) { }
 ​
   ngOnInit() {
     const formStructure = this.formService.getFormStructure();
 ​
     let formGroup: { [key: string]: any } = {};
     formStructure.forEach(control => {
       let controlValidators: any[] = [];
 ​
       if (control.validations) {
         control.validations.forEach((validation: any) => {
           if (validation.validator === 'required') controlValidators.push(Validators.required);
           if (validation.validator === 'email') controlValidators.push(Validators.email);
           // Add more built-in validators as needed
         });
       }
 ​
       formGroup[control.name] = [control.value || '', controlValidators];
     });
 ​
     this.dynamicForm = this.formBuilder.group(formGroup);
   }
 ​
   onSubmit() {
     console.log(this.dynamicForm.value);
   }
 ​
   getErrorMessage(control: any) {
     const formControl = this.dynamicForm.get(control.name);
 ​
     for (let validation of control.validations) {
       if (formControl?.hasError(validation.name)) {
         return validation.message;
       }
     }
 ​
     return '';
   }
 }
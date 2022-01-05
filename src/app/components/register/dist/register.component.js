"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var student_1 = require("src/app/model/student");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(stdService) {
        this.stdService = stdService;
        this.userRegistrationForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_2.Validators.required),
            email: new forms_1.FormControl(''),
            contact: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            city: new forms_1.FormControl('')
        });
        this.std = new student_1.Student();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //this.stdService.getRegistered().subscribe(data)
    };
    RegisterComponent.prototype.getRegistered = function () {
        this.stdService.postStudentData(this.std).subscribe(function (dat) {
            alert('Registered Successfully!!');
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        console.warn(this.userRegistrationForm.value);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddRecordComponent = void 0;
var core_1 = require("@angular/core");
var student_1 = require("src/app/model/student");
var AddRecordComponent = /** @class */ (function () {
    function AddRecordComponent(stdService) {
        this.stdService = stdService;
        this.std = new student_1.Student();
    }
    AddRecordComponent.prototype.ngOnInit = function () {
    };
    AddRecordComponent.prototype.takeData = function () {
        var _this = this;
        this.stdService.postStudentData(this.std).subscribe(function (resp) {
            alert('added');
            _this.std = resp;
        });
    };
    AddRecordComponent = __decorate([
        core_1.Component({
            selector: 'app-add-record',
            templateUrl: './add-record.component.html',
            styleUrls: ['./add-record.component.css']
        })
    ], AddRecordComponent);
    return AddRecordComponent;
}());
exports.AddRecordComponent = AddRecordComponent;

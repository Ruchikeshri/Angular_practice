"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(stdService, route) {
        this.stdService = stdService;
        this.route = route;
        this.StdList = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //  this.stdService.getStudentData().subscribe(resp =>{
        //    this.StdList = resp;
        //  })
        var _this = this;
        this.stdService.getStudentData().
            subscribe(function (data) {
            _this.std = data;
        });
    };
    DashboardComponent.prototype.deleteRecord = function (id) {
        var _this = this;
        this.stdService.deleteStudent(id).subscribe(function (resp) {
            alert('Data Deleted');
            _this.ngOnInit();
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

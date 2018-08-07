webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<app-employees></app-employees>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular4 Firebase CRUD';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__ = __webpack_require__("../../../../../src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_employee_list_employee_list_component__ = __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_employee_employee_component__ = __webpack_require__("../../../../../src/app/employees/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employees_employee_employee_component__["a" /* EmployeeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group hover\">\n  <li class=\"list-group-item\" *ngFor=\"let emp of employeeList\" (click)=\"onItemClick(emp)\">\n    {{emp.name}}- {{emp.position}}\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/employees/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_service__ = __webpack_require__("../../../../../src/app/employees/shared/service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    //get data on init of this component
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.employeeService.getData();
        console.log(x);
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (Element) {
                var y = Element.payload.toJSON();
                y["$key"] = Element.key;
                _this.employeeList.push(y);
            });
        });
    };
    //on click of any item, open that object
    EmployeeListComponent.prototype.onItemClick = function (emp) {
        this.employeeService.selectedEmployee = Object.assign({}, emp);
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employee-list',
            template: __webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_service__["a" /* ServiceService */]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<form #employeeForm='ngForm' (ngSubmit)=\"onSubmit(employeeForm)\">\n  <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.$key\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.name\" placeholder=\"Full Name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Position</label>\n    <input class=\"form-control\" name=\"position\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.position\" placeholder=\"Position\">\n  </div>\n  <div class=\"form-group\">\n    <label>Office</label>\n    <input class=\"form-control\" name=\"office\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.office\" placeholder=\"Office\">\n  </div>\n  <div class=\"form-group\">\n    <label>Salary</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-addon\">\n        <i class=\"fa fa-dollar\"></i>\n      </div>\n      <input class=\"form-control\" name=\"salary\" #name=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.salary\" placeholder=\"Salary\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!employeeForm.valid\">\n      <i class=\"fa fa-floppy-o\"></i> Submit\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" *ngIf=\"employeeService.selectedEmployee.$key!=null\" (click)=\"onDelete(employeeForm)\">\n      <i class=\"fa fa-trash\"></i>Delete\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"resetForm()\" >\n      <i class=\"fa fa-repeat\"></i>Reset\n    </button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/employees/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_service__ = __webpack_require__("../../../../../src/app/employees/shared/service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        if (form.value.$key == null) {
            this.employeeService.insertEmployee(form.value);
        }
        else {
            this.employeeService.updateEmployee(form.value);
        }
        this.resetForm(form);
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.employeeService.selectedEmployee = {
            $key: null,
            name: '',
            position: '',
            office: '',
            salary: 0,
        };
    };
    EmployeeComponent.prototype.onDelete = function (form) {
        if (confirm("Are you sure you want to delete this?") == true) {
            this.employeeService.deleteEmployee(form.value.$key);
            this.resetForm();
        }
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("../../../../../src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_service__["a" /* ServiceService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h2 class=\"jumbotron\">Employee Register</h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <app-employee></app-employee>\n  </div>\n  <div class=\"col-md-5\">\n    <app-employee-list></app-employee-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_service__ = __webpack_require__("../../../../../src/app/employees/shared/service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("../../../../../src/app/employees/employees.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employees/employees.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_service_service__["a" /* ServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_service__["a" /* ServiceService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "../../../../../src/app/employees/shared/service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_model__ = __webpack_require__("../../../../../src/app/employees/shared/employee.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceService = (function () {
    function ServiceService(firebase) {
        this.firebase = firebase;
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */]();
    }
    ////////////////////////////////////     ///////      CRUD operations      ///////       /////////////////////////////////////////
    //Read
    ServiceService.prototype.getData = function () {
        this.employeeList = this.firebase.list('employees');
        console.log(this.employeeList);
        return this.employeeList;
    };
    //Create
    ServiceService.prototype.insertEmployee = function (employee) {
        this.employeeList.push({
            name: employee.name,
            position: employee.position,
            office: employee.office,
            salary: employee.salary
        });
    };
    //Update
    ServiceService.prototype.updateEmployee = function (employee) {
        this.employeeList.update(employee.$key, {
            name: employee.name,
            position: employee.position,
            office: employee.office,
            salary: employee.salary
        });
    };
    //Delete
    ServiceService.prototype.deleteEmployee = function (key) {
        this.employeeList.remove(key);
    };
    ServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // Initialize Firebase
    firebaseConfig: {
        apiKey: "AIzaSyC6bo3bFC15hYnXJd2xJOl6YGjpTxDSFB8",
        authDomain: "employee-register-8e857.firebaseapp.com",
        databaseURL: "https://employee-register-8e857.firebaseio.com",
        projectId: "employee-register-8e857",
        storageBucket: "employee-register-8e857.appspot.com",
        messagingSenderId: "742765035050"
    }
};
console.log(environment);


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
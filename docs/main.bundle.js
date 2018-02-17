webpackJsonp([0],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(3);
var faker = __importStar(__webpack_require__(8));
var fake_factory_1 = __webpack_require__(130);
var x12_segment_1 = __webpack_require__(135);
var fakeFac = new fake_factory_1.FakeFactory(faker);
var pt = fakeFac.createPatient();
var ptNameSegment = new x12_segment_1.X12Segment("NM1", "IL", "1", pt.Name.LastName, pt.Name.FirstName, pt.Name.MiddleInitial, "", "", "MI", pt.Name.MemberId);
var streetAddressSegment = new x12_segment_1.X12Segment("N3", pt.Address.Street);
var cityAddressSegment = new x12_segment_1.X12Segment("N4", pt.Address.City, pt.Address.State, pt.Address.Zip);
var demographicSegment = new x12_segment_1.X12Segment("DMG", "D8", pt.Demographic.DateOfBirth, pt.Demographic.Gender);
var serviceDateSegment = new x12_segment_1.X12Segment("DTP", "472", "D8", fakeFac.createRecentD8());
var output = [
    ptNameSegment,
    streetAddressSegment,
    cityAddressSegment,
    demographicSegment,
    serviceDateSegment
].join("<br>");
var contentDiv = document.getElementById("content");
if (contentDiv) {
    contentDiv.innerHTML = output;
}


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var patient_1 = __webpack_require__(131);
var patient_name_1 = __webpack_require__(132);
var address_1 = __webpack_require__(133);
var demographic_1 = __webpack_require__(134);
var FakeFactory = /** @class */ (function () {
    function FakeFactory(faker) {
        this.faker = faker;
    }
    FakeFactory.prototype.createPatient = function () {
        var randomGender = this.faker.random.number(1);
        return new patient_1.Patient(this.createPatientName(randomGender), this.createAddress(), this.createDemographic(randomGender));
    };
    FakeFactory.prototype.createPatientName = function (gender) {
        return new patient_name_1.PatientName(this.faker.name.firstName(gender), this.faker.name.lastName(), this.faker.name.firstName().substring(0, 1), this.faker.finance.bic());
    };
    FakeFactory.prototype.createAddress = function () {
        return new address_1.Address(this.faker.address.streetAddress(), this.faker.address.city(), this.faker.address.stateAbbr(), this.faker.address.zipCode());
    };
    FakeFactory.prototype.createDemographic = function (gender) {
        return new demographic_1.Demographic(this.formatD8(this.faker.date.past(90)), Gender[gender].toString().substring(0, 1));
    };
    FakeFactory.prototype.createRecentD8 = function () {
        return this.formatD8(this.faker.date.past());
    };
    FakeFactory.prototype.formatD8 = function (date) {
        return date.toISOString().substring(0, 10).replace(/-/g, "");
    };
    return FakeFactory;
}());
exports.FakeFactory = FakeFactory;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Patient = /** @class */ (function () {
    function Patient(Name, Address, Demographic) {
        this.Name = Name;
        this.Address = Address;
        this.Demographic = Demographic;
    }
    return Patient;
}());
exports.Patient = Patient;


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PatientName = /** @class */ (function () {
    function PatientName(FirstName, LastName, MiddleInitial, MemberId) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.MiddleInitial = MiddleInitial;
        this.MemberId = MemberId;
    }
    return PatientName;
}());
exports.PatientName = PatientName;


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address(Street, City, State, Zip) {
        this.Street = Street;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
    }
    return Address;
}());
exports.Address = Address;


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Demographic = /** @class */ (function () {
    function Demographic(DateOfBirth, Gender) {
        this.DateOfBirth = DateOfBirth;
        this.Gender = Gender;
    }
    return Demographic;
}());
exports.Demographic = Demographic;


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var X12Segment = /** @class */ (function () {
    function X12Segment() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.elementDelimiter = "*";
        this.lineDelimiter = "~";
        this.elements = elements;
    }
    X12Segment.prototype.toString = function () {
        return (this.elements.join(this.elementDelimiter)
            + this.lineDelimiter)
            .toUpperCase();
    };
    return X12Segment;
}());
exports.X12Segment = X12Segment;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    margin: 2em;\r\n}", ""]);

// exports


/***/ })

},[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zha2UtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGF0aWVudC1tb2RlbHMvcGF0aWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGF0aWVudC1tb2RlbHMvcGF0aWVudC1uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXRpZW50LW1vZGVscy9hZGRyZXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXRpZW50LW1vZGVscy9kZW1vZ3JhcGhpYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMveDEyLXNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz81ZDE1Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXNCO0FBQ3RCLHVCQUFxQjtBQUNyQixpREFBNEM7QUFDNUMsOENBQTZDO0FBQzdDLDZDQUEyQztBQUUzQyxJQUFNLE9BQU8sR0FBRyxJQUFJLDBCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFdkMsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBRW5DLElBQU0sYUFBYSxHQUFHLElBQUksd0JBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFDakQsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDbEUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFNUIsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLHdCQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFB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bmRleC5odG1sJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XHJcbmltcG9ydCB7IEZha2VGYWN0b3J5IH0gZnJvbSAnLi9mYWtlLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBYMTJTZWdtZW50IH0gZnJvbSAnLi94MTItc2VnbWVudCc7XHJcblxyXG5jb25zdCBmYWtlRmFjID0gbmV3IEZha2VGYWN0b3J5KGZha2VyKTtcclxuXHJcbmNvbnN0IHB0ID0gZmFrZUZhYy5jcmVhdGVQYXRpZW50KCk7XHJcblxyXG5jb25zdCBwdE5hbWVTZWdtZW50ID0gbmV3IFgxMlNlZ21lbnQoXCJOTTFcIiwgXCJJTFwiLCBcIjFcIixcclxuICAgIHB0Lk5hbWUuTGFzdE5hbWUsIHB0Lk5hbWUuRmlyc3ROYW1lLCBwdC5OYW1lLk1pZGRsZUluaXRpYWwsIFwiXCIsIFwiXCIsXHJcbiAgICBcIk1JXCIsIHB0Lk5hbWUuTWVtYmVySWQpO1xyXG5cclxuY29uc3Qgc3RyZWV0QWRkcmVzc1NlZ21lbnQgPSBuZXcgWDEyU2VnbWVudChcIk4zXCIsIHB0LkFkZHJlc3MuU3RyZWV0KTtcclxuY29uc3QgY2l0eUFkZHJlc3NTZWdtZW50ID0gbmV3IFgxMlNlZ21lbnQoXCJONFwiLCBcclxuICAgIHB0LkFkZHJlc3MuQ2l0eSwgcHQuQWRkcmVzcy5TdGF0ZSwgcHQuQWRkcmVzcy5aaXApO1xyXG5cclxuY29uc3QgZGVtb2dyYXBoaWNTZWdtZW50ID0gbmV3IFgxMlNlZ21lbnQoXCJETUdcIiwgXCJEOFwiLFxyXG4gICAgcHQuRGVtb2dyYXBoaWMuRGF0ZU9mQmlydGgsIHB0LkRlbW9ncmFwaGljLkdlbmRlcik7XHJcblxyXG5jb25zdCBzZXJ2aWNlRGF0ZVNlZ21lbnQgPSBuZXcgWDEyU2VnbWVudChcIkRUUFwiLCBcIjQ3MlwiLCBcIkQ4XCIsXHJcbiAgICBmYWtlRmFjLmNyZWF0ZVJlY2VudEQ4KCkpO1xyXG5cclxuY29uc3Qgb3V0cHV0OiBzdHJpbmcgPSAgW1xyXG4gICAgICAgIHB0TmFtZVNlZ21lbnQsXHJcbiAgICAgICAgc3RyZWV0QWRkcmVzc1NlZ21lbnQsXHJcbiAgICAgICAgY2l0eUFkZHJlc3NTZWdtZW50LFxyXG4gICAgICAgIGRlbW9ncmFwaGljU2VnbWVudCxcclxuICAgICAgICBzZXJ2aWNlRGF0ZVNlZ21lbnRcclxuICAgIF0uam9pbihcIjxicj5cIik7XHJcblxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5pZihjb250ZW50RGl2KXtcclxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gb3V0cHV0O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gXCIuL3BhdGllbnQtbW9kZWxzL3BhdGllbnRcIjtcclxuaW1wb3J0IHsgUGF0aWVudE5hbWUgfSBmcm9tIFwiLi9wYXRpZW50LW1vZGVscy9wYXRpZW50LW5hbWVcIjtcclxuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gXCIuL3BhdGllbnQtbW9kZWxzL2FkZHJlc3NcIjtcclxuaW1wb3J0IHsgRGVtb2dyYXBoaWMgfSBmcm9tIFwiLi9wYXRpZW50LW1vZGVscy9kZW1vZ3JhcGhpY1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZha2VGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFrZXI6IEZha2VyLkZha2VyU3RhdGljKSB7IH1cclxuXHJcbiAgICBjcmVhdGVQYXRpZW50KCk6IFBhdGllbnQge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUdlbmRlciA9IDxHZW5kZXI+dGhpcy5mYWtlci5yYW5kb20ubnVtYmVyKDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUGF0aWVudChcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQYXRpZW50TmFtZShyYW5kb21HZW5kZXIpLFxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFkZHJlc3MoKSxcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZW1vZ3JhcGhpYyhyYW5kb21HZW5kZXIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYXRpZW50TmFtZShnZW5kZXI6IEdlbmRlcik6IFBhdGllbnROYW1lIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhdGllbnROYW1lKFxyXG4gICAgICAgICAgICB0aGlzLmZha2VyLm5hbWUuZmlyc3ROYW1lKGdlbmRlciksXHJcbiAgICAgICAgICAgIHRoaXMuZmFrZXIubmFtZS5sYXN0TmFtZSgpLFxyXG4gICAgICAgICAgICB0aGlzLmZha2VyLm5hbWUuZmlyc3ROYW1lKCkuc3Vic3RyaW5nKDAsIDEpLFxyXG4gICAgICAgICAgICB0aGlzLmZha2VyLmZpbmFuY2UuYmljKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFkZHJlc3MoKTogQWRkcmVzcyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzKFxyXG4gICAgICAgICAgICB0aGlzLmZha2VyLmFkZHJlc3Muc3RyZWV0QWRkcmVzcygpLFxyXG4gICAgICAgICAgICB0aGlzLmZha2VyLmFkZHJlc3MuY2l0eSgpLFxyXG4gICAgICAgICAgICB0aGlzLmZha2VyLmFkZHJlc3Muc3RhdGVBYmJyKCksXHJcbiAgICAgICAgICAgIHRoaXMuZmFrZXIuYWRkcmVzcy56aXBDb2RlKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURlbW9ncmFwaGljKGdlbmRlcjogR2VuZGVyKTogRGVtb2dyYXBoaWMge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGVtb2dyYXBoaWMgKFxyXG4gICAgICAgICAgICB0aGlzLmZvcm1hdEQ4KHRoaXMuZmFrZXIuZGF0ZS5wYXN0KDkwKSksXHJcbiAgICAgICAgICAgIEdlbmRlcltnZW5kZXJdLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSZWNlbnREOCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdEQ4KHRoaXMuZmFrZXIuZGF0ZS5wYXN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0RDgoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApLnJlcGxhY2UoLy0vZywgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmVudW0gR2VuZGVyIHtcclxuICAgIE1hbGUgPSAwLFxyXG4gICAgRmVtYWxlID0gMVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zha2UtZmFjdG9yeS50cyIsImltcG9ydCB7IFBhdGllbnROYW1lIH0gZnJvbSBcIi4vcGF0aWVudC1uYW1lXCI7XHJcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tIFwiLi9hZGRyZXNzXCI7XHJcbmltcG9ydCB7IERlbW9ncmFwaGljIH0gZnJvbSBcIi4vZGVtb2dyYXBoaWNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgTmFtZTogUGF0aWVudE5hbWUsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IEFkZHJlc3M6IEFkZHJlc3MsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IERlbW9ncmFwaGljOiBEZW1vZ3JhcGhpY1xyXG4gICAgKXt9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGF0aWVudC1tb2RlbHMvcGF0aWVudC50cyIsImV4cG9ydCBjbGFzcyBQYXRpZW50TmFtZXtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBGaXJzdE5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgTGFzdE5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgTWlkZGxlSW5pdGlhbDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBNZW1iZXJJZDogc3RyaW5nXHJcbiAgICApe31cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYXRpZW50LW1vZGVscy9wYXRpZW50LW5hbWUudHMiLCJleHBvcnQgY2xhc3MgQWRkcmVzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgU3RyZWV0OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IENpdHk6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgU3RhdGU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgWmlwOiBzdHJpbmdcclxuICAgICl7fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhdGllbnQtbW9kZWxzL2FkZHJlc3MudHMiLCJleHBvcnQgY2xhc3MgRGVtb2dyYXBoaWN7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgRGF0ZU9mQmlydGg6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgR2VuZGVyOiBzdHJpbmdcclxuICAgICl7fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhdGllbnQtbW9kZWxzL2RlbW9ncmFwaGljLnRzIiwiZXhwb3J0IGNsYXNzIFgxMlNlZ21lbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50RGVsaW1pdGVyOiBzdHJpbmcgPSBcIipcIjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGluZURlbGltaXRlcjogc3RyaW5nID0gXCJ+XCI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5lbGVtZW50czogc3RyaW5nW10pe1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5lbGVtZW50cy5qb2luKHRoaXMuZWxlbWVudERlbGltaXRlcikgXHJcbiAgICAgICAgICAgICsgdGhpcy5saW5lRGVsaW1pdGVyKVxyXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy94MTItc2VnbWVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBtYXJnaW46IDJlbTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
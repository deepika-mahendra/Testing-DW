"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = require("body-parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = _mongoose["default"].Schema;
var workSchema = new schema({
  req_id: {
    type: String,
    required: true
  },
  employee_id: {
    type: String,
    required: true
  },
  isActive: {
    type: String
  },
  created_dt: {
    type: Date
  }
}, {
  collection: 'workmapping'
});

var _default = new _mongoose["default"].model('work', workSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL1dvcmtNYXBwaW5nL3dvcmsubW9kZWxzLmpzIl0sIm5hbWVzIjpbInNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwid29ya1NjaGVtYSIsInJlcV9pZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtcGxveWVlX2lkIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2R0IiwiRGF0ZSIsImNvbGxlY3Rpb24iLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBR0EsSUFBTUEsTUFBTSxHQUFHQyxxQkFBU0MsTUFBeEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsSUFBSUgsTUFBSixDQUFXO0FBQzFCSSxFQUFBQSxNQUFNLEVBQUM7QUFDSEMsSUFBQUEsSUFBSSxFQUFDQyxNQURGO0FBRUhDLElBQUFBLFFBQVEsRUFBQztBQUZOLEdBRG1CO0FBSzFCQyxFQUFBQSxXQUFXLEVBQUM7QUFDUkgsSUFBQUEsSUFBSSxFQUFDQyxNQURHO0FBRVJDLElBQUFBLFFBQVEsRUFBQztBQUZELEdBTGM7QUFVMUJFLEVBQUFBLFFBQVEsRUFBQztBQUNMSixJQUFBQSxJQUFJLEVBQUNDO0FBREEsR0FWaUI7QUFhMUJJLEVBQUFBLFVBQVUsRUFBQztBQUNQTCxJQUFBQSxJQUFJLEVBQUNNO0FBREU7QUFiZSxDQUFYLEVBaUJqQjtBQUFDQyxFQUFBQSxVQUFVLEVBQUM7QUFBWixDQWpCaUIsQ0FBbkI7O2VBa0JlLElBQUlYLHFCQUFTWSxLQUFiLENBQW1CLE1BQW5CLEVBQTBCVixVQUExQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgdXJsZW5jb2RlZCB9IGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcblxyXG5jb25zdCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IHdvcmtTY2hlbWEgPSBuZXcgc2NoZW1hKHtcclxuICAgIHJlcV9pZDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtcGxveWVlX2lkOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgaXNBY3RpdmU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZF9kdDp7XHJcbiAgICAgICAgdHlwZTpEYXRlLFxyXG4gICAgICAgXHJcbiAgICB9LFxyXG59LHtjb2xsZWN0aW9uOid3b3JrbWFwcGluZyd9KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCd3b3JrJyx3b3JrU2NoZW1hKTsiXX0=
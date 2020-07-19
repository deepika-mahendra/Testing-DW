"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  validationSchema: function validationSchema(body) {
    var schema = _joi["default"].object().keys({
      employee_id: _joi["default"].string().required(),
      name: _joi["default"].string().required(),
      dob: _joi["default"].date().required(),
      address: _joi["default"].string().required(),
      city: _joi["default"].string().required(),
      State: _joi["default"].string().required(),
      Pin: _joi["default"].number().required(),
      contact: _joi["default"].number().required(),
      email: _joi["default"].string().email().required(),
      Adhar_no: _joi["default"].number().required(),
      experience: _joi["default"].number().required(),
      skill_req: _joi["default"].string().required(),
      status: _joi["default"].string().required(),
      gender: _joi["default"].string().required(),
      isActive: _joi["default"].number(),
      created_date: _joi["default"].string()
    });

    var _Joi$validate = _joi["default"].validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbXBsb3llZV9pZCIsInN0cmluZyIsInJlcXVpcmVkIiwibmFtZSIsImRvYiIsImRhdGUiLCJhZGRyZXNzIiwiY2l0eSIsIlN0YXRlIiwiUGluIiwibnVtYmVyIiwiY29udGFjdCIsImVtYWlsIiwiQWRoYXJfbm8iLCJleHBlcmllbmNlIiwic2tpbGxfcmVxIiwic3RhdHVzIiwiZ2VuZGVyIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2RhdGUiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFDYztBQUNWQSxFQUFBQSxnQkFEVSw0QkFDT0MsSUFEUCxFQUNZO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsZ0JBQUlDLE1BQUosR0FBYUMsSUFBYixDQUFrQjtBQUM3QkMsTUFBQUEsV0FBVyxFQUFDSCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRGlCO0FBRTdCQyxNQUFBQSxJQUFJLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGd0I7QUFHN0JFLE1BQUFBLEdBQUcsRUFBQ1AsZ0JBQUlRLElBQUosR0FBV0gsUUFBWCxFQUh5QjtBQUk3QkksTUFBQUEsT0FBTyxFQUFDVCxnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSnFCO0FBSzdCSyxNQUFBQSxJQUFJLEVBQUNWLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFMd0I7QUFNN0JNLE1BQUFBLEtBQUssRUFBQ1gsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQU51QjtBQU83Qk8sTUFBQUEsR0FBRyxFQUFDWixnQkFBSWEsTUFBSixHQUFhUixRQUFiLEVBUHlCO0FBUTdCUyxNQUFBQSxPQUFPLEVBQUNkLGdCQUFJYSxNQUFKLEdBQWFSLFFBQWIsRUFScUI7QUFTN0JVLE1BQUFBLEtBQUssRUFBQ2YsZ0JBQUlJLE1BQUosR0FBYVcsS0FBYixHQUFxQlYsUUFBckIsRUFUdUI7QUFVN0JXLE1BQUFBLFFBQVEsRUFBQ2hCLGdCQUFJYSxNQUFKLEdBQWFSLFFBQWIsRUFWb0I7QUFXN0JZLE1BQUFBLFVBQVUsRUFBQ2pCLGdCQUFJYSxNQUFKLEdBQWFSLFFBQWIsRUFYa0I7QUFZN0JhLE1BQUFBLFNBQVMsRUFBQ2xCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFabUI7QUFhN0JjLE1BQUFBLE1BQU0sRUFBQ25CLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFic0I7QUFjN0JlLE1BQUFBLE1BQU0sRUFBQ3BCLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFkc0I7QUFlN0JnQixNQUFBQSxRQUFRLEVBQUNyQixnQkFBSWEsTUFBSixFQWZvQjtBQWdCN0JTLE1BQUFBLFlBQVksRUFBQ3RCLGdCQUFJSSxNQUFKO0FBaEJnQixLQUFsQixDQUFmOztBQURrQix3QkFvQklKLGdCQUFJdUIsUUFBSixDQUFhekIsSUFBYixFQUFrQkMsTUFBbEIsQ0FwQko7QUFBQSxRQW9CWHlCLEtBcEJXLGlCQW9CWEEsS0FwQlc7QUFBQSxRQW9CTEMsS0FwQkssaUJBb0JMQSxLQXBCSzs7QUFxQmxCLFFBQUdELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUFsQixFQUEwQjtBQUN0QixhQUFPO0FBQUNGLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0g7O0FBQ0QsV0FBTTtBQUFDQyxNQUFBQSxLQUFLLEVBQUxBO0FBQUQsS0FBTjtBQUNDO0FBMUJLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIGVtcGxveWVlX2lkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBuYW1lOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBkb2I6Sm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBhZGRyZXNzOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBjaXR5OkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBTdGF0ZTpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgUGluOkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBjb250YWN0OkpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBlbWFpbDpKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBBZGhhcl9ubzpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZTpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgc2tpbGxfcmVxOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICBzdGF0dXM6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGdlbmRlcjpKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6Sm9pLm51bWJlcigpLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2RhdGU6Sm9pLnN0cmluZygpLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSJdfQ==
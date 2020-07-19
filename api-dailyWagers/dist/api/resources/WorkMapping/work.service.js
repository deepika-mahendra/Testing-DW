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
      req_id: _joi["default"].string().required(),
      isActive: _joi["default"].string(),
      created_dt: _joi["default"].date()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL1dvcmtNYXBwaW5nL3dvcmsuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbXBsb3llZV9pZCIsInN0cmluZyIsInJlcXVpcmVkIiwicmVxX2lkIiwiaXNBY3RpdmUiLCJjcmVhdGVkX2R0IiwiZGF0ZSIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxXQUFXLEVBQUNILGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFEaUI7QUFFN0JDLE1BQUFBLE1BQU0sRUFBQ04sZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUZzQjtBQUc3QkUsTUFBQUEsUUFBUSxFQUFDUCxnQkFBSUksTUFBSixFQUhvQjtBQUk3QkksTUFBQUEsVUFBVSxFQUFDUixnQkFBSVMsSUFBSjtBQUprQixLQUFsQixDQUFmOztBQURrQix3QkFRSVQsZ0JBQUlVLFFBQUosQ0FBYVosSUFBYixFQUFrQkMsTUFBbEIsQ0FSSjtBQUFBLFFBUVhZLEtBUlcsaUJBUVhBLEtBUlc7QUFBQSxRQVFMQyxLQVJLLGlCQVFMQSxLQVJLOztBQVNsQixRQUFHRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbEIsRUFBMEI7QUFDdEIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU07QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQU47QUFDQztBQWRLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gJ2pvaSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcclxuICAgICAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XHJcbiAgICAgICAgICAgIGVtcGxveWVlX2lkOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICByZXFfaWQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOkpvaS5zdHJpbmcoKSxcclxuICAgICAgICAgICAgY3JlYXRlZF9kdDpKb2kuZGF0ZSgpLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qge2Vycm9yLHZhbHVlfSA9IEpvaS52YWxpZGF0ZShib2R5LHNjaGVtYSk7XHJcbiAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuZGV0YWlscyl7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57dmFsdWV9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgfSJdfQ==
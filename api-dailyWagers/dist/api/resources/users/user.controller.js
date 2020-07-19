"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.models"));

var _user2 = _interopRequireDefault(require("./user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    _user["default"].find().then(function (user) {
      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _userService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validati = _user2["default"].validationSchema(req.body), error = _userService$validati.error, value = _userService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _user["default"].create(value).then(function (item) {
                return res.json(item);
              })["catch"](function (err) {
                return res.status(500).json(err);
              });

            case 6:
              console.log(value);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _user["default"].findById(id).then(function (user) {
      if (!user) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  DeleteElement: function DeleteElement(req, res) {
    var id = req.params.id;

    _user["default"].findByIdAndRemove(id).then(function (user) {
      if (!user) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _user["default"].findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (user) {
      if (!user) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(user);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _userService$validati2, error, value;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validati2 = _user2["default"].validationSchema(req.body), error = _userService$validati2.error, value = _userService$validati2.value;

              if (!(error && error.details)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(500).json(error));

            case 4:
              _context2.next = 6;
              return _user["default"].create(value).then(function (item) {
                return res.json(item);
              })["catch"](function (err) {
                return res.status(500).json(err);
              });

            case 6:
              console.log(value);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }))();
  },
  login: function login(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _userService$validate, error, value, User;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _userService$validate = _user2["default"].validateLoginSchema(req.body), error = _userService$validate.error, value = _userService$validate.value;

              if (!(error && error.details)) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", res.status(500).json(error));

            case 4:
              _context3.next = 6;
              return _user["default"].findOne({
                email: value.email
              });

            case 6:
              User = _context3.sent;

              if (User) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt("return", res.status(400).json({
                err: 'Invalid email'
              }));

            case 11:
              if (!(User.password != value.password)) {
                _context3.next = 15;
                break;
              }

              return _context3.abrupt("return", res.status(400).json({
                err: 'Invalid password'
              }));

            case 15:
              return _context3.abrupt("return", res.json(User));

            case 16:
              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 18]]);
    }))();
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsInVzZXIiLCJmaW5kIiwidGhlbiIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJjcmVhdGUiLCJ1c2VyU2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiRGVsZXRlRWxlbWVudCIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJzaWdudXAiLCJsb2dpbiIsInZhbGlkYXRlTG9naW5TY2hlbWEiLCJlbWFpbCIsIlVzZXIiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztlQUNjO0FBQ2RBLEVBQUFBLE9BRGMsbUJBQ05DLEdBRE0sRUFDRkMsR0FERSxFQUNFQyxJQURGLEVBQ087QUFDakJDLHFCQUFLQyxJQUFMLEdBQVlDLElBQVosQ0FBaUIsVUFBQUYsSUFBSTtBQUFBLGFBQUlGLEdBQUcsQ0FBQ0ssSUFBSixDQUFTSCxJQUFULENBQUo7QUFBQSxLQUFyQixXQUNPLFVBQUFJLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSCxHQUphO0FBS1JFLEVBQUFBLE1BTFEsa0JBS0RULEdBTEMsRUFLR0MsR0FMSCxFQUtPO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRVFTLGtCQUFZQyxnQkFBWixDQUE2QlgsR0FBRyxDQUFDWSxJQUFqQyxDQUZSLEVBRU5DLEtBRk0seUJBRU5BLEtBRk0s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QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyIGZyb20gJy4vdXNlci5tb2RlbHMnXHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmV4cG9ydCBkZWZhdWx0e1xyXG5maW5kQWxsKHJlcSxyZXMsbmV4dCl7XHJcbiAgICB1c2VyLmZpbmQoKS50aGVuKHVzZXIgPT4gcmVzLmpzb24odXNlcikpXHJcbiAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG59LFxyXG5hc3luYyBjcmVhdGUocmVxLHJlcyl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX09IHVzZXJTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgIGF3YWl0IHVzZXIuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufSxcclxuZmluZE9uZShyZXEscmVzKXtcclxuICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgIHVzZXIuZmluZEJ5SWQoaWQpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJ1c2VyIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24odXNlcik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxufSxcclxuXHJcbkRlbGV0ZUVsZW1lbnQocmVxLHJlcyl7XHJcbiAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICB1c2VyLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwidXNlciBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHVzZXIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbn0sXHJcbnVwZGF0ZShyZXEscmVzKXtcclxuICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxyXG4gICAgdXNlci5maW5kT25lQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OnRydWV9KS50aGVuKHVzZXI9PntcclxuICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiBcInVzZXIgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbih1c2VyKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG59LFxyXG5hc3luYyBzaWdudXAocmVxLHJlcyl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX09IHVzZXJTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgIGF3YWl0IHVzZXIuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufSxcclxuYXN5bmMgbG9naW4ocmVxLHJlcyl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX09IHVzZXJTZXJ2aWNlLnZhbGlkYXRlTG9naW5TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBVc2VyID0gYXdhaXQgdXNlci5maW5kT25lKHtlbWFpbDp2YWx1ZS5lbWFpbH0pO1xyXG4gICAgICAgIGlmKCFVc2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6J0ludmFsaWQgZW1haWwnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoVXNlci5wYXNzd29yZCAhPSB2YWx1ZS5wYXNzd29yZCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOidJbnZhbGlkIHBhc3N3b3JkJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKFVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcbn07Il19
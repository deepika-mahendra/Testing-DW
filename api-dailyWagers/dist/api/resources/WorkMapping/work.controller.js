"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _work = _interopRequireDefault(require("./work.models"));

var _work2 = _interopRequireDefault(require("./work.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res, next) {
    // res.json({msg:"FInd all users!!"})
    _work["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _workService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _workService$validati = _work2["default"].validationSchema(req.body), error = _workService$validati.error, value = _workService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _work["default"].create(value).then(function (item) {
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

    _work["default"].findById(id).then(function (data) {
      if (!data) {
        return res.status(400).json({
          err: "emp not found."
        });
      }

      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _work["default"].findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "emp not found."
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  "delete": function _delete(req, res) {
    var id = req.params.id;

    _work["default"].findByIdAndRemove(id).then(function (data) {
      if (!data) {
        return res.status(400).json({
          err: "user not found."
        });
      }

      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL1dvcmtNYXBwaW5nL3dvcmsuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwibmV4dCIsIndvcmsiLCJmaW5kIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiY3JlYXRlIiwid29ya1NlcnZpY2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsInVwZGF0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCIkc2V0IiwiZW1wIiwiZmluZEJ5SWRBbmRSZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7ZUFDYztBQUNWQSxFQUFBQSxPQURVLG1CQUNGQyxHQURFLEVBQ0VDLEdBREYsRUFDTUMsSUFETixFQUNXO0FBQ2pCO0FBQ0FDLHFCQUFLQyxJQUFMLEdBQVlDLElBQVosQ0FBaUIsVUFBQUMsSUFBSTtBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQUFyQixXQUNPLFVBQUFFLEdBQUc7QUFBQSxhQUFJUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRFY7QUFFSCxHQUxTO0FBTUpFLEVBQUFBLE1BTkksa0JBTUdWLEdBTkgsRUFNT0MsR0FOUCxFQU1XO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRVVVLGtCQUFZQyxnQkFBWixDQUE2QlosR0FBRyxDQUFDYSxJQUFqQyxDQUZWLEVBRUpDLEtBRkkseUJBRUpBLEtBRkksRUFFRUMsS0FGRix5QkFFRUEsS0FGRjs7QUFBQSxvQkFHUkQsS0FBSyxJQUFJQSxLQUFLLENBQUNF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RyxDQUFDTSxJQUFKLENBQVNELElBQVQsQ0FBUDtBQUNILEtBTEQsV0FNTyxVQUFBRSxHQUFHO0FBQUEsYUFBSVAsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQU5WO0FBT0g7QUFsRFMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3b3JrIGZyb20gJy4vd29yay5tb2RlbHMnO1xyXG5pbXBvcnQgd29ya1NlcnZpY2UgZnJvbSAnLi93b3JrLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyxuZXh0KXtcclxuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiRkluZCBhbGwgdXNlcnMhIVwifSlcclxuICAgICAgICB3b3JrLmZpbmQoKS50aGVuKGRhdGEgPT4gcmVzLmpzb24oZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX09IHdvcmtTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICAgICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgIGF3YWl0IHdvcmsuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmluZE9uZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgd29yay5maW5kQnlJZChpZCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYoIWRhdGEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiZW1wIG5vdCBmb3VuZC5cIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxyXG4gICAgICAgIHdvcmsuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzp0cnVlfSkudGhlbihlbXA9PntcclxuICAgICAgICAgICAgaWYoIWVtcCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJlbXAgbm90IGZvdW5kLlwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgd29yay5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYoIWRhdGEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwidXNlciBub3QgZm91bmQuXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgfSxcclxuXHJcbn0iXX0=
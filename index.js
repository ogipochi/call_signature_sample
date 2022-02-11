var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 戻り血を数値型で指定し、数値をreturn
function func_1(a) {
    return 10;
}
// 戻り血をvoidで指定、returnを呼び出さない
function func_2(a) {
}
// 戻り血をvoidで指定、returnでなにも返さない
function func_3(a) {
    return;
}
var func_4_variable = function func_4(a) {
    return 10;
};
var func_5_variable = function (a) {
    return 10;
};
var func_6_variable = function func_6(a) {
    return;
};
var func_7_variable = function (a) {
    return null;
};
var func_8_variable = function (a) {
    return 10;
};
/**
 * ただ与えられた関数を実行するだけのクラス
 */
var SampleExecuter = /** @class */ (function () {
    function SampleExecuter() {
    }
    SampleExecuter.prototype.executeFunc = function (first, second) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, first()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, second()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SampleExecuter;
}());
/**
 * モンスターが現れるまでのセリフを管理する関数
 * @returns
 */
var priorConversation = function () {
    return new Promise(function (resolve, reject) {
        console.log("おっさん「この辺りはモンスターが出るぞ、気をつけろ」");
        setTimeout(function () {
            console.log("おっさん「そこにいるのは…モンスターだ！」");
            resolve();
        }, 3000);
    });
};
/**
 * モンスターとバトルする処理
 */
var startBattle = function () {
    return new Promise(function (resolve, reject) {
        console.log("モンスターが現れた！！！");
        setTimeout(function () {
            console.log("おっさんの攻撃！！！モンスターを倒した！！！");
        }, 2000);
    });
};
// 実行
var sampleExecuter = new SampleExecuter();
sampleExecuter.executeFunc(priorConversation, startBattle);
sampleExecuter.executeFunc(function () { console.log("hello"); }, function () { console.log("world"); });

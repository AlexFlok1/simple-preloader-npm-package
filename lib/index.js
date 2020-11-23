"use strict";
//import '../src/main.css';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloader = void 0;
var Preloader = /** @class */ (function () {
    function Preloader() {
    }
    Preloader.prototype.ActivatePreloader = function (params, box_params) {
        var el = document.createElement('div');
        el.setAttribute("id", "EASY-COOL-PRELOADER");
        el.setAttribute("style", "position:fixed; top:0; left:0; height:100vh; width:100%; z-index:50000; background: " + (params.background_color || 'rgba(0,0,0,.5)'));
        document.getElementsByTagName('body')[0].appendChild(el);
        //create preloader box
        var el_box = document.createElement('div');
        el_box.setAttribute('id', 'Preloader-Box');
        el_box.setAttribute('style', "position:absolute;\n             text-align:center; \n             top:46%;\n             left:46%;\n             width:8%;\n             height:8%;\n             background: " + (box_params.background_color || 'rgba(255,255,255,0)') + ";\n             border-radius:0px;");
        el.appendChild(el_box);
        //add svg
        var el_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        el_svg.setAttribute('style', "height:100%; width:100%");
        el_box.appendChild(el_svg);
        //create preloader animation
        var el_preloader = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        el_preloader.setAttribute('cx', '55%');
        el_preloader.setAttribute('cy', '40%');
        el_preloader.setAttribute('r', '20');
        el_preloader.setAttribute('id', 'Preloader-Anm');
        el_preloader.setAttribute('style', "fill:transparent;\n            stroke-width:5;\n            stroke:black;\n            stroke-dasharray: 1000;\n            transform-origin:center;\n            transform:rotateZ(-90deg)");
        el_preloader.animate([
            {
                strokeDashoffset: 1000
            },
            {
                strokeDashoffset: 500
            }
        ], { duration: 2000, iterations: Infinity, });
        el_svg.appendChild(el_preloader);
        return 'Preloader is in process!';
    };
    Preloader.prototype.StopPreloader = function () {
        var _a;
        (_a = document.getElementById('EASY-COOL-PRELOADER')) === null || _a === void 0 ? void 0 : _a.remove();
        return 'StopPreloader';
    };
    return Preloader;
}());
exports.Preloader = Preloader;
//# sourceMappingURL=index.js.map
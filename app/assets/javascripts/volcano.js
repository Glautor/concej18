"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = React.Component;
var PropTypes = React.PropTypes;

var SquigglyFilter = function SquigglyFilter(props) {
  var id = props.id,
      i = props.i,
      baseFrequency = props.baseFrequency,
      numOctaves = props.numOctaves,
      type = props.type,
      scale = props.scale;

  var turbulenceProps = {
    baseFrequency: baseFrequency,
    numOctaves: numOctaves,
    type: type,
    seed: i
  };
  var displacementMapProps = {
    scale: scale
  };

  return React.createElement(
    "filter",
    { id: id + "-" + i },
    React.createElement("feTurbulence", _extends({}, turbulenceProps, {
      result: "noise"
    })),
    React.createElement("feDisplacementMap", _extends({}, displacementMapProps, {
      "in": "SourceGraphic",
      xChannelSelector: "R",
      yChannelSelector: "G"
    }))
  );
};
// TODO see react context
SquigglyFilter.propTypes = {
  id: PropTypes.string.isRequired,
  i: PropTypes.number,
  baseFrequency: PropTypes.number,
  numOctaves: PropTypes.number,
  scale: PropTypes.number,
  type: PropTypes.string
};
SquigglyFilter.defaultProps = {
  i: 0,
  baseFrequency: 0.02,
  numOctaves: 3,
  scale: 2,
  type: 'turbulence'
};

var Squiggly = function (_Component) {
  _inherits(Squiggly, _Component);

  function Squiggly(props) {
    _classCallCheck(this, Squiggly);

    var _this = _possibleConstructorReturn(this, (Squiggly.__proto__ || Object.getPrototypeOf(Squiggly)).call(this, props));

    _this.started = false;

    _this.state = Object.assign({
      i: 0,
      seed: 0
    }, _this.props);

    _this.loop = _this.loop.bind(_this);
    _this.getFilterName = _this.getFilterName.bind(_this);
    return _this;
  }

  _createClass(Squiggly, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.start();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.start();
    }
  }, {
    key: "getFilterName",
    value: function getFilterName() {
      return "url('#" + this.props.id + "-" + this.state.i + "')";
    }
  }, {
    key: "start",
    value: function start() {
      if (this.props.start) {
        if (!this.started) {
          this.started = true;
          this.loop();
        }
      } else {
        this.started = false;
      }
    }
  }, {
    key: "loop",
    value: function loop() {
      if (this.props.start) {
        this.setState({ i: (this.state.i + 1) % 10 });
        setTimeout(this.loop, this.props.freq);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: this.props.id, style: { filter: this.getFilterName() } },
        React.createElement(
          "svg",
          { style: { display: 'none' } },
          React.createElement(SquigglyFilter, this.props)
        ),
        this.props.children
      );
    }
  }]);

  return Squiggly;
}(Component);

// TODO Context


Squiggly.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  scale: PropTypes.number,
  baseFrequency: PropTypes.number,
  numOctaves: PropTypes.number,
  type: PropTypes.string,
  freq: PropTypes.number,
  start: PropTypes.bool
};
Squiggly.defaultProps = {
  id: 'squiggly',
  children: null,
  scale: 2,
  baseFrequency: 0.02,
  numOctaves: 2,
  type: 'turbulence', // fractalNoise | turbulence
  freq: 50,
  start: true
};

var SquigglySVG = function (_Squiggly) {
  _inherits(SquigglySVG, _Squiggly);

  function SquigglySVG() {
    _classCallCheck(this, SquigglySVG);

    return _possibleConstructorReturn(this, (SquigglySVG.__proto__ || Object.getPrototypeOf(SquigglySVG)).apply(this, arguments));
  }

  _createClass(SquigglySVG, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "g",
        { id: this.props.id, style: { filter: this.getFilterName() } },
        React.createElement(
          "defs",
          null,
          React.createElement(SquigglyFilter, this.state)
        ),
        this.props.children
      );
    }
  }]);

  return SquigglySVG;
}(Squiggly);

var App = function (_Component2) {
  _inherits(App, _Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      eruption: false
    };

    _this3.toggleLava = _this3.toggleLava.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: "toggleLava",
    value: function toggleLava() {
      this.setState({ eruption: !this.state.eruption });
      if(!this.state.eruption){
        setTimeout(function(){
          $(".text-light-blue").css('border-bottom', '2px solid #ff5345'); 
        }, 1000);
        setTimeout(function(){
          $(".text-light-blue").css('border-left', '2px solid #ff5345'); 
          $(".text-light-blue").css('border-right', '2px solid #ff5345'); 
        }, 2000);
        setTimeout(function(){
          $(".text-light-blue").css('border-bottom', '3px solid #ff5345'); 
          //background: linear-gradient(#ffb444,#fe8443,#ff5345);
            
            var interval = 0;
            var gradient_percent = 0;
            var interval_value = 5;
            var interval_gradient = setInterval(function(){
               $(".text-light-blue a").css('color', '#fff');
                if(interval == 130) clearInterval(interval_gradient);

                gradient_percent += interval_value;
                $('.text-light-blue').css('background', 'linear-gradient(to right, #ffb444 '+gradient_percent+'%,#ff5345 100%, #fe8443 '+gradient_percent+'%)');

                ++interval;
            }, 300);


        }, 4000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "svg",
        { id: "volcano", viewBox: "0 0 200 200", onClick: this.toggleLava },
        React.createElement(
          SquigglySVG,
          {
            id: "mountain",
            freq: this.state.eruption ? 25 : 100
          },
          React.createElement("path", { id: "XMLID_26_", className: "st0", d: "M36.5,204.2c0,0,35.7-89.7,44-96.6c8.3-6.9,31.1-22.4,51.6,0c13.3,16.1,39.6,96.6,39.6,96.6 H36.5z" }),
          React.createElement("path", { id: "XMLID_2_", className: "st1", d: "M86.4,111.9c7.2-15.1,31.9-10.1,31.9-10.1s3.3,5,3.6,11.1s-20.2,7-20.2,7S79.2,127,86.4,111.9z" }),
          this.state.eruption ? React.createElement(
            "g",
            { id: "face" },
            React.createElement("ellipse", { id: "XMLID_10_", className: "st1", cx: "104.7", cy: "134", rx: "1.2", ry: "1.8" }),
            React.createElement("ellipse", { id: "XMLID_8_", className: "st1", cx: "129.5", cy: "131.3", rx: "1.4", ry: "2.1" }),
            React.createElement(
              "g",
              { id: "mouth" },
              React.createElement("ellipse", { id: "XMLID_13_", className: "st1", cx: "120.5", cy: "143", rx: "2.6", ry: "2.9" }),
              React.createElement("path", { id: "XMLID_12_", className: "st3", d: "M117.9,143.5c0.2,1.4,1.3,2.4,2.6,2.4c0.5,0,1-0.2,1.4-0.5c-0.2-1.4-1.3-2.4-2.6-2.4 C118.8,143,118.3,143.2,117.9,143.5z" })
            )
          ) : React.createElement(
            "g",
            { id: "face2" },
            React.createElement("path", { id: "XMLID_21_", className: "st4", d: "M101.3,134.3c0,0-0.3-3,3.1-3s3.1,3,3.1,3" }),
            React.createElement("path", { id: "XMLID_22_", className: "st4", d: "M126.4,133.8c0,0-0.3-3.4,3.1-3.4c3.5,0,3.1,3.4,3.1,3.4" }),
            React.createElement("path", { id: "XMLID_20_", className: "st4", d: "M124.9,141c0,0,0.6,5.5-6.5,5.5c-7.1,0-6.5-5.5-6.5-5.5" })
          )
        ),
        React.createElement(
          SquigglySVG,
          {
            id: "lava",
            scale: 6,
            baseFrequency: 0.09,
            numOctaves: 10,
            type: "fractalNoise",
            start: this.state.eruption
          },
          this.state.eruption ? React.createElement(
            "g",
            null,
            React.createElement("path", { id: "XMLID_3_", className: "st6", d: "M94,113.6c0,0-2.4-12.8-3-22.6C90.3,81.1,85-6,85-6h44.1c0,0-6.7,58.8-9.6,72.2 c-2.9,13.4-3.4,45.6-3.4,45.6L94,113.6z" }),
            React.createElement("path", { id: "XMLID_4_", className: "st7", d: "M98.6,114.9c0,0-1.4-83.1-2.7-94.1S91.8-4,91.8-6s29.4,1.1,30.8-0.2c1.4-1.3-3.1,49.6-6.7,61.3 c-3.6,11.7-2.9,58.1-2.9,58.1L98.6,114.9z" }),
            React.createElement("path", { id: "XMLID_5_", className: "st8", d: "M104.4,113.6c0,0,1.9-65.1-0.9-75.5c-2.8-10.4-1-44-1-44s10.3,0,12.8,0 c2.5,0-6.3,117.8-6.3,117.8L104.4,113.6z" }),
            React.createElement(
              "g",
              { id: "bubbles" },
              React.createElement("path", { id: "XMLID_7_", className: "st6", d: "M79,53.2c0,1.5-2.8,2.8-2.8,2.8s-2.8-1.2-2.8-2.8s1.2-2.8,2.8-2.8S79,51.7,79,53.2z" }),
              React.createElement("circle", { id: "XMLID_9_", className: "st8", cx: "80.6", cy: "70.6", r: "1.6" }),
              React.createElement("circle", { id: "XMLID_11_", className: "st7", cx: "75.4", cy: "83.9", r: "1.9" }),
              React.createElement("path", { id: "XMLID_14_", className: "st7", d: "M62,30.4c0,2.4-1.1,2.4-2.4,2.4s-2.4-1.1-2.4-2.4s1.1-2.4,2.4-2.4S62,28,62,30.4z" }),
              React.createElement("ellipse", { id: "XMLID_15_", className: "st8", cx: "133.2", cy: "94", rx: "2.3", ry: "1.7" }),
              React.createElement("ellipse", { id: "XMLID_16_", className: "st6", cx: "125.5", cy: "79.7", rx: "3.6", ry: "4.2" }),
              React.createElement("circle", { id: "XMLID_17_", className: "st8", cx: "131.4", cy: "60", r: "2.2" }),
              React.createElement("circle", { id: "XMLID_18_", className: "st7", cx: "145.6", cy: "54.1", r: "1.9" }),
              React.createElement("circle", { id: "XMLID_19_", className: "st6", cx: "142.6", cy: "32.4", r: "2.1" })
            )
          ) : ''
        ),
        React.createElement(
          "g",
          { id: "mask" },
          React.createElement("path", { id: "XMLID_6_", className: "st0", d: "M83.8,109.2c20.4,5.6,40.8-7.4,40.8-7.4s-0.6,20.6-4.6,21.6c-4,1-37.7,5.6-37.7,5.6" })
        )
      );
    }
  }]);

  return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
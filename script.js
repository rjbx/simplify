const Btn = (props) =>
React.createElement("button", { class: props.class, onClick: props.handleClick, value: props.text, id: props.value ? props.value : props.text }, props.text);
const Logo = () =>
React.createElement("h3", { id: "logo" }, "TR-101");
const Title = () =>
React.createElement("h1", { id: "title" }, React.createElement("a", { href: "https://rjbx.github.io/simplify" }, "simplify"));
const Attribution = () =>
React.createElement("h5", { id: "attribution" }, "Made by rjbx with React and MathJS");
const Readout = (props) =>
React.createElement("section", { id: "readout" },
React.createElement("table", { onClick: props.handleClick },
React.createElement("input", { value: props.expr, placeholder: props.temp, onChange: props.handleChange, onClick: props.handleClick })));


const Keypad = (props) =>
React.createElement("section", { id: "keypad" },
React.createElement("table", null,
React.createElement("tbody", null,
React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "del", class: "red-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "(", class: "red-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: ")", class: "red-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "=", class: "red-button" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "9", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "8", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "7", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "+", class: "red-button" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "6", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "5", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "4", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "\u2013", class: "red-button" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "3", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "2", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "1", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "*", class: "red-button" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "0", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: ".", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "^", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "/", class: "red-button" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "log", value: "log10", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "ln", value: "log", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "e", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "sqrt", class: "red-button" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "sin", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "cos", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "tan", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "pi", class: "red-button" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "arcsin", value: "asin", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "arccos", value: "acos", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "arctan", value: "atan", class: "white-button" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "deg", class: "red-button" })))));




const Panel = (props) =>
React.createElement("section", { id: "panel" },
React.createElement("button", { id: "switch" },
React.createElement("table", null,
React.createElement("tr", null,
React.createElement("td", { class: "toggle", onClick: props.handleClick }),
React.createElement("td", { class: "toggle", onClick: props.handleClick }),
React.createElement("td", { class: "toggle", onClick: props.handleClick }),
React.createElement("td", { class: "toggle", onClick: props.handleClick })))));




const Plate = (props) =>
React.createElement("section", { id: "plate" },
React.createElement("table", null,
React.createElement("tr", null,
React.createElement("td", null, React.createElement(Logo, null)),
React.createElement("td", null,
React.createElement(Btn, { handleClick: props.handleClick, class: "blue-button", text: "AC" })))));




const Canvas = () =>
React.createElement("canvas", { id: "canvas", width: 400, height: 350 });
const Terminal = (props) =>
React.createElement("div", { id: "terminal" }, React.createElement("ul", null,
props.save.map((v, i) => {
  return React.createElement("li", null, v);
})));

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("header", null, React.createElement("div", { class: "row" }, React.createElement("div", { class: "column" }, React.createElement(Title, null))));
  }}

class Monitor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("section", { id: "monitor" },
      React.createElement(Terminal, { save: this.props.save }),
      React.createElement("center", null,
      React.createElement("div", { class: "reset" },
      React.createElement("button", null, "\u267B")))));




  }}


class Blackboard extends React.Component {
  constructor(props) {
    super(props);
    this.initCanvas = this.initCanvas.bind(this);
  }
  componentDidMount() {
    this.initCanvas();
  }
  initCanvas() {
    let canvas = document.querySelector('canvas');
    let signaturePad = new SignaturePad(
    canvas, {
      backgroundColor: '#333',
      penColor: '#fff' });

  }
  render() {
    return (
      React.createElement("section", { id: "blackboard" },
      React.createElement(Canvas, null),
      React.createElement("center", null,
      React.createElement("div", { class: "reset" },
      React.createElement("button", null, "\u267B")))));




  }}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("section", { id: "calculator" },
      React.createElement(Readout, { expr: this.props.expr, temp: this.props.temp, handleChange: this.props.handleChange }),
      React.createElement(Plate, { handleClick: this.props.handleClick }),
      React.createElement(Panel, { handleClick: this.props.handleClick }),
      React.createElement(Keypad, { handleClick: this.props.handleClick })));


  }}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("main", null,
      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "column col-md-4" },
      React.createElement(Blackboard, null)),

      React.createElement("div", { class: "column col-md-4" },
      React.createElement(Calculator, {
        expr: this.props.expr,
        temp: this.props.temp,
        handleChange: this.props.handleChange,
        handleClick: this.props.handleClick })),


      React.createElement("div", { class: "column col-md-4" },
      React.createElement(Monitor, { expr: this.props.expr, save: this.props.save })))));




  }}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("footer", null, React.createElement("div", { class: "row" }, React.createElement("div", { class: "column" }, React.createElement(Attribution, null))));
  }}


class Simplify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: '',
      save: [],
      temp: '0',
      mode: false };

    WebFont.load({
      google: {
        families: ['Quantico:400,700i', 'Poiret One'] } });


    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleMode = this.toggleMode(this);
  }
  handleClick(event) {
    let id = event.target.id;
    console.log(event.target.id);
    switch (id) {
      case 'AC':this.handleInput('');break;
      case 'toggle':this.toggleMode();break;
      case '=':this.handleEval();break;
      case 'del':this.handleInput(this.state.expr.slice(0, -1));break;
      default:this.handleInput(this.state.expr + id);}

  }
  handleChange(event) {
    let value = event.target.value;
    console.log(value);
    switch (value.slice(-1)) {
      case '=':this.handleEval();break;
      default:this.handleInput(value);}

  }
  handleInput(value) {
    this.setState({
      expr: value });

  }
  handleEval() {
    let result = math.evaluate(this.state.expr);
    let saves = this.state.save.concat(this.state.expr + ' = ' + result);
    this.setState({
      expr: result,
      save: saves });

  }
  toggleMode() {
    let inverse = !this.state.dark;
    this.setState({
      mode: inverse });

  }
  render() {
    return (
      React.createElement("body", null,
      React.createElement(Header, { mode: this.state.mode }),
      React.createElement(Main, { expr: this.state.expr, save: this.state.save, temp: this.state.temp, mode: this.state.mode, handleChange: this.handleChange, handleClick: this.handleClick }),
      React.createElement(Footer, { mode: this.state.mode })));


  }}
;

ReactDOM.render(React.createElement(Simplify, null), document.getElementById('react'));
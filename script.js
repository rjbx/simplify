const Btn = (props) =>
React.createElement("button", { style: { width: '60px' }, onClick: props.handleClick, value: props.text }, props.text);
const Title = () =>
React.createElement("center", null, React.createElement("h1", null, "Calculator"));
const Attribution = () =>
React.createElement("center", null, React.createElement("h5", null, "Made by rjbx with React and MathJS"));
const Display = (props) =>
React.createElement("table", { style: { margin: 'auto' }, onClick: props.handleClick },
React.createElement("input", { style: { width: '235px' }, value: props.expr, placeholder: props.temp, onChange: props.handleChange, onClick: props.handleClick }));

const Keypad = (props) =>
React.createElement("table", { style: { margin: 'auto' } },
React.createElement("tbody", null,
React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "del" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "(" }),
React.createElement(Btn, { handleClick: props.handleClick, text: ")" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "=" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "9" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "8" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "7" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "+" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "6" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "5" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "4" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "\u2013" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "3" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "2" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "1" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "*" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "0" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "." }),
React.createElement(Btn, { handleClick: props.handleClick, text: "^" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "/" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "log" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "ln" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "e^" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "sqrt" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "sin" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "cos" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "tan" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "pi" })),

React.createElement("tr", null,
React.createElement(Btn, { handleClick: props.handleClick, text: "arcsin" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "arccos" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "arctan" }),
React.createElement(Btn, { handleClick: props.handleClick, text: "deg" }))));



/* 'solar panel' switch for activation in dark mode */
const Panel = () =>
React.createElement("table", { style: { margin: 'auto', border: '1px solid grey', width: '240px', height: '20px' } },
React.createElement("tr", null));



class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("header", null, React.createElement(Title, null));
  }}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("main", null,
      React.createElement(Panel, null),
      React.createElement(Display, { expr: this.props.expr, temp: this.props.temp, handleChange: this.props.handleChange }),
      React.createElement(Keypad, { handleClick: this.props.handleClick })));


  }}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("footer", null, React.createElement(Attribution, null));
  }}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: '',
      temp: '0' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    let value = event.target.value;
    console.log(event.target.value);
    switch (value) {
      case '=':this.handleEval();break;
      case 'del':this.handleInput(this.state.expr.slice(0, -1));break;
      default:this.handleInput(this.state.expr + value);}

  }
  handleChange(event) {
    this.handleInput(event.target.value);
  }
  handleInput(value) {
    this.setState({
      expr: value });

  }
  handleEval() {
    let result = math.evaluate(this.state.expr);
    this.setState({
      expr: '',
      temp: result,
      dark: false });

  }
  render() {
    return (
      React.createElement("body", null,
      React.createElement(Header, null),
      React.createElement(Main, { expr: this.state.expr, temp: this.state.temp, handleChange: this.handleChange, handleClick: this.handleClick }),
      React.createElement(Footer, null)));


  }}
;

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('react'));
import React, {Component} from "react";
import logo from './logo.svg';
import { api } from './helpers.jsx'

export function Button(props) {
  const className = props.className !== undefined
    ? props.className
    : "btn btn-primary";
  const text = props.text !== undefined
    ? props.text
    : "Click me";
  const onClick = (() => {
    if (props.lambda) {
      return props.lambda;
    } else if (props.action && props.dispatch) {
      return() => props.dispatch(props.action);
    } else {
      return() => alert("Button was clicked (no action)");
    }
  })();
  return (<button className={className} onClick={event => {
      event.preventDefault();
      onClick();
    }}>
    {text}
  </button>);
}
export function ButtonGroup(props) {
  const array = (function() {
    try {
      return props.values.split(" ");
    } catch (e) {
      return ['No values']
    }
  }());
  const selectedValue = props.selectedValue;
  const className = props.className;
  const actionGenerator = props.actionGenerator;
  const lambdaGenerator = props.lambdaGenerator;
  const dispatch = props.dispatch;
  if (actionGenerator && dispatch && !lambdaGenerator) {
    return (<div className="btn-group" role="group">
      {
        array.map(value => (<Button key={value} className={className + (
            selectedValue === value
            ? " active"
            : "")} text={value} action={actionGenerator(value)} dispatch={dispatch}/>))
      }
    </div>);
  } else if (!actionGenerator && lambdaGenerator) {
    return (<div className="btn-gro
            up" role="group">
      {
        array.map(value => (<Button key={value} className={className + (
            selectedValue === value
            ? " active"
            : "")} text={value} lambda={lambdaGenerator(value)}/>))
      }
    </div>);
  }
}
export function Form(props) {
  const className = props.className
  const action = props.action
  const dispatch = props.dispatch
  const lambda = props.lambda
  const onSubmit = (function() {
    if (action && dispatch && !lambda) {
      return(event) => {
        event.preventDefault();
        dispatch(action());
      }
    } else if (!action && lambda) {
      return(event) => {
        event.preventDefault();
        lambda();
      }
    } else {
      return(event) => {
        alert('Form submitted with no action');
      }
    }
  }());
  const children = (props.children instanceof Array)
    ? props.children
    : [props.children]
  return (<form className={className} onSubmit={onSubmit}>
    {children.map((item) => item)}
  </form>)
}
export function Input(props) {
  const className = props.className
  const type = props.type || 'text'
  const name = props.name
  const value = props.value
  const placeholder = props.placeholder || props.name
  const actionGenerator = props.actionGenerator
  const dispatch = props.dispatch
  const lambdaGenerator = props.lambdaGenerator
  const onChange = (function() {
    if (actionGenerator && dispatch && !lambdaGenerator) {
      return(event) => dispatch(actionGenerator(event.target.value, name))
    } else if (!actionGenerator && lambdaGenerator !== undefined) {
      return(event) => {
        lambdaGenerator(event, name)();
      }
    } else {
      return(event) => {
        alert('Value changed with no action');
      }
    }
  }());
  return (<input className={className} name={name} type={type} value={value} placeholder={placeholder} onChange={onChange}/>)
}
export function Link(props) {
  const className = props.className
  const text = props.text || 'Link (missing text)';
  const onClick = (() => {
    if (props.lambda && !props.action) {
      return props.lambda;
    } else if (!props.lambda && props.action && props.dispatch) {
      return() => props.dispatch(props.action);
    } else {
      return() => alert("Link was clicked (no action)");
    }
  })();
  return (<a className={className} href="#" onClick={event => {
      event.preventDefault();
      onClick();
    }}>
    {text}
  </a>);
}
export class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: props.url,
      data: props.data,
      mockResponseData: props.mockResponseData,
      loaded: false,
      result: undefined
    },
    this.trigger = ((url, data, mockResponseData) => {
      // console.log(this, 'triggered');
      api(url, data, mockResponseData).then(json => this.setState({loaded: true, result: json, reload: false}))
      // api(url, data).then(json => {this.setState(((prevState, props) => { return {loaded: true, result: json, reload: false} }));})
      // api(url, data).then((json => {console.log('this', this.setState)}).bind(this))
    }).bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.url && nextProps.data) {
      this.trigger(nextProps.url, nextProps.data, nextProps.mockResponseData)
    }
  }
  componentDidMount() {
    if (this.props.url && this.props.data) {
      this.trigger(this.props.url, this.props.data, this.props.mockResponseData)
    }
  }
  render() {
    const loaded = this.state.loaded
    if (loaded) {
      const text = this.state.result.text
      const number = this.state.result.number
      return (<p>The fetch returned text "{text}" and number: {number}.</p>)
    } else {
      return (<table className="h-100 w-100 align-middle" style={{
          'textAlign' : 'center',
          backgroundColor: '#dddddd'
        }}>
        <tbody>
          <tr>
            <td><img src={logo} className="App-logo" alt="logo"/></td>
          </tr>
        </tbody>
      </table>)
    }
  }
}
export function Navbar(props) {
  const className = (() => {
    let name = "navbar navbar-expand";
    if (props.extraClassName !== undefined) {
      name += " ";
      name += props.extraClassName;
    }
    return name;
  })();
  const children = (
    props.children instanceof Array
    ? props.children
    : [props.children]).filter(child => child && child.type && child.type.name);
  const brand = props.brand
  const links = children.filter(child => child && child.type && child.type.name);
  const rightAligned = (
    props.rightAligned instanceof Array
    ? props.rightAligned
    : [props.rightAligned]).filter(child => child && child.type && child.type.name);
  // const buttons = children.filter(child => child.type.name === "Button");
  // console.log("className", className);
  // console.log("Navbar children", props.children);
  return (<nav className={className}>
    {brand}
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        {
          links.map(link => (<li className="nav-item" key={link.props.text}>
            {link}
          </li>))
        }
      </ul>
    </div>
    {
      rightAligned.map((button) => {
        return button;
      })
    }
  </nav>);
}
export function ShowcaseRow(props) {
  const children = (props.children instanceof Array)
    ? props.children
    : [props.children]
  // console.log("First child", children[0]);
  return (<div className='row showcase-row'>
    {
      children.map((item, index) => (<div className='col showcase-col' key={index}>
        {item}
      </div>))
    }
  </div>)
}
export function Title(props) {
  return (<div className="jumbotron">
    <div className="container">
      <h1 className="display-3">{props.title}</h1>
    </div>
  </div>)
}

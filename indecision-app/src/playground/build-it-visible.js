class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  };

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}> {
          this.state.visibility ? "Hide details" : "Show details"
        }
        </button>
        
        {this.state.visibility && (
          <div>
            <p>These are the details</p>
          </div>
        )}
      </div>
    );
  };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let showDetails = false;

// const onShowDetails = () => {
//   showDetails = !showDetails;
//   render();
// }

// const cutestAppRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onShowDetails}>{showDetails ? "Hide details" : "Show details"}</button>
//       {showDetails ? <p>These are the details</p> : <p/>}
//     </div>
//   );
  
//   ReactDOM.render(template, cutestAppRoot);
// };

// render();

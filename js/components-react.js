// header component
var headerMenu = [
    {
        id: 1,
        icon: 'fa fa-file-text-o',
        text: 'File',
    },
    {
        id: 2,
        icon: 'fa fa-pencil-square-o',
        text: 'Edit',
    },
    {
        id: 2,
        icon: 'fa fa-pencil-square-o',
        text: 'Find',
    },
    {
        id: 2,
        icon: 'fa fa-pencil-square-o',
        text: 'Preferences',
    }
];
var Header = React.createClass({
  render: function(){
      return (
        <div className="ide__header">
          <ul>
          {headerMenu.map(function(hm) {
            return (
              <li><i className={hm.icon} aria-hidden="true"></i> {hm.text}</li>
            )
           })}
          </ul>
        </div>
      )
  }
});
React.render(<Header/>,document.querySelector("component-header"));

// model side bar menu
var sideMenu = [
    {
        id: 1,
        icon: 'fa fa-cube',
        text: 'connect to cube'
    },
    {
        id: 2,
        icon: 'fa fa-cloud-download',
        text: 'cloud system'
    },
    {
        id: 3,
        icon: 'fa fa-eye',
        text: 'view code'
    },
    {
        id: 4,
        icon: 'fa fa-code',
        text: 'mode debug'
    },
    {
        id: 5,
        icon: 'fa fa-database',
        text: 'connect dtabase'
    },
    {
        id: 6,
        icon: 'fa fa-pie-chart',
        text: 'data visualization'
    },
    {
        id: 7,
        icon: 'fa fa-terminal',
        text: 'open terminal'
    },
    {
        id: 4,
        icon: 'fa fa-files-o',
        text: 'clone repository'
    }
    
];

var Side = React.createClass({
  render: function (){
    return (
      <div className="model">
        <div className="model__tools">
          <ul>
            {sideMenu.map(function(sm){
              return (
                <li>
                  <a><i className={sm.icon} aria-hidden="true"></i></a>
                  <div className="tip">{sm.text}</div>    
                </li>  
              )
            })}
          </ul>
        </div> 
      </div>
    )
  }
  
});
React.render(<Side/>,document.querySelector("component-sidebar"));

// terminal popup
var Terminal = React.createClass({
  render: function (){
    return (
      <div id="terminal" className="hide">
        <div className="terminal__header">
          <div className="terminal__btn"><i className="fa fa-circle red" aria-hidden="true"></i> <i className="fa fa-circle orange" aria-hidden="true"></i> <i className="fa fa-circle green" aria-hidden="true"></i>
          </div>
        <div> Terminal <span className="tspan"/> </div>         
        </div>
        <div className="terminal__code">
          Last login: Fri Sep 17 22:41:18 on ttyp1 <br/> Welcome to IDE<br />HackPro:~/Desktop admin$<br />
          <span className="error"></span>
        </div>
      </div>
    )
  }
  
});
React.render(<Terminal/>,document.querySelector("component-terminal"));


var Files = React.createClass({
  render: function(){
    return (
      <div className="model__files">
          <div className="folder">
            <i className="fa fa-folder-open" aria-hidden="true"></i> Project
          </div>
          <ul>
            <li className="model__file model__files-html tab1"><i className="fa fa-html5" aria-hidden="true"></i> index.html</li> 
            <li className="model__file model__files-css tab2"><i className="fa fa-css3" aria-hidden="true"></i> style.css</li>  
            <li className="model__file model__files-js tab3"><i className="fa fa-code" aria-hidden="true"></i> script.js</li>
          </ul>
      </div>  
    )
  }
});
React.render(<Files />, document.querySelector("component-files"));


var CodeHeader = React.createClass({
  render: function(){
    return (
      <div className="model__header">
        <div className="model__tab tab1 active">
          <span>index.html</span>
        </div>
       <i className="fa fa-times"></i>
        <div className="model__tab tab2">
           <span>style.css</span>
        </div>
        <i className="fa fa-times"></i>
         <div className="model__tab tab3">
           <span>script.js</span>
         </div>
         <i className="fa fa-times" ng-tab=".model__tab3"></i>
      </div> 
    )
  }
});
React.render(<CodeHeader />, document.querySelector("component-codeheader"));



var Login = React.createClass({
  render: function(){
    return (
      <div id="login" className="hide">
       <div className="terminal__header">
         <div className="terminal__btn"><i className="fa fa-circle red" aria-hidden="true"></i> <i className="fa fa-circle orange" aria-hidden="true"></i> <i className="fa fa-circle green" aria-hidden="true"></i></div>
         -- User Login --
       </div>
       <div className="terminal__code">
         <i className="fa fa-user-circle-o dark-grey" aria-hidden="true"></i>
         <form id="news__form">
           <br />
           <input type="text" name="email" placeholder="User" className="news__input-text" />
           <br />
           <input type="password" name="password" placeholder="Password" className="news__input-text" />
            <br />
            <input type="submit" value="Sign up now" className="news__submit hide" />
          </form>  
       </div>
     </div>  
    )
  }
});
React.render(<Login />, document.querySelector("component-login"));

var TerminalFooter = React.createClass({
  render: function (){
    return(
      <div id="terminal-footer" className="hide">
       <div className="terminal__header">
         <div className="terminal__btn">
           <i className="fa fa-circle red" aria-hidden="true"></i> <i className="fa fa-circle orange" aria-hidden="true"></i> <i className="fa fa-circle green" aria-hidden="true"></i>
         </div>
         -- Terminal <span className="tspan">code</span> --
       </div>
       <div className="terminal__code">
         Last login: Fri Sep 17 22:41:18 on ttyp1<br />
         Welcome to IDE<br />
         HackPro:~/Desktop admin$<br />
         <span className="error"></span>
       </div>
     </div>
    )
  }
});
React.render(<TerminalFooter />, document.querySelector("component-terminalfooter"));


var CodeRight = React.createClass({
  getInitialState: function() {
    return {
      codes: []
    }
  },
  componentDidMount: function() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            codes: result.data
          });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function(){
    return (
      <div className="model__right">
        <div className="model__code-numbers">
          <ul>
            {(()=>{
              let container =[];
              let i;
              for(i = 1; i<= 30; i++){
                container.push(<li>{i}</li>)
              }
              
              return container;     
            })()}
          </ul>
        </div>
        {this.state.codes.map(function(markup) {
            return (
              <div dangerouslySetInnerHTML={{ __html: markup.code }} className={markup.guid} />
            )
          })}
        
      </div>
    )
  }
});
React.render(<CodeRight  source="https://api.myjson.com/bins/q5ash" />, document.querySelector("component-coderight"));

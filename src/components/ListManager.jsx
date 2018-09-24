var React=require('react');
var ReactDOM=require('react-dom');
var createReactClass=require('create-react-class');
var List=require('./List.jsx');
var ListManager=createReactClass({
    getInitialState: function() {
          return {items: [] ,newItemText: ''};
    },
    onChange: function(e){
      this.setState({newItemText: e.target.value});
    },

    handleSubmit: function(e){
          e.preventDefault();

          var currentItems=this.state.items;

          currentItems.push(this.state.newItemText);

          this.setState({items: currentItems ,newItemText:''});
    },
    render: function() {
         //onChange is called with every keystroke so we can store the most recent data entered
         //value is what the user sees in the input box - we point this to newItemText so it updates on every keystroke

         var divStyle = {
             marginTop: 10
         };

         var headingStyle = {

         }

         if (this.props.headingColor) {
             headingStyle.background = this.props.headingColor;
         }

         return (
             <div style={divStyle} className="col-sm-4">
                 <div className="panel panel-primary">
                     <div style={headingStyle} className="panel-heading">
                         <h3>{this.props.title}</h3>
                     </div>
                     <div className="row panel-body">
                     <form onSubmit={this.handleSubmit}>
                         <div className="col-sm-9">
                             <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                         </div>
                         <div className="col-sm-2">
                             <button className="btn btn-primary">Add</button>
                         </div>
                     </form>
                     </div>
                     <List items={this.state.items} />
                 </div>
             </div>
         )
     }
 });

 module.exports = ListManager;

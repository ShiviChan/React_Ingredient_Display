var React=require('react');
var ReactDOM=require('react-dom');
var ListItem=require('./ListItem.jsx');
var createReactClass = require('create-react-class');
var ingredients=[{"id":1,"text": "ham"},{"id":2,"text": "cheese"},{"id":3,"text":"cake"}];


var List=createReactClass({
    render :function(){
          var listitems=ingredients.map(function(item)
          {
              return <ListItem key={item.id} ingredient={item.text}/>;
          });

          return (<ul>{listitems}</ul>);
        }
  });
module.exports= List;

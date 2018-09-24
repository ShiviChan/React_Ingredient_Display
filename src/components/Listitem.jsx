var React=require('react');
var X=require('create-react-class');
var ListItem=X({
  render: function(){
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  }
});

module.exports=ListItem;

class Name extends React.Component{
       render(){
      return <h1>{this.props.ho} - {this.props.children} - {this.props.ten}</h1>
       };
};

ReactDOM.render(
  <Name ho="Tram" ten="Duong">Khanh</Name>
  , document.getElementById("name")
);
ReactDOM.render(
  <h1>09123456789</h1>
  , document.getElementById("phone")
);

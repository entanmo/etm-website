import React from 'react'



class BidInfo extends React.Component {
	constructor(props){
	      super(props);
	      this.state={
	      	current_page: 2,
	      	form_data: 2
	      }
  	}

  	handle () {
      console.log(222)
  		this.setState({form_data: 1})
  	}

	render() {
	    var value = this.state.form_data;
		return(
          <div>
          	<input type="button" value={this.state.form_data} onClick={this.handle.bind(this)}  />
            <div>{value}</div>
          </div>
		)
	}
}

export default BidInfo

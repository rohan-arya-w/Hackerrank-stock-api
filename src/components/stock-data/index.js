import React from "react";
import "./index.css";



class StockData extends React.Component {

  constructor()
  {
    super()
    this.state={
      searchData:{}
    }
  }


  
  OnSearchSubmit(key){
    fetch('https://jsonmock.hackerrank.com/api/stocks?date='+key).then((data)=>{
      data.json().then((response)=>{
        this.setState({searchData:response.data[0]})
        
        
      })
    })
  }
 
  render(){

    return (
      <div className="layout-column align-items-center mt-50">
        <section  className="layout-row align-items-center justify-content-center">
          <input type="text" onChange={(event)=>this.OnSearchSubmit(event.target.value)} className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input"/>
          <button  className="" id="submit-button" data-testid="submit-button"  >Search</button>
        </section>
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
          <li className="py-10">{this.state.searchData.date}</li>
          <li className="py-10">{this.state.searchData.open}</li>
          <li className="py-10">{this.state.searchData.high}</li>
          <li className="py-10">{this.state.searchData.low}</li>
          <li className="py-10">{this.state.searchData.close}</li>
        
        </ul>
        <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
      </div>
    );
  }
}

export default StockData;

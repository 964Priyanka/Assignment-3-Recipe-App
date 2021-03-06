import React, { Component } from "react";
import RecipeItems from "./RecipeItems";
import "./RecipeList.css";
class RecipeList extends Component {
     constructor(props) {
         super(props);

         this.state ={
             items: []
         };
         this.addItem =this.addItem.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
         
     }
     addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
        
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
        
          
        console.log(this.state.items);
           
        e.preventDefault();
        
      }
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
    render() {
        return (
          <div className="recipeListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="enter the recipe you want to enter">
                </input>
                <button type="submit">Submit</button>
              </form>
            </div>
            <RecipeItems entries={this.state.items} delete={this.deleteItem}/>
          </div>
        );
      }
    }     
export default RecipeList;
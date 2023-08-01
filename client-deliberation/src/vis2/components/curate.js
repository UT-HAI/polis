import _ from "lodash";
import React from "react";
import * as globals from "./globals";

const Button = (props) => {

  const handleClick = () => {
    props.handleCurateButtonClick(props.identifier)
  }

    // console.log("button id is", props.identifier)

    return (
      <button style={{
        border: "none",
        fontSize: 14,
        marginRight: 5,
        cursor: "pointer",
        padding: "6px 12px",
        fontWeight: (!_.isNull(props.selectedTidCuration) && props.selectedTidCuration === props.identifier) ? 700 : 500,
        backgroundColor: (!_.isNull(props.selectedTidCuration) && props.selectedTidCuration === props.identifier) ? "#03a9f4" : "rgb(235,235,235)",
        color: (!_.isNull(props.selectedTidCuration) && props.selectedTidCuration === props.identifier) ? "rgb(255,255,255)" : "rgb(100,100,100)",
        borderRadius: 4,
      }}
      onClick={handleClick.bind(this)}>
        {props.children}
      </button>
    )
  // }
}

class Curate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render () {

    // const groupButtons = _.mapValues({'a' : 1, 'b' : 2, 'c' : 3}, function(group){
    //   return (group * group)
    // })

    const groupButtons = (() => {
      const ar  = []
      for (const key in this.props.math["group-votes"]) {
        
        const group = this.props.math["group-votes"][key]
        console.log("group", group)
        ar.push(
              <Button
                key={globals.groupLabels[group.id]}
                handleCurateButtonClick={this.props.handleCurateButtonClick}
                selectedTidCuration={this.props.selectedTidCuration}
                identifier={group.id}>
                {globals.groupLabels[group.id]}
              </Button>
            )
      }
      return ar;
    })

    // console.log("hello again", this.props.math)
    console.log("hello there", this.props.math["group-votes"])
    console.log("group buttons", groupButtons())
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        width: true ? "auto" : "100%",

      }}>
        <div style={{marginRight: 20}}>
          <Button
            selectedTidCuration={this.props.selectedTidCuration}
            handleCurateButtonClick={this.props.handleCurateButtonClick}
            identifier={globals.tidCuration.majority}>
            {this.props.Strings.majorityOpinion}
          </Button>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "baseline",
        }}>
          <p style={{
              marginRight: 10,
              fontSize: 14,
              fontFamily: "Georgia",
              fontStyle: "italic"
            }}>
            {this.props.Strings.group_123}
          </p>
          {
            groupButtons()
            // Jake - loop thru keys instead,
            // access value from key
            // and then do function
            // _.map(this.props.math["group-votes"], (group) => {
            //   console.log("here", group)
            //   return (
            //     <Button
            //       key={globals.groupLabels[group.id]}
            //       handleCurateButtonClick={this.props.handleCurateButtonClick}
            //       selectedTidCuration={this.props.selectedTidCuration}
            //       identifier={group.id}>
            //       {globals.groupLabels[group.id]}
            //     </Button>
            //   )
            // })

            // Object.keys(this.props.math["group-votes"]).forEach((key, idx) => {
            //   const group = this.props.math["group-votes"][key]
            //   console.log("here", group)
            //   return (
            //     <Button
            //       key={globals.groupLabels[group.id]}
            //       handleCurateButtonClick={this.props.handleCurateButtonClick}
            //       selectedTidCuration={this.props.selectedTidCuration}
            //       identifier={group.id}>
            //       {globals.groupLabels[group.id]}
            //     </Button>
            //   )
            // })
            
          }
        </div>
      </div>
    )
  }
}


export default Curate;


// <div style={{marginRight: 20}}>
//   <Button
//     selectedTidCuration={this.props.selectedTidCuration}
//     handleCurateButtonClick={this.props.handleCurateButtonClick}
//     identifier={globals.tidCuration.differences}>
//     Differences
//   </Button>
// </div>

import  React from 'react'
import  {connect} from 'react-redux'
import  PropTypes from 'prop-types'
import {createPost} from "../actions/postActions";

class  Postform extends React.Component{


    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }

    onChange(e){
        this.setState({[ e.target.name]: e.target.value});
    }

    onSubmit (e){

        e.preventDefault();

        const post = {

            title:this.state.title,
            body:this.state.body
        };


  //call action
        this.props.createPost(post);
    }


    render(){

        return(

            <div>
                <form onSubmit={this.onSubmit}>
                        <input type={"title"}
                           name={"title"} placeholder={"enter post title "}
                           value={this.state.title}
                           onChange={this.onChange}
                        />

                    <br/>

                    <textarea
                        name={"body"} placeholder={"Enter Post Body"}
                        value={this.state.body}
                        onChange={this.onChange}
                    />

                    <br/>


                    <button  type={"submit"}>Submit </button>
                </form>
            </div>
        )
    }




}
Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export  default connect(null, {createPost}) (Postform);
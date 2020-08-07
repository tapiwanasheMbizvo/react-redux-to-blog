import  React from 'react'

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


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)

        }).then(res => res.json())
            .then(data =>console.log(data))
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


export  default Postform;
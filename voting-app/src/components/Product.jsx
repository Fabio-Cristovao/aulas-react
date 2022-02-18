import React, { Component } from 'react'

export class Product extends Component {

  /* constructor(props){
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this)
  } */

  /* handleUpVote = () => {
    //this.props.onVote(this.props.id);
    const {onVote, id} = this.props;
    onVote(id, 1);
  }

  handleDownVote = () => {
    //this.props.onVote(this.props.id);
    const {onVote, id} = this.props;
    onVote(id, -1);
  } */


  handleVote = ({target}) => {
    const {onVote, id} = this.props;

    target.className.search('up') > -1 ? onVote(id, 1) : onVote(id, -1)
  }



  render() {

    const {id, title, description, url, votes, submitterAvatarUrl, productImageUrl} = this.props;


    return (
      <div className='item'>
        <div className='image'>
            <img src={productImageUrl} />
        </div>
        <div className='middle aligned content'>
            <div className='header'>
              {/* <a onClick={this.handleUpVote}> */}
              <a onClick={this.handleVote}>
                <i className='large caret up icon' />
              </a>
              {votes}
              {/* <a onClick={this.handleDownVote}> */}
              <a onClick={this.handleVote}>
                <i className='large caret down icon' />
              </a>
            </div>

            <div className='description'>
                <a> {title} </a>
                <p> {description} </p>
            </div>
            <div className='extra'>
                <span>Submitted by: </span>
                <img className='ui avatar image' src={submitterAvatarUrl} />
            </div>
        </div>
    </div>
    )
  }
}

export default Product
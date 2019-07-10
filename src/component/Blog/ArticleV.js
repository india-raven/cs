import React, { Component } from 'react';
import '../Blog/ArticleView.css'
import  ArticleInArticleView from './ArticleInArticleView'
// import { connect } from 'react-redux'
// import { 
//     getArticle, 
//     clap,
//     follow
// } from './../redux/actions/actions'
// import PropTypes from 'prop-types'
// import FollowButton from './FollowButton'

// let text='hello'
// let claps = 5
// let title

const array = [
    {
        title: 'CLIMATE CHANGE DIGEST JULY 2019',
        introduction: 'Could be better. People suck. Stop using your car, ride a bike please. Could be better. People suck. Stop using your car, ride a bike please. Could be better. People suck. Stop using your car, ride a bike please. Could be better. People suck. Stop using your car, ride a bike please.',
        date: 'Jul 2, 2019',
        id: 0
    },
    {
        title: 'CLIMATE CHANGE DIGEST JULY 2018',
        introduction: 'In short: because of you!',
        date: 'Jan 1, 2018',
        id: 1
    },
    {
        title: 'BUY TESLA USING MY REFERAL LINK PLSSSSSSS AND SAVE PLANET',
        introduction: '$100 OFF',
        date: 'Mar 8, 2017',
        id: 2
    }
]

class ArticleView extends Component {
    // componentDidMount() {
    //     document.body.classNameNameName = 'posts show'
    // }
    // componentWillMount() {
    //     this.props.getArticle(this.props.match.params.id)
    // }    
    // componentWillUnmount() {
    //     document.body.classNameNameName = ''
    // }
    render() {   
        return (
            <div>
          <div className="wrapper" >
            <center> <a href="/blog"><div className="site-title"> Climate Change :-(</div></a></center>
          </div>    
          <div className="wrapper site-description">
            <center>a  climate blog</center>
          </div>
          {/* <div className="wrapper">
             <div className="trigger site-navigation">
             <a className="page-link" href="/">HOME</a>
                <span className="exclamationMark">/</span><a className="page-link" href="/about/">About</a>
                <span className="exclamationMark">/</span><a className="page-link" href="/portfolio/">Portfolio</a>
                <span className="exclamationMark">/</span><a className="page-link" href="/contact/">Contact</a>
            </div>
         </div> */}
          <div className='page-content'>
              <div className='wrapper'>
                  <div className='home'>
                      {/* NEED TO CREEATE COMPONENT TO RENDER EACH ARTICLE */}
                      {array.map(element => (
                          <ArticleInArticleView data={element}/>
                      )) }
                    
                  </div>
              </div>
          </div> 
          </div>  
        )
    }
}
// {/* const mapStateToProps = state => {
//     return {
//         Article: state.articles.article,
//         user: state.authUser.user    
//     }
// }
// ArticleView.propTypes = {
//     params: PropTypes.object.isRequired
// } */}
// {/* export default connect(mapStateToProps, { 
//     getArticle,
//     clap,
//     follow
// })(ArticleView); */}

export default ArticleView
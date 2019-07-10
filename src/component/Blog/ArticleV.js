import React, { Component } from 'react';
import '../Blog/ArticleView.css'
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
                       <div className='post postContent'>
                           <div className='postDate'> 
                           <time datetime="2019-07-02T00:15:31+00:00" itemprop="datePublished">Jul 2, 2019</time>
                           </div>
                           <div className="postTag">
      
    </div>
    <br />
                           <div className="postTitle">
                                 <a className="postLink" href="/">CLIMATE CHANGE DIGEST JULY 2019</a>
                           </div>
                           <div className="postExt">
                                Could be better. People suck. Stop using your car, ride a bike please. Could be better. People suck. Stop using your car, ride a bike please. Could be better. People suck. Stop using your car, ride a bike please. Could be better. People suck. Stop using your car, ride a bike please.
                        </div>
                       </div>
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
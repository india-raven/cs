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
    //     document.body.classNameName = 'posts show'
    // }
    // componentWillMount() {
    //     this.props.getArticle(this.props.match.params.id)
    // }    
    // componentWillUnmount() {
    //     document.body.classNameName = ''
    // }
    render() {
     
        
        return (
            <div>
          <div class="wrapper">
            <center> <a href="/"><div class="site-title">   Tech Effects </div></a></center>
          </div>    
          <div class="wrapper site-description">
            <center>a blog</center>
          </div>
          <div class="wrapper">
             <div class="trigger site-navigation">
             <a class="page-link" href="/">HOME</a>
                <span class="exclamationMark">/</span><a class="page-link" href="/about/">About</a>
                <span class="exclamationMark">/</span><a class="page-link" href="/portfolio/">Portfolio</a>
                <span class="exclamationMark">/</span><a class="page-link" href="/contact/">Contact</a>
            </div>
         </div>
          <div class='page-content'>
              <div class='wrapper'>
                  <div class='home'>
                       <div class='post postContent'>
                           <div class='postDate'> 
                           <time datetime="2019-07-02T00:15:31+00:00" itemprop="datePublished">Jul 2, 2019</time>
                           </div>
                           <div class="postTitle">
                                 <a class="postLink" href="/">Title 1</a>
                           </div>
                           <div class="postExt">
                                Article content....
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
import React, { Component } from 'react';
import '../Blog/ArticleView.css'
import  ArticleInArticleView from './ArticleInArticleView'
import { Link } from 'react-router-dom'
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
        introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam nemo dolor nulla hic porro dolore, veniam nobis alias. Quos animi temporibus dolorem inventore. Nostrum eius iste sequi officia nulla.',
        date: 'Jul 2, 2019',
        id: 0
    },
    {
        title: 'CLIMATE CHANGE DIGEST JULY 2018',
        introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam nemo dolor nulla hic porro dolore, veniam nobis alias. Quos animi temporibus dolorem inventore. Nostrum eius iste sequi officia nulla.',
        date: 'Jan 1, 2018',
        id: 1
    },
    {
        title: 'HOW TESLA CAN HELP US?',
        introduction: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam nemo dolor nulla hic porro dolore, veniam nobis alias. Quos animi temporibus dolorem inventore. Nostrum eius iste sequi officia nulla.',
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
            <div className="no-navbar">
                <div className="wrapper">
                   <center><Link to=''><div className="site-title" style={{marginTop: '150px'}}> Climate Change :-(</div></Link></center>
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
                           {array.map(element => (
                               <ArticleInArticleView data={element}/>
                            ))}
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

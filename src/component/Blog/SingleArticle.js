import React, { Component } from 'react';
import './ArticleView.css'
const SingleArticle = ({props})=>{
    return (
        <div className = "page-content" style={{top: '50px'}}>
            <div classNameName = "wrapper">
                <article className = "post">
                <header className="post-header" style={{marginTop: '150px'}}>
    <h1 className="post-title" itemprop="name headline"><a className="post-title-link" href="/career/2019/07/02/prepare-for-initial-screens.html">How to ace your initial programming job screen</a></h1>
  <center>  <p className="post-meta"><time datetime="2019-07-02T00:15:31+00:00" itemprop="datePublished">Jul 2, 2019</time></p>
    
     <div className="">
       <center><p><span className="authorKeyword">Author: Dave Cohen</span></p></center>

     </div>
     
   </center>
  </header>
                </article>
            </div>
        </div>
    )
}

export default SingleArticle;
import React, { Component } from 'react';
import '../Blog/ArticleView.css'
import RenderToLayer from 'material-ui/internal/RenderToLayer';

const ArticleInArticleView = ({data}) => {
    //render each article
    return(
        <div className='post postContent'>
        <div className='postDate'> 
        <time datetime="2019-07-02T00:15:31+00:00" itemprop="datePublished">{data.date}</time>
        </div>
        <div className="postTag">

</div>
<br />
        <div className="postTitle">
              <a className="postLink" href="/">{data.title}</a>

        </div>
        <div className="postExt">
             {data.introduction}
     </div>
    </div>
    )
}

export default ArticleInArticleView
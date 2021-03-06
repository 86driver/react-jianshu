import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ArticleWrapper, ArticleItem } from '../style'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render() {
    const { articleList } = this.props
    return (
      <ArticleWrapper>
        {
          articleList.map((item) => {
            return (
              <Link to='/detail'>
                <ArticleItem key={item.get('id')}>
                  <div className="left">
                    <div className="title">{item.get('title')}</div>
                    <div className="content">{item.get('content')}</div>
                    <div className="tips">
                      <span className="author">{item.get('author')}</span>
                      <span className="reply">{item.get('reply')}回复</span>
                      <span className="like">{item.get('like')}喜欢</span>
                    </div>
                  </div>
                  <div className="right">
                    <img src={item.get('imgUrl')} alt="" />
                  </div>
                </ArticleItem>
              </Link>
            )
          })
        }
      </ArticleWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['homeReducer', 'articleList'])
  }
}

export default connect(mapState, null)(List)
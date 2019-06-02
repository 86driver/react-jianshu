import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['homeReducer', 'recommendList'])
  }
}

export default connect(mapState, null)(Recommend)
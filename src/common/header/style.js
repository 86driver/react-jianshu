import styled from 'styled-components'

import LogoUrl from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${LogoUrl});
  background-size: contain;
`

export const Nav = styled.div`
  margin: 0 auto;
  max-width: 940px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
`
export const NavItemGroup = styled.div`

`

export const NavItem = styled.span`
  display: inline-block;
  font-size: 17px;
  margin: 0 20px;
  color: #333;
  &.home{
    color: #ea6f5a;
  };
  &.Aa{
    color:#969696;
    .iconfont {
      font-size: 20px;
    }
  };
  &.login-in{
    color:#969696
    font-size: 16px;
  }
`

export const NavSearch = styled.input`
  margin: 0 20px;
  padding: 10px 30px 10px 20px;
  width: 160px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  border-radius: 20px;
  color: #777;
  box-sizing: border-box;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 240px;
    padding: 10px 40px 10px 20px;
  }
  &.slide-enter{
    width: 160px;
  }
  &.slide-enter-active{
    width: 240px;
    transition: all .2s ease-out;
  }
  &.slide-exit{
    width: 240px;
  }
  &.slide-exit-active {
    transition: all .2s ease-out;
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 15px;
  line-height: 56px;
`

export const Button = styled.div`
  display: inline-block;
  border-radius: 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  line-height: 35px;
  padding: 0 20px;
  &.register{
    color: #ea6f5a;
  };
  &.writing{
    margin-left: 20px;
    color: #fff;
    background: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  .iconfont {
    text-align: center;
    position: absolute;
    right: 25px;
    top: 3px; 
    line-height: 30px;
    color:#969696;
    width: 30px;
    font-size: 24px;
    background: #eee;
    border-radius: 50%;
    &.focused{
      background: #aaa;
      color: #fff;
    }
  }
`

export const SearchInfo = styled.div`
  z-index: 2;
  position: absolute;
  top: 42px;
  background: #fff;
  left: 0;
  width: 240px;
  padding: 0 20px 10px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
`

export const SearchInfoItem = styled.a`
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin: 10px 10px 0 0;
`
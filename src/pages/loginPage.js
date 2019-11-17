import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from "react-router-dom";

// 模拟登陆：
function login() {
  return (dispatch) => {
      dispatch({ type: "requestLogin" });
      setTimeout(() => {
          if (Date.now() % 2 === 0) {
              dispatch({ type: "loginSuccess" });
          } else {
              dispatch({ type: "loginFailure" });
          }
      }, 1000);
  };
}

const Login = connect(
  state => ({
    isLogin: state.user.isLogin
  }),
  { login }
)(function({ location, isLogin, login }) {
  // FIXME: 用location.state.redirect来存肯定是不行的!
  const redirect = location.state.redirect || "/";

  if (isLogin) return <Redirect to={redirect} />;

  return (
    <div>
      <p>用户登录</p>
      <hr />
      <button onClick={() => login('Jerry')}>登录</button>
    </div>
  );
});


export default Login;
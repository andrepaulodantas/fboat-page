import React from "react";
import style from "./login.module.scss";
class Login extends React.Component {
  render() {
    return (
      <div>
        <section className="">
          <h1 className="">Login</h1>
          <form className={style.form}>
            <label className={style.label}>Email</label>
            <input  className={style.input} type="email" />
            <label>Password</label>
            <input className={style.input} type="password" />
            <button type="submit" >Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;

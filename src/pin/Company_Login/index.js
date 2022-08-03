import React from 'react'
import clsx from 'clsx'
import styles from './Company_Login.module.css'

function CompanyLogin() {
  return (
    <div className={styles.login_wrap}>
      <div className={styles.login_html}>
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className={styles.sign_in}
          checked
        />
        <label htmlFor="tab-1" className={styles.tab}>
          登入
        </label>
        <input id="tab-2" type="radio" name="tab" className={styles.sign_up} />
        <label htmlFor="tab-2" className={styles.tab}>
          註冊
        </label>
        <div className={styles.login_form}>
          <div className={styles.sign_in_htm}>
            <div className={styles.group}>
              <label htmlFor="user" className={styles.label}>
                Email address
              </label>
              <input id="user" type="text" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label htmlFor="pass" className={styles.label}>
                Password
              </label>
              <input
                id="pass"
                type="password"
                className={styles.input}
                data-type="password"
              />
            </div>
            <div className={styles.group}>
              <input id="check" type="checkbox" className={styles.check} />
              <label htmlFor="check">
                <span className={styles.icon}></span> 記住我
              </label>
            </div>
            <div className={styles.group}>
              <input type="submit" className={styles.button} value="Sign In" />
            </div>
          </div>
          {/* --------------- */}
          <div className={styles.sign_up_htm}>
            <div className={styles.group}>
              <label htmlFor="user" className={styles.label}>
                廠商名稱：
              </label>
            </div>
            <div className="form-check form-check-inline ">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                農戶(個人)
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                小型商戶(免發票)
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                個人用戶(非公司)
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
                value="option4"
              />
              <label className="form-check-label" htmlFor="inlineRadio4">
                法人(公司)
              </label>
            </div>
            {/* --------- */}
            <div className={styles.group}>
              <label htmlFor="companyname" className={styles.label}>
                廠商名稱：
              </label>
              <input id="companyname" type="text" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label htmlFor="name" className={styles.label}>
                負責人：
              </label>
              <input id="name" type="text" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label htmlFor="idcard" className={styles.label}>
                身分證字號
              </label>
              <input id="idcard" type="test" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label htmlFor="phone" className={styles.label}>
                手機號碼：
              </label>
              <input id="phone" type="text" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label htmlFor="email" className={styles.label}>
                Email address：
              </label>
              <input id="email" type="text" className={styles.input} />
            </div>
            <div className={styles.group}>
              <label htmlFor="password" className={styles.label}>
                Password：
              </label>
              <input id="password" type="text" className={styles.input} />
            </div>
            <div className={styles.group}>
              <input type="submit" className={styles.button} value="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyLogin

function Company_Home() {
  return (
    <div className="container pt-3">
      <div className="row g-5">
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">廠商基本資料</h4>
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-lg-12">
                <label htmlFor="" className="form-label">
                  公司類別：
                </label>
                <div className="my-0 d-flex ">
                  <div className="form-check pe-2">
                    <input
                      id=""
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="">
                      農戶
                    </label>
                  </div>
                  <div className="form-check pe-2">
                    <input
                      id=""
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="">
                      小型商戶(免發票)
                    </label>
                  </div>
                  <div className="form-check pe-2">
                    <input
                      id=""
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="">
                      個人用戶(非公司)
                    </label>
                  </div>
                  <div className="form-check pe-2">
                    <input
                      id=""
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="">
                      法人(公司)
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  公司名稱：
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  負責人名稱：
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="" className="form-label">
                  統一編號
                </label>
                <input type="text" className="form-control" id="" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="" className="form-label">
                  負責人身分證字號：
                </label>
                <input type="text" className="form-control" id="" />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="" className="form-label">
                  公司電話：
                </label>
                <input type="text" className="form-control" id="" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="" className="form-label">
                  手機號碼：
                </label>
                <input type="text" className="form-control" id="" />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  公司地址：
                </label>
                <input type="text" className="form-control" id="address" />
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">使用者帳號密碼</h4>
              <div className="col-6">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(帳號)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="col-6">
                <label htmlFor="password" className="form-label">
                  Password
                  <span className="text-muted">(密碼)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder=""
                />
              </div>
              <hr className="my-4" />
              <button
                className="w-25  btn btn-primary ustify-content-md-end"
                type="submit"
              >
                修改資料
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            {/* <span className="text-primary">Your cart</span> */}
            {/* <span className="badge bg-primary rounded-pill">3</span> */}
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">註冊日期</h6>
              </div>
              <span className="text-muted">2022/08/28</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">上架商品總數</h6>
              </div>
              <span className="text-muted">24件</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">上架活動總數</h6>
              </div>
              <span className="text-muted">5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Company_Home

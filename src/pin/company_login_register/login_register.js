import './login_register.css'

function LoginRegister() {
    return (
        <>
            <div
                class="modal modal-signin position-static d-block  py-2  "
                tabindex="-1"
                role="dialog"
                id="modalSignin"
            >
                <div class="modal-dialog " role="document">
                    <div class="modal-content rounded-5 shadow bg-light bg-opacity-50 ">
                        <div class="btn-group ">
                            <button
                                className="btn btn ytbtncolor1"
                                type="button"
                            >
                                廠商登入
                            </button>
                            <button
                                className="btn btn btn-dark ytbtncolor2"
                                type="button"
                            >
                                廠商註冊
                            </button>
                        </div>
                        <div class="modal-header p-4 pb-4 border-bottom-0">
                            <div class="modal-body p-5 pt-0">
                                <form>
                                    <div class="mb-3">
                                        <label
                                            for="exampleInputEmail1"
                                            class="form-label"
                                        >
                                            廠商名稱：
                                        </label>
                                        <input
                                            type=""
                                            class="form-control bg-light bg-opacity-50"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label
                                            for="exampleInputEmail2"
                                            class="form-label"
                                        >
                                            負責人：
                                        </label>
                                        <input
                                            type=""
                                            class="form-control bg-light bg-opacity-50"
                                            id="exampleInputEmail2"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label
                                            for="exampleInputEmail3"
                                            class="form-label"
                                        >
                                            身分證字號：
                                        </label>
                                        <input
                                            type=""
                                            class="form-control bg-light bg-opacity-50"
                                            id="exampleInputEmail3"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label
                                            for="exampleInputEmail4"
                                            class="form-label"
                                        >
                                            手機號碼：
                                        </label>
                                        <input
                                            type=""
                                            class="form-control bg-light bg-opacity-50"
                                            id="exampleInputEmail4"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label
                                            for="exampleInputEmail5"
                                            class="form-label"
                                        >
                                            Email address：
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control bg-light bg-opacity-50"
                                            id="exampleInputEmail5"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label
                                            for="exampleInputPassword6"
                                            class="form-label "
                                        >
                                            Password：
                                        </label>
                                        <input
                                            type="password"
                                            class="form-control bg-light bg-opacity-50"
                                            id="exampleInputPassword6"
                                        />
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button
                                            class="btn btn btncolor btn-block"
                                            type="submit"
                                        >
                                            送出
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegister

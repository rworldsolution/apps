import React from 'react'
import img1 from '../../assets/img/Appearance.svg'
import img2 from '../../assets/img/Appearance1.svg'

export default function Appearance() {
  return (
    <>
    <div className="page-content">
        <div className="page-content-inner">
            <p className="main_heding"><span className="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Configuration </span> &gt; Appearance </p>
            <div className="row">
                <div className="col-sm-12">
                    <div className="box min-h-550 pb-0">
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="content_heding">Mode</p>
                            <div className="mt-10 mb-20">
                                <img src={img1} className="me-10" />
                                <img src={img2} className="me-10" />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <p className="content_heding mb-5">Accent Color</p>
                            <div className="color-picker">
                                <div className="colors">
                                <div className="color-option selected" style={{backgroundColor: '#222'}}>
                                    <span className="checkmark">✔</span>
                                </div>
                                <div className="color-option" style={{backgroundColor: '#1db954'}}></div>
                                <div className="color-option" style={{backgroundColor: '#ff4b4b'}}></div>
                                <div className="color-option" style={{backgroundColor: '#ff9800'}}></div>
                                <div className="color-option" style={{backgroundColor: '#673ab7'}}></div>
                                <div className="color-option rainbow"></div>
                                </div>
                            </div>
                            <p className="mb-0 fs-12 mt-10"><span className="fw-600">Note:</span> These preferences will be applied across school shopper apps, including the customer portal.</p>
                        </div>
                    </div>
                    <div className="row my-20">
                        <div className="col-sm-12 text-end">
                            <button type="button" className="btn_border me-10">Cancel</button>
                            <button type="button" className="btn_primary">Save</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

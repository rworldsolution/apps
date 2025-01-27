import React from 'react'
import img1 from '../assets/img/img5.png';
import img2 from '../assets/img/item2.png';
import img3 from '../assets/img/item3.png';
import img4 from '../assets/img/item4.png';
import img5 from '../assets/img/item5.png';
import img6 from '../assets/img/item6.png';
import img7 from '../assets/img/item7.png';
import img8 from '../assets/img/print.svg';
export default function ItemPreview() {
    return (
        <>
            <div className="page-content">
                <div className="page-content-inner">
                    <p className="main_heding"><span className="text-primary">Item</span> &gt; Preview</p>
                    <div className="box">
                        <div className="row mt-10">
                            <div className="col-sm-5">
                                <div className="d-flex">
                                    <div className="img_dash">
                                        <img src={img1} className="img-fluid" />
                                    </div>
                                    <div className="w-100 ms-15">
                                        <div className="img_sm_dash">
                                            <img src={img2} className="img-fluid" />
                                        </div>
                                        <div className="img_sm_dash mt-10">
                                            <img src={img3} className="img-fluid" />
                                        </div>
                                        <div className="img_sm_dash mt-10">
                                            <img src={img4} className="img-fluid" />
                                        </div>
                                        <div className="img_sm_dash mt-10">
                                            <img src={img5} className="img-fluid" />
                                        </div>
                                        <div className="img_sm_dash mt-10">
                                            <img src={img6} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7 ps-0">
                                <div className="item_box">
                                    <div className="px-10 py-10">
                                        <p className="content_heding">Product Detail</p>
                                        <p className="content_sub">Full detail of a product</p>
                                    </div>
                                    <div className="item_bt_1 px-10 pt-5 pb-10">
                                        <img src={img7} className="img-fluid" />
                                        <img src={img8} className="me-10" />
                                    </div>
                                    <table className="item_table">
                                        <tbody>
                                            <tr>
                                                <td className="w-150">Item</td>
                                                <td className="text-secondary">Straight Multicolor Uniform Kurta</td>
                                            </tr>
                                            <tr>
                                                <td>Category</td>
                                                <td className="text-secondary">Uniform</td>
                                            </tr>
                                            <tr>
                                                <td>Sub-Category</td>
                                                <td className="text-secondary">Uniform</td>
                                            </tr>
                                            <tr>
                                                <td>Brand</td>
                                                <td className="text-secondary">--</td>
                                            </tr>
                                            <tr>
                                                <td>Unit</td>
                                                <td className="text-secondary">Piece</td>
                                            </tr>
                                            <tr>
                                                <td>SKU</td>
                                                <td className="text-secondary">PT001</td>
                                            </tr>
                                            <tr>
                                                <td>HSN Code</td>
                                                <td className="text-secondary">766633</td>
                                            </tr>
                                            <tr>
                                                <td>Quantity</td>
                                                <td className="text-secondary">10</td>
                                            </tr>
                                            <tr>
                                                <td>Tax</td>
                                                <td className="text-secondary">0%</td>
                                            </tr>
                                            <tr>
                                                <td>Discount Type</td>
                                                <td className="text-secondary">Percentage</td>
                                            </tr>
                                            <tr>
                                                <td>Amount</td>
                                                <td className="text-secondary">999.00</td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                                <td className="text-secondary">Active</td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td className="text-secondary">Straight Multicolor Uniform Kurta for Kendriya Vidyalaya Shop a wide collection of Kendriya Vidyalaya School Uniforms, Shirts ,Pants ,Belts, Socks and Other Accessories. All our products go through a rigorous quality check to meet industry standards.Our skilled tailors, pattern makers &amp; experienced designers have an eye for detailing &amp; perfection.We ensure the students are at ease with fabrics best suited for their long school hours.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3 mt-10">
                            <div className="col-sm-12 text-end">
                                <button type="button" className="btn_primary">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

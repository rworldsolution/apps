import React from 'react'
import img1 from '../../assets/img/Configuration_08.svg'

export default function ConfigurationStoreAdd() {
  return (
    <>
        <div className="page-content">
   <div className="page-content-inner">
      <p className="main_heding"><span className="text-primary">Configuration &gt; Store </span> &gt; Add</p>
      <div className="box px-0 min-h-550">
         <div className="row gx-3 px-15">
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Store Name<span className="text-danger">*</span></label>
               <input type="text" className="form-control" placeholder="Enter Store Name" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Email ID</label>
               <input type="text" className="form-control" placeholder="Enter Email ID" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Mobile No.<span className="text-danger">*</span></label>
               <input type="text" className="form-control" placeholder="Enter Mobile No." />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Store Address <span className="text-danger">*</span></label>
               <input type="text" className="form-control" placeholder="Enter Store Address" />
            </div>
            <div className="col-sm-6">
               <div className="row gx-3">
                  <div className="col-sm-6 mb-10">
                     <label for="" className="color_label">City<span className="text-danger">*</span></label>
                     <select name="" className="form-select">
                        <option value="">Select City</option>
                        <option value="">Select City</option>
                     </select>
                  </div>
                  <div className="col-sm-6 mb-10">
                     <label for="" className="color_label">State<span className="text-danger">*</span></label>
                     <select name="" className="form-select">
                        <option value="">Select State</option>
                        <option value="">Select State</option>
                     </select>
                  </div>
                  <div className="col-sm-6 mb-10">
                     <label for="" className="color_label">PIN Code</label>
                     <input type="text" className="form-control" placeholder="Enter PIN Code" />
                  </div>
                  <div className="col-sm-6 mb-10">
                     <label for="" className="color_label">Country<span className="text-danger">*</span></label>
                     <select name="" className="form-select">
                        <option value="">Select Country</option>
                        <option value="">Select Country</option>
                     </select>
                  </div>
                  <div className="col-sm-6 mb-10">
                     <label for="" className="color_label">GSTIN</label>
                     <input type="text" className="form-control" placeholder="Enter GSTIN" />
                  </div>
                  <div className="col-sm-6 mb-10">
                     <label for="" className="color_label">Status</label>
                     <div className="d-flex align-items-center mt-5">
                        <div className="common-checkbox-toggle b2">
                           <input checked="" type="checkbox" title="Restricted IP Access" className="checkbox-toggle-btn modaldata " id="isRestrictedipaccess" /> 
                           <div className="knobs"><span></span></div>
                           <div className="layer"></div>
                        </div>
                        <span className="mb-0 fs-12 fw-500 ms-5 text-success"> Active</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-sm-6 mb-10">
               <div className="row gx-2">
                  <div className="col-sm-6">
                     <label for="" className="color_label">Organization Logo</label>
                     <div className="form-control text-center min-h-150 align-content-center">
                        <img src={img1} />
                        <p className="mb-0 fs-12 fw-600 mt-5">Drag and Drop your files here.</p>
                        <p className="mb-5 text-secondary fs-11">OR</p>
                        <button className="btn_secondary">Browse Files</button>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <label for="" className="color_label">Banner Image</label>
                     <div className="form-control text-center min-h-150 align-content-center">
                        <img src={img1} />
                        <p className="mb-0 fs-12 fw-600 mt-5">Drag and Drop your files here.</p>
                        <p className="mb-5 text-secondary fs-11">OR</p>
                        <button className="btn_secondary">Browse Files</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p className="bg_strip mt-5">GST Details</p>
         <div className="row gx-3 px-15 mt-5">
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">GSTIN</label>
               <input type="text" className="form-control" placeholder="Enter GSTIN" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Business Legal Name</label>
               <input type="text" className="form-control" placeholder="Enter Business Legal Name" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Address</label>
               <input type="text" className="form-control" placeholder="Enter Address" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Default Tax</label>
               <select className="form-select" aria-label="Select Default Tax">
                  <option selected="">Select Default Tax</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
            </div>
         </div>
         <p className="bg_strip mt-5">Bank Details</p>
         <div className="row gx-3 px-15 mt-5">
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Account Name</label>
               <input type="text" className="form-control" placeholder="Enter Account Name" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Account Number</label>
               <input type="text" className="form-control" placeholder="Enter Account Number" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">IFSC</label>
               <input type="text" className="form-control search_modal" placeholder="Enter IFSC" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Bank Name</label>
               <input type="text" className="form-control" placeholder="Enter Bank Name" />
            </div>
         </div>
         <div className="row gx-3 px-15 mt-10 mb-20">
            <div className="col-sm-12 text-end">
               <button type="button" className="btn_border me-10">Cancel</button>
               <button type="button" className="btn_primary">Save</button>
            </div>
         </div>
      </div>
   </div>
</div>
    </>
  )
}

import React from 'react'

export default function OrganizationDetails() {
  return (
    <>
        <div className="page-content">
   <div className="page-content-inner">
      <p className="main_heding"><span className="text-primary">Configuration </span> &gt; Organization Details</p>
      <div className="box px-0 min-h-550">
         <div className="row gx-3 px-15">
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">LinkedIn URL's</label>
               <input type="text" className="form-control" placeholder="Enter LinkedIn URL's" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Contact No.</label>
               <input type="text" className="form-control" placeholder="Enter Contact No." />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Email ID</label>
               <input type="text" className="form-control" placeholder="Enter Email ID" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Address</label>
               <input type="text" className="form-control" placeholder="Enter Address" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">City</label>
               <input type="text" className="form-control" placeholder="Enter City" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">State</label>
               <input type="text" className="form-control" placeholder="Enter State" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Country</label>
               <input type="text" className="form-control" placeholder="Enter State" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">PIN Code</label>
               <input type="text" className="form-control" placeholder="Enter PIN Code" />
            </div>
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">About Us</label>
               <textarea className="form-control min-h-150" cols="3" rows="3" placeholder="Enter About Us"></textarea>
            </div>
            <div className="col-sm-6 mb-10">
               <div className="row gx-2">
                  <div className="col-sm-6">
                     <label for="" className="color_label">Organization Logo</label>
                     <div className="form-control text-center min-h-150 align-content-center">
                        <img src="/assets/images/Configuration_07.svg" />
                        <p className="mb-0 fs-12 fw-600 mt-5">Drag and Drop your files here.</p>
                        <p className="mb-5 text-secondary fs-11">OR</p>
                        <button className="btn_secondary">Browse Files</button>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <label for="" className="color_label">Banner Image</label>
                     <div className="form-control text-center min-h-150 align-content-center">
                        <img src="/assets/images/Configuration_07.svg" />
                        <p className="mb-0 fs-12 fw-600 mt-5">Drag and Drop your files here.</p>
                        <p className="mb-5 text-secondary fs-11">OR</p>
                        <button className="btn_secondary">Browse Files</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p className="bg_strip mt-5">Bank Details</p>
         <div className="row gx-3 px-15 mt-5">
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Facebook URL's</label>
               <input type="text" className="form-control" placeholder="Enter Facebook URL's" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">Instagram URL's</label>
               <input type="text" className="form-control" placeholder="Enter Instagram URL's" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">YouTube URL's</label>
               <input type="text" className="form-control" placeholder="Enter YouTube URL's" />
            </div>
            <div className="col-sm-3 mb-10">
               <label for="" className="color_label">LinkedIn URL's</label>
               <input type="text" className="form-control" placeholder="Enter LinkedIn URL's" />
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

import React from 'react'
import { useState } from 'react';
import img1 from '../assets/img/placehoder.svg';
import img2 from '../assets/img/Add-Icon.svg';
import img3 from '../assets/img/Add_row.svg';
import img4 from '../assets/img/delete_row.svg';
export default function ItemAdd() {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
      }
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
      }
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    const handleRemoveImage = () => {
      setImage(null);
      setImagePreview(null);
    };
  return (
    <>
    <div className='page-content'>
        <div className='page-content-inner'>
        <p className="main_heding"><span className="text-primary">Inventory</span> &gt; Item</p>
        <div className="box px-0">
   <div className="row gx-3">
      <div className="col-sm-6">
         <div className="row ps-15">
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">Item Name<span className="text-danger">*</span></label>
               <input type="text" className="form-control" placeholder="Enter Item Name" />
            </div>
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">Item Name</label>
               <select className="form-select" aria-label="Select Category">
                  <option selected="">Select Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
            </div>
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">Sub-Category</label>
               <select className="form-select" aria-label="Select Sub-Category">
                  <option selected="">Select Sub-Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
            </div>
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">SKU</label>
               <input type="text" className="form-control" placeholder="Enter SKU" />
            </div>
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">HSN Code</label>
               <input type="text" className="form-control" placeholder="Enter HSN Code" />
            </div>
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">Low Stock Alert</label>
               <input type="text" className="form-control" placeholder="Enter Count" />
            </div>
         </div>
         <p className="bg_strip">Item Specification</p>
      </div>
      <div className="col-sm-6">
         <label for="" className="color_label">Sub-Category</label>
         <div className="row gx-2 pe-15">
            <div className="col-sm-6">
            <div
        className="box-dash text-center py-50"
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        {imagePreview ? (
          <div>
            <div>
            <img
              src={imagePreview}
              className="w-70 mb-10"
              alt="Preview"
              style={{ width: "70%", borderRadius: "8px" }}
              onClick={() => document.getElementById("fileInput").click()}
            />
            </div>
            <button className='btn_danger'
              onClick={handleRemoveImage}
            >
              Remove Image
            </button>
          </div>
        ) : (
          <>
            <img
              src={img1} 
              className="w-70 h-70 mb-10"
              alt="Placeholder"
            />
            <p className="fs-12 mb-0">
              Drag your image here, or <br />
              select{" "}
              <span
                className="text-primary"
                onClick={() => document.getElementById("fileInput").click()}
                style={{ cursor: "pointer" }}
              >
                click to browse
              </span>
            </p>
          </>
        )}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
            </div>
            <div className="col-sm-6">
               <div className="row gx-2">
                  <div className="col-sm-6">
                     <div className="box-dash text-center mb-10">
                        <img src={img1} className="w-30 mb-5" />
                        <p className="fs-9 mb-0">Drag your image here, or <br /> select <span className="text-primary">click to browse</span></p>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="box-dash text-center mb-10">
                        <img src={img1} className="w-30 mb-5" />
                        <p className="fs-9 mb-0">Drag your image here, or <br /> select <span className="text-primary">click to browse</span></p>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="box-dash text-center">
                        <img src={img1} className="w-30 mb-5" />
                        <p className="fs-9 mb-0">Drag your image here, or <br /> select <span className="text-primary">click to browse</span></p>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="box-dash text-center">
                        <img src={img1} className="w-30 mb-5" />
                        <p className="fs-9 mb-0">Drag your image here, or <br /> select <span className="text-primary">click to browse</span></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="row gx-3 mt-10">
      <div className="col-sm-6">
         <div className="row ps-15">
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">Dimensions (Length X Width X Height)</label>
               <input type="text" className="form-control" placeholder="Enter Dimensions" />
            </div>
            <div className="col-sm-6 mb-10">
               <label for="" className="color_label">Weight (In kg)</label>
               <input type="text" className="form-control" placeholder="Enter Weight" />
            </div>
         </div>
      </div>
      <div className="col-sm-6">
         <p className="fs-11 mb-0 mt-25 pe-15">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details</p>
      </div>
   </div>
   <div className="row gx-3 px-15 mt-10">
      <div className="col-sm-3 mb-10">
         <div className="d-flex justify-content-between">
            <label for="" className="color_label">Material</label>
            <p className="mb-0 fs-12 text-primary fw-500"><img src={img2} /> Add Gender</p>
         </div>
         <select className="form-select" aria-label="Select Category">
            <option selected="">Select Gender</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </select>
      </div>
      <div className="col-sm-3 mb-10">
         <div className="d-flex justify-content-between">
            <label for="" className="color_label">Brand</label>
            <p className="mb-0 fs-12 text-primary fw-500"><img src={img2} /> Add Gender</p>
         </div>
         <select className="form-select" aria-label="Select Category">
            <option selected="">Select Brand</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </select>
      </div>
      <div className="col-sm-3 mb-10">
         <div className="d-flex justify-content-between">
            <label for="" className="color_label">Material</label>
            <p className="mb-0 fs-12 text-primary fw-500"><img src={img2} /> Add Gender</p>
         </div>
         <select className="form-select" aria-label="Select Category">
            <option selected="">Select Material</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </select>
      </div>
      <div className="col-sm-3 mb-10">
         <div className="d-flex justify-content-between">
            <label for="" className="color_label">Closure Typ</label>
            <p className="mb-0 fs-12 text-primary fw-500"><img src={img2} /> Add Gender</p>
         </div>
         <select className="form-select" aria-label="Select Category">
            <option selected="">Select Closure Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
         </select>
      </div>
   </div>
   <p className="bg_strip">Product Information</p>
   <div className="row gx-3 px-15 mt-10">
      <div className="col-sm-6">
         <label for="" className="color_label">Product Type</label>
         <div className="form-control d-flex align-items-center justify-content-between">
            <div>
               <input className="vertical-align" type="radio" id="Single" name="Product" value="Single" />
               <label for="Single">Single Product</label>
            </div>
            <div>
               <input className="vertical-align" type="radio" id="Variable" name="Product" value="Variable" />
               <label for="Variable">Variable Product</label>
            </div>
            <div>
               <input className="vertical-align" type="radio" id="Multi" name="Product" value="Multi" />
               <label for="Multi">Multi Product</label>
            </div>
         </div>
      </div>
   </div>
   <div className="d-none">
      <div className="row gx-3 px-15 mt-10">
         <div className="col-sm-3 mb-10">
            <label for="" className="color_label">Selling Price(INR)<span className="text-danger">*</span></label>
            <input className="form-control" placeholder="Enter Selling Price" />
         </div>
         <div className="col-sm-3 mb-10">
            <label for="" className="color_label">Unit</label>
            <select className="form-select" aria-label="Select Unit">
               <option selected="">Select Unit</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
         <div className="col-sm-3 mb-10">
            <label for="" className="color_label">Qunatity</label>
            <input className="form-control" placeholder="Enter Qunatity" />
         </div>
      </div>
   </div>
   <div className="d-none">
      <div className="row gx-3 px-15 mt-10">
         <div className="col-sm-3">
            <label for="" className="color_label">Attribute</label>
         </div>
         <div className="col-sm-6">
            <label for="" className="color_label">Option</label>
         </div>
      </div>
      <div className="row gx-3 px-15">
         <div className="col-sm-3 mb-10">
            <input className="form-control" placeholder="Enter Selling Price" />
         </div>
         <div className="col-sm-6 mb-10 d-flex">
            <select className="form-select" aria-label="Select Category">
               <option selected="">Select Category</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
            <img src={img4} className="ms-10" />
         </div>
      </div>
      <div className="row gx-3 px-15">
         <div className="col-sm-3 mb-10">
            <input className="form-control" placeholder="Enter Selling Price" />
         </div>
         <div className="col-sm-6 mb-10 d-flex">
            <select className="form-select" aria-label="Select Category">
               <option selected="">Select Category</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
            <img src="/assets/images/Add_row.svg" className="ms-10" />
         </div>
      </div>
   </div>
   <div className="">
      <div className="row gx-3 px-15 mt-10">
         <div className="col-sm-3">
            <label for="" className="color_label">Selling Price(INR)*</label>
            <input className="form-control" placeholder="Enter Selling Price" />
         </div>
         <div className="col-sm-3">
            <label for="" className="color_label">Unit</label>
            <select className="form-select" aria-label="Select Unit">
               <option selected="">Select Unit</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
      </div>
      <div className="row gx-3 px-15 mt-10">
         <div className="col-sm-3">
            <label for="" className="color_label">Item Name</label>
         </div>
         <div className="col-sm-3">
            <label for="" className="color_label">Quantity</label>
         </div>
      </div>
      <div className="row gx-3 px-15">
         <div className="col-sm-3 mb-10">
            <select className="form-select" aria-label="Select Item Name">
               <option selected="">Select Item Name</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
         <div className="col-sm-3 mb-10">
            <input className="form-control" placeholder="Enter Quantity" />
         </div>
         <div className="col-sm-1 ps-0">
            <img src={img4} className="w-20 mt-5" />
         </div>
      </div>
      <div className="row gx-3 px-15">
         <div className="col-sm-3 mb-10">
            <select className="form-select" aria-label="Select Item Name">
               <option selected="">Select Item Name</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
            </select>
         </div>
         <div className="col-sm-3 mb-10">
            <input className="form-control" placeholder="Enter Quantity" />
         </div>
         <div className="col-sm-1 ps-0">
            <img src="/assets/images/Add_row.svg" className="w-20 mt-5" />
         </div>
      </div>
   </div>
   <div className="row gx-3 px-15 mt-10">
      <div className="col-sm-9">
         <label for="" className="color_label">Description</label>
         <textarea className="form-control" cols="3" rows="3" placeholder="Enter Description"></textarea>
      </div>
   </div>
   <div className="row gx-3 px-15 mt-10">
      <div className="col-sm-3">
         <label for="" className="color_label">Do you want to publish it on the website:</label>
         <div className="d-flex align-items-center">
            <div className="common-checkbox-toggle b2">
               <input type="checkbox" title="Restricted IP Access" className="checkbox-toggle-btn modaldata " id="isRestrictedipaccess" /> 
               <div className="knobs"><span></span></div>
               <div className="layer"></div>
            </div>
            <span className="mb-0 fs-12 fw-500 ms-5"> NO</span>
         </div>
      </div>
      <div className="col-sm-2">
         <label for="" className="color_label">Publish Later:</label>
         <div className="d-flex align-items-center">
            <div className="common-checkbox-toggle b2">
               <input type="checkbox" title="Restricted IP Access" className="checkbox-toggle-btn modaldata " id="isRestrictedipaccess" /> 
               <div className="knobs"><span></span></div>
               <div className="layer"></div>
            </div>
            <span className="mb-0 fs-12 fw-500 ms-5"> NO</span>
         </div>
      </div>
      <div className="col-sm-4">
         <div className="row">
            <div className="col-sm-6">
               <label for="" className="color_label">Date</label>
               <input type="text" className="form-control Date" placeholder="Select Date" />
            </div>
            <div className="col-sm-6">
               <label for="" className="color_label">Time</label>
               <input type="text" className="form-control Time" placeholder="Select Time" />
            </div>
         </div>
      </div>
   </div>
   <div className="row gx-3 px-15 mt-10">
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

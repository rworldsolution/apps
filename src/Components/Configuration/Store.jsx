import React from 'react'
import CommonList from '../CommonList'
import Actions from '../Actions'
export default function Store() {
  return (
    <>
        <div className="page-content">
   <div className="page-content-inner">
      <p className="main_heding"><span className="text-primary">Configuration </span> &gt; Store</p>
      <div className="row">
         <div className="col-sm-12">
            <div className="box px-0 min-h-550 pb-0">
              <div>
               <CommonList />
              </div>
               <table className="border-collapse-striped px-3">
                  <thead>
                     <tr>
                        <th className="text-nowrap w-50"><input className="vertical-align" type="checkbox" /></th>
                        <th className="text-nowrap">Store Name</th>
                        <th className="text-nowrap">Business Legal Name</th>
                        <th className="text-nowrap">Mobile No.</th>
                        <th className="text-nowrap">Address</th>
                        <th className="text-nowrap w-150">GSTIN</th>
                        <th className="text-nowrap">Status</th>
                        <th className="text-nowrap text-end">Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td><input className="vertical-align" type="checkbox" /></td>
                        <td>
                           Ashok Sahitya Book Depo, Mdgr
                        </td>
                        <td>Edunext Technologies Pvt. Ltd.</td>
                        <td>9876463732</td>
                        <td>H-182, Noida Sector 63</td>
                        <td>22AAAAA0000A1Z5</td>
                        <td className="text-danger">Inactive</td>
                        <td className="text-end">
                           <Actions />
                        </td>
                     </tr>
                     <tr>
                        <td><input className="vertical-align" type="checkbox" /></td>
                        <td>
                           Ashok Sahitya Book Depo, Mdgr
                        </td>
                        <td>Edunext Technologies Pvt. Ltd.</td>
                        <td>9876463732</td>
                        <td>H-182, Noida Sector 63</td>
                        <td>22AAAAA0000A1Z5</td>
                        <td className="text-success">Active</td>
                        <td className="text-end">
                        <Actions />
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</div>
    </>
  )
}

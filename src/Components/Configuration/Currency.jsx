import React from 'react'
import CommonList from '../CommonList'
import Actions from '../Actions'

export default function Currency() {
  return (
    <>
        <div className="page-content">
   <div className="page-content-inner">
      <p className="main_heding"><span className="text-primary">Configuration </span> &gt; currency </p>
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
                        <th style={{width: '38%'}} className="text-nowrap">Currency Name</th>
                        <th className="text-nowrap">Short Name</th>
                        <th className="text-nowrap text-end">Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td><input className="vertical-align" type="checkbox" /></td>
                        <td>
                           Indian Rupee (INR)
                        </td>
                        <td>INR</td>
                        <td className="text-end">
                           <Actions />
                        </td>
                     </tr>
                     <tr>
                        <td><input className="vertical-align" type="checkbox" /></td>
                        <td>
                           Bangladeshi Taka​​
                        </td>
                        <td>TK</td>
                        <td className="text-end">
                           <Actions />
                        </td>
                     </tr>
                     <tr>
                        <td><input className="vertical-align" type="checkbox" /></td>
                        <td>
                           Japanese Yen
                        </td>
                        <td>JPY</td>
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

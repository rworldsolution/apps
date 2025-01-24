import React from 'react'
import filter from '../assets/img/Filter.svg';
import add from '../assets/img/Add.svg';
import imgExport from '../assets/img/Export.svg';
import tableFilter from '../assets/img/table-Filter.svg';
import leftArrow from '../assets/img/left_arrow.svg';
import rightArrow from '../assets/img/right_arrow.svg';
export default function () {
  return (
    <>
    <div className='row pb-10 px-15'>
        <div className='col-sm-4'>
        <button type="button" className="btn_border"><img src={filter} alt="Filter" /> Filter</button>
        <input class="form-control search_common" type="text" placeholder="Search here..."></input>
        </div>
        <div className='col-sm-8 text-end'>
        <button type="button" className="btn_primary"><img src={add} alt="Add" /> Add</button>
        <button type="button" className="btn_border mx-10"><img src={imgExport} alt="Filter" /> Export</button>
        <button type="button" class="btn_border me-10"><img class="w-18" src={tableFilter} alt="Filter" /></button>
        <ul className="pagination">
            <li>1-10 of 120 <img src={leftArrow} /> <img className="right_arrow" src={rightArrow} /></li>
        </ul>
        </div>
    </div>
    </>
    
  )
}

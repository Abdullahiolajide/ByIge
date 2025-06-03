import React from 'react'

const FilterBar = ({category, children, setSearchParams, ...rest}) => {
  return (
    <button {...rest}
    onClick={
        ()=>setSearchParams(prevParams=> {
        prevParams.set("category", children.toLowerCase())
        return prevParams
    })} className={`cursor-pointer text-sm md:text-base px-4 md:px-6 py-2 font-medium rounded-md ${category?.toLowerCase() == children?.toLowerCase() && "bg-gray-200"} `}>{children}</button>
  )
}

export default FilterBar
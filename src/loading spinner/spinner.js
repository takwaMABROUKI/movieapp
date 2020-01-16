import React from 'react'
import './spinner.css'
function Spinner(Component) {
  return function SpinnerComponent({ loading, ...props }) {
    if (loading) {
    return (<div className="loader"></div>)
            }
            else
          
    return (<Component {...props} />)}}

    export default Spinner;
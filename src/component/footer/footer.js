import React from 'react'
import Styles from "./footer.module.css" //Module css

export const Footer = () => {
  return (
    <div className={`text-center bg-primary text-white position-fixed bottom-0 w-100 ${Styles.footer}`}>
        &copy;Rights Belongs to me.
    </div>
  )
}

import { inter } from "./fonts"
import Link from "next/link"
import { NavComponents,ModifyingComponent} from "./nav"
import  "./ui/globals.css"
import {Provider} from "./providers"
import { Footer } from "./footer"

export const metadata = {
  title: 'WhatSheWears',
  description: 'classy thrift store',
}

export default function RootLayout({children}) {
  
 return (
    <html lang="en">
      <body className={`${inter.className} w-full min-h-screen overflow-x-hidden m-0 p-0  antialiased`}>
        <Provider>
        <div className="w-full dark:bg-black dark:text-slate-600 min-h-screen select-none">
          {/*use cslx for conditional styling for now use a manual state */}
          <NavComponents/>
          <div className="min-h-screen w-full overflow-x-hidden">
          {children}
          </div>
          <Footer/>
        </div>
        </Provider>
      </body>
    </html>
  )
}

import { ShoppingBag } from 'lucide-react'
import React from 'react'


const Navbar = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <ShoppingBag size={23} />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">
            Store<span className="text-blue-600">.</span>
          </span>
        </div>
  )
}

export default Navbar
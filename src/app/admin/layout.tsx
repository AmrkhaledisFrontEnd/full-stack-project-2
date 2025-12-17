import React from 'react'
import Aside from './_components/Aside/Aside'
// ========================================================================
function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="section-space pt-1 flex md:flex-row flex-col gap-7 container-css">
            <Aside />
            {children}
        </div>
    )
}

export default AdminLayout

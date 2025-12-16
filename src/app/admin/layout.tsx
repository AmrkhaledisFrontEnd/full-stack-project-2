import React from 'react'
import Aside from './_components/Aside/Aside'
// ========================================================================
function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="section-space pt-1 flex gap-7">
            <Aside />
            {children}
        </div>
    )
}

export default AdminLayout

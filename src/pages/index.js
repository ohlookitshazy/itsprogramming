import * as React from "react"
import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import { SideNav } from '../components/side-nav';

// markup
const IndexPage = () => {
  return (
    <div className="p-grid">
      <div className="p-col-2">
        <SideNav />
      </div>
    </div>
  )
}

export default IndexPage

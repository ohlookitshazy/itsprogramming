import React from "react"
import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import { TieredMenu } from 'primereact/tieredmenu';

let items = [
  {label: 'Introduction', url: '/2020-02-18-itsprogramming-intro'},
  {label: '1. The Basics', url: '/the-basics'},
  {label: '2. HTML', url: '/html'},
  {label: '3. CSS', url: '/css'},
  {label: '4. JavaScript', url: '/javascript'},
  {label: '5. The Web', url: '/the-web'},
  {label: '6. Dev Tools', url: '/dev-tools'},
  {label: '7. Bootstrap', url: '/bootstrap'},
  {label: '8. jQuery', url: '/jquery'},
  {label: '9. Advanced HTML', url: '/advanced-html'},
  {label: '10. Advanced CSS', url: '/advanced-css'},
  {label: '11. Advanced JavaScript', url: '/advanced-javascript'},
  {label: '12. Hosting & Deployment', url: '/hosting-deployment'}
];

// markup
export function SideNav () {
  return (
    <React.Fragment>
      <div className="p-col-2 side-nav-col">
      <a href="/"><h1 className="side-nav-heading">ItsProgramming</h1></a>
      <TieredMenu className="side-nav" model={items} />
      </div>
    </React.Fragment>
  )
}

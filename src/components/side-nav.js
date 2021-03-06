import React, { useRef, useState, useEffect } from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { Sidebar } from 'primereact/sidebar';

let items = [
  { label: 'Introduction', url: '/itsprogramming-intro' },
  { label: '1. The Basics', url: '/category/the-basics' },
  { label: '2. HTML', url: '/category/html' },
  { label: '3. CSS', url: '/category/css' },
  { label: '4. JavaScript', url: '/category/javascript' },
  { label: '5. The Web', url: '/category/the-web' },
  { label: '6. Dev Tools', url: '/category/dev-tools' },
  { label: '7. Bootstrap', url: '/category/bootstrap' },
  { label: '8. jQuery', url: '/category/jquery' },
  { label: '9. Advanced HTML', url: '/category/advanced-html' },
  { label: '10. Advanced CSS', url: '/category/advanced-css' },
  { label: '11. Advanced JavaScript', url: '/category/advanced-javascript' },
  { label: '12. Hosting & Deployment', url: '/category/hosting-deployment' }
];

// markup
export function SideNav() {
  const menu = useRef(null);
  const [navVisible, setNavVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

useEffect(() => {
  if(window.screen.width > 992 && navVisible == false){
    setNavVisible(true);
  }
});

  return (
    <React.Fragment>
      <Sidebar className="main-side-nav" dismissable={false} showCloseIcon={false} visible={true} modal={false} onHide={() => setNavVisible(false)}>
        <a href="/"><h1 className="side-nav-heading">ItsProgramming</h1></a>
        <TieredMenu className="side-nav" model={items} />
        <h4 className="side-nav-footer">2018 - 2021 by <a href="https://itshazy.com" rel="noreferrer" target="_blank">Hazy</a></h4>
      </Sidebar>

      <Button className="side-nav-close-button" icon="pi pi-bars" onClick={(e) => setResponsiveNavVisible(true)} />

      <Sidebar dismissable={true} showCloseIcon={false} visible={responsiveNavVisible} onHide={() => setResponsiveNavVisible(false)}>
        <a href="/"><h1 className="side-nav-heading">ItsProgramming</h1></a>
        <TieredMenu className="side-nav" model={items} />
        <h4 className="side-nav-footer">2018 - 2021 by <a href="https://itshazy.com" rel="noreferrer" target="_blank">Hazy</a></h4>
      </Sidebar>
    </React.Fragment>
  )
}

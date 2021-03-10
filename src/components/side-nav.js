import React, { useRef, useState, useEffect } from 'react';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { Sidebar } from 'primereact/sidebar';

let items = [
  { label: 'Introduction', url: '/2020-02-18-itsprogramming-intro' },
  { label: '1. The Basics', url: '/the-basics' },
  { label: '2. HTML', url: '/html-category' },
  { label: '3. CSS', url: '/css-category' },
  { label: '4. JavaScript', url: '/javascript-category' },
  { label: '5. The Web', url: '/the-web' },
  { label: '6. Dev Tools', url: '/dev-tools' },
  { label: '7. Bootstrap', url: '/bootstrap-category' },
  { label: '8. jQuery', url: '/jquery' },
  { label: '9. Advanced HTML', url: '/advanced-html' },
  { label: '10. Advanced CSS', url: '/advanced-css' },
  { label: '11. Advanced JavaScript', url: '/advanced-javascript' },
  { label: '12. Hosting & Deployment', url: '/hosting-deployment' }
];

// markup
export function SideNav() {
  const menu = useRef(null);
  const [navVisible, setNavVisible] = useState(true);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

useEffect(() => {
  if(window.screen.width < 992){
    setSmallScreen(true);
    setNavVisible(false);
  }

});

  return (
    <React.Fragment>
      <Sidebar dismissable={false} showCloseIcon={false} visible={navVisible} onHide={() => setNavVisible(false)}>
        <a href="/"><h1 className="side-nav-heading">ItsProgramming</h1></a>
        <TieredMenu className="side-nav" model={items} />
      </Sidebar>

      <Button className="side-nav-close-button" icon="pi pi-bars" onClick={(e) => setResponsiveNavVisible(true)} />

      <Sidebar dismissable={true} visible={responsiveNavVisible} onHide={() => setResponsiveNavVisible(false)}>
        <a href="/"><h1 className="side-nav-heading">ItsProgramming</h1></a>
        <TieredMenu className="side-nav" model={items} />
      </Sidebar>
    </React.Fragment>
  )
}

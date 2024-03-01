import React, { useState } from 'react';
import { Sidenav, Nav, Icon, Container, Header, Content } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { AppRouter } from '../others/appRouter';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from './header/header';

export const SideBar = () => {
    const [activeKey, setActiveKey] = useState('1');
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleSelect = (eventKey: any) => {
        setActiveKey(eventKey);
    };

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const Drawer = () => {
        return (
            <Container className='mainlayout' style={{ display: 'flex', flexDirection: 'row'}}>
                <Sidenav className='sidenav'
                    expanded={expanded}
                    // onMouseEnter={handleToggle}
                    // onMouseLeave={handleToggle}
                    style={{ width: expanded ? 250 : 56 }}
                >
                    {/*<Sidenav.Header className='sidenavhead'>
                        P  {<i className="rs-icon rs-icon-p"></i>}
        </Sidenav.Header>*/}
                    <Sidenav.Body>
                        <Nav className='sidemenu'>
                            <Nav.Item eventKey="1" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M20.05 9.61c0 3.93-2.53 6.62-6.15 6.62-1.73 0-3.15-.71-3.68-1.6l.03.91v5.63h-3.7V6.62c0-.2-.05-.25-.28-.25H5v-3.1h3.1c1.41 0 1.77 1.23 1.87 1.76.56-.94 2.02-2.03 4.1-2.03 3.58 0 5.98 2.66 5.98 6.61Zm-3.77.03c0-2.1-1.37-3.55-3.1-3.55-1.41 0-3.01.94-3.01 3.58 0 1.72.96 3.52 2.96 3.52 1.48 0 3.15-1.07 3.15-3.55Z"></path></svg>} onSelect={(e) => navigate("/pipeline")}>
                                Pipeline
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 16c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Z"></path><path d="M11.25 2.53c-4.65.36-8.36 4.07-8.72 8.72H1c-.41 0-.75.34-.75.75s.34.75.75.75h1.53c.36 4.65 4.07 8.36 8.72 8.72V23c0 .41.34.75.75.75s.75-.34.75-.75v-1.53c4.65-.36 8.36-4.07 8.72-8.72H23c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.53c-.36-4.65-4.07-8.36-8.72-8.72V1c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.53ZM20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8Z"></path></svg>}>
                                Leads
                            </Nav.Item>
                            <Nav.Item eventKey="3" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-.72 16v-1.04c-.67-.1-1.2-.32-1.6-.58-.5-.33-.77-.71-.92-.94-.22-.35-.1-.82.24-1.03.35-.22.82-.12 1.04.24.07.12.2.3.47.48.25.16.68.34 1.37.38h.13c1.23-.04 1.84-.77 1.84-1.39 0-.2-.04-.32-.1-.42-.06-.12-.17-.25-.4-.43-.36-.28-.63-.36-1.22-.55l-.28-.1-.37-.1-.1-.02c-.17-.04-.38-.1-.6-.19-.25-.1-.51-.23-.7-.34-.13-.07-.26-.15-.38-.24-.33-.25-.6-.54-.79-.9-.19-.37-.26-.75-.26-1.15 0-1.46 1.18-2.49 2.6-2.8V6c0-.41.34-.75.75-.75s.75.34.75.75v.85c.66.1 1.17.31 1.57.57.5.33.77.72.92.94.22.35.1.82-.24 1.04-.35.22-.82.1-1.04-.24-.07-.12-.2-.31-.47-.48-.25-.17-.68-.35-1.37-.39H12c-1.22.05-1.86.8-1.86 1.39 0 .22.04.35.1.46.05.1.15.23.34.39l.04.03.2.1c.16.1.34.2.5.26.13.05.26.09.43.13l.08.02.47.13.27.08c.58.19 1.11.36 1.7.81.31.25.59.52.79.87.2.36.28.75.28 1.16 0 1.45-1.15 2.5-2.57 2.8V18c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75Z"></path></svg>}>
                                Deals
                            </Nav.Item>
                            <Nav.Item eventKey="4" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M8 3c0-.55.45-1 1-1h6c.55 0 1 .45 1 1h2.5c1.1 0 2 .9 2 2v15c0 1.1-.9 2-2 2h-13c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2H8Zm0 2v-.5H5.5c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V5c0-.28-.22-.5-.5-.5H16V5c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1Zm1.4 7.72c-.28-.3-.76-.3-1.05 0-.3.3-.3.77 0 1.06l2.12 2.12c.14.14.33.22.53.22s.39-.08.53-.22l4.95-4.95c.3-.3.3-.77 0-1.06-.3-.3-.77-.3-1.06 0L11 14.31l-1.6-1.59Z"></path></svg>}>
                                Projects
                            </Nav.Item>
                            <Nav.Item eventKey="5" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.1 9.07c4.14-1.45 6.71-3.4 8.23-4.93.39 1.37.84 3.34 1.18 5.92.34 2.57.41 4.59.39 6.01-1.85-1.08-4.8-2.28-9.1-2.62l-.7-4.38Zm-.55 5.81c5.57.22 8.87 1.93 10.46 3.05.51.36 1.3.08 1.34-.54.1-1.47.11-4-.35-7.53-.47-3.53-1.14-5.97-1.61-7.37-.2-.59-1.03-.65-1.43-.17-1.25 1.5-4 4-9.32 5.65l-.97.29c-.9.25-1.88.47-2.93.66-1.09.2-1.87 1.2-1.72 2.3l.26 1.98c.14 1.1 1.15 1.86 2.25 1.77 1.07-.08 2.07-.12 3.01-.11l1.01.02Zm14.42-5.41c.18 1.32-.54 2.56-1.68 3.1-.07-.86-.16-1.81-.3-2.84-.14-1.03-.29-1.97-.45-2.82 1.25.22 2.26 1.23 2.43 2.56ZM7.5 20.57 5.76 16.4c.6-.03 1.2-.05 1.76-.04l.99.02.5.02 1.25 3.03c.32.76-.05 1.64-.81 1.96-.77.31-1.65-.05-1.96-.82Z"></path></svg>}>
                                Campaigns
                            </Nav.Item>
                            <Nav.Item eventKey="6" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.42 8.38c-.35-.23-.81-.14-1.04.2-.23.35-.14.81.2 1.04l5.73 3.82c.42.28.96.28 1.38 0l5.73-3.82c.34-.23.43-.7.2-1.04-.23-.34-.7-.43-1.04-.2l-5.3 3.53c-.17.12-.39.12-.56 0l-5.3-3.53Z"></path><path d="M2 7c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V7Zm3-1.5c-.83 0-1.5.67-1.5 1.5v10c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V7c0-.83-.67-1.5-1.5-1.5H5Z"></path></svg>}>
                                Sales Inbox
                            </Nav.Item>
                            <Nav.Item eventKey="7" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7.5 1c.41 0 .75.34.75.75V3h7.5V1.75c0-.41.34-.75.75-.75s.75.34.75.75V3h.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25C4.45 21 3 19.54 3 17.75V6.25C3 4.45 4.46 3 6.25 3h.5V1.75c0-.41.34-.75.75-.75ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V7.5h15V6.25c0-.97-.78-1.75-1.75-1.75H6.25ZM4.5 17.75c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V9h-15v8.75ZM14 13c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3Z"></path></svg>}>
                                Activities
                            </Nav.Item>
                            <Nav.Item eventKey="8" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.5 13.5c1.07 0 1.94-.88 1.94-1.96S7.57 9.6 6.5 9.6c-1.07 0-1.94.87-1.94 1.95s.87 1.96 1.94 1.96Zm0 1.48c-2.02 0-3.31 1.34-3.5 3.08-.02.24.18.44.42.44h6.16c.24 0 .44-.2.42-.44-.19-1.74-1.48-3.08-3.5-3.08ZM11.75 12c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5.5ZM11 15.75c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75Z"></path><path d="M5.75 2.5C4.23 2.5 3 3.73 3 5.25V6.5c-1.66 0-3 1.26-3 2.81v9.38c0 1.55 1.34 2.81 3 2.81h15c1.66 0 3-1.26 3-2.81V17.5h.25c1.52 0 2.75-1.23 2.75-2.75v-9.5c0-1.52-1.23-2.75-2.75-2.75H5.75ZM21 16V9.31c0-1.55-1.34-2.81-3-2.81H4.5V5.25C4.5 4.56 5.06 4 5.75 4h15.5c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25H21ZM1.5 18.69V9.3c0-.77.67-1.4 1.5-1.4h15c.83 0 1.5.63 1.5 1.4v9.38c0 .77-.67 1.4-1.5 1.4H3c-.83 0-1.5-.63-1.5-1.4Z"></path></svg>}>
                                Contacts
                            </Nav.Item>
                            <Nav.Item eventKey="9" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M2.75 3c-.41 0-.75.34-.75.75 0 4.09-.02 11.18 0 15.27 0 1.1.9 1.98 2 1.98h17.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4c-.28 0-.5-.22-.5-.5v-.52L8 13.06 10.59 15c.3.25.76.22 1.03-.07l4.63-5.02V12c0 .41.34.75.75.75s.75-.34.75-.75V8c0-.41-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.29L11 13.4l-2.52-1.98c-.32-.26-.8-.22-1.06.1l-3.92 4.7V3.76c0-.41-.34-.75-.75-.75Z"></path></svg>}>
                                Insights
                            </Nav.Item>
                            <Nav.Item eventKey="10" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M10.62 1.16c.85-.5 1.9-.5 2.76 0L21 5.57c.62.36 1 1.02 1 1.73v8.84c0 .98-.52 1.89-1.37 2.38L13 22.94c-.62.36-1.38.36-2 0l-7.63-4.42C2.52 18.03 2 17.12 2 16.14V7.3c0-.7.38-1.37 1-1.73l7.62-4.41Zm2 1.3c-.38-.23-.86-.23-1.25 0L8.87 3.9l7.76 4.49 3.12-1.82-7.12-4.12Zm7.88 5.43-7.75 4.48v8.98l7.13-4.13c.38-.22.62-.63.62-1.08V7.9Zm-9.25 13.46v-8.98L3.5 7.9v8.25c0 .45.24.86.62 1.08l7.13 4.13Zm-7-14.77 7.75 4.5 3.13-1.82-7.76-4.49-3.12 1.81Z"></path></svg>}>
                                Products
                            </Nav.Item>
                            <Nav.Item eventKey="11" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M21.94 10.9c-.08.38-.27.85-.68 1.23l-.25.2v5.92c0 1.52-1.23 2.75-2.75 2.75H5.76C4.22 21 3 19.77 3 18.25v-5.91c-.1-.06-.18-.13-.26-.2-.41-.39-.6-.86-.68-1.24-.16-.68.03-1.35.16-1.8l1.35-4.82c.2-.76.9-1.28 1.68-1.28h13.5c.78 0 1.47.52 1.68 1.28l1.35 4.81c.13.46.32 1.13.16 1.82Zm-1.6-1.4-1.35-4.82c-.03-.1-.13-.18-.24-.18h-1.9l.9 5.38c.06.33.18.47.41.74.28.34.68.63 1.35.63.43 0 .63-.12.73-.22.11-.1.2-.26.24-.46.02-.11.03-.26 0-.45-.03-.2-.08-.39-.14-.62Zm-4.36.96c.18-.22.26-.51.21-.8l-.86-5.16h-2.57V10c0 .25.24.43.4.62.27.34.68.63 1.34.63s1.07-.3 1.34-.63l.14-.16ZM11.26 10V4.5H8.68l-.86 5.18c-.05.28.03.57.21.8l.13.14c.27.34.68.63 1.34.63s1.07-.3 1.34-.63c.15-.18.42-.38.42-.62Zm-5.42.62c.22-.27.37-.42.42-.74l.9-5.38h-1.9c-.12 0-.22.07-.25.18L3.66 9.5c-.06.23-.11.42-.14.62-.03.19-.02.34 0 .45.05.2.13.36.24.46.1.1.3.22.73.22.67 0 1.07-.3 1.35-.63Zm13.67 2.13c-.6 0-1.1-.14-1.52-.36-.41-.22-.74-.51-.99-.81-.24.3-.57.6-.98.81-.42.22-.92.36-1.52.36s-1.1-.14-1.51-.36c-.42-.22-.74-.51-.99-.81-.25.3-.57.6-.99.81-.41.22-.91.36-1.51.36s-1.1-.14-1.52-.36c-.41-.22-.74-.51-.98-.81-.25.3-.58.6-1 .81-.4.22-.9.36-1.5.36v5.5c0 .69.56 1.25 1.25 1.25h12.51c.7 0 1.25-.56 1.25-1.25v-5.5Z"></path></svg>}>
                                Marketplace
                            </Nav.Item>
                            <Nav.Item eventKey="11" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 1c.41 0 .75.34.75.75v.8c1.69.2 3.16 1.12 4.11 2.43h1.89c.41 0 .75.36.75.77 0 .41-.34.73-.75.73h-1.1c.17.48.29 1 .33 1.52v.02c.99.16 1.7 1.02 1.7 1.99 1.31.2 2.32 1.34 2.32 2.71v2.53c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.53c0-.68-.55-1.23-1.23-1.24l-2.55 7.19c-.2.58-.67 1.03-1.24 1.22V20c0 1.66-1.34 3-3 3h-.96c-1.66 0-3-1.34-3-3v-.1c-.57-.2-1.03-.65-1.24-1.23l-2.55-7.2c-.68.02-1.23.57-1.23 1.25v2.53c0 .41-.34.75-.75.75S2 15.66 2 15.25v-2.53c0-1.37 1.01-2.51 2.33-2.71 0-.97.7-1.83 1.69-1.99V8c.04-.52.15-1.02.32-1.5H5.25c-.41 0-.75-.34-.75-.75S4.84 5 5.25 5h1.88c.95-1.32 2.42-2.24 4.12-2.45v-.8c0-.41.34-.75.75-.75Zm2.9 17.5c.19-.03.34-.15.4-.33l2.84-8c.12-.33-.12-.67-.47-.67H6.33c-.35 0-.59.34-.47.67l2.83 8c.07.18.23.3.41.33h5.8ZM10.02 20c0 .83.67 1.5 1.5 1.5h.96c.83 0 1.5-.67 1.5-1.5h-3.96ZM12 4C9.68 4 7.78 5.75 7.53 8h8.94c-.25-2.25-2.15-4-4.47-4Zm-2 8.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-.41 0-.75-.34-.75-.75Zm-6.5 6c0 .41-.34.75-.75.75S2 18.66 2 18.25s.34-.75.75-.75.75.34.75.75Zm17.75.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75ZM12 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Z"></path><path d="M10 7.5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1Z"></path></svg>}>
                                Automations
                            </Nav.Item>
                            <Nav.Item eventKey="11" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11.76 9.62c.33-.06.75-.03 1.08.27.33.3.42.71.43 1.07 0 .7-.32 1.68-.97 2.95-.43.84-.6 1.47-.63 1.9-.02.19 0 .31.01.39.16-.1.4-.37.64-.89.26-.6.56-1.1.86-1.47.15-.18.3-.35.49-.47.17-.13.4-.25.68-.26.33-.02.62.12.82.36.18.21.26.47.3.68.06.44 0 1.02-.15 1.68v.07l.1-.07c.17-.11.3-.24.37-.34.24-.33.7-.4 1.02-.17.32.24.4.69.16 1.01-.2.28-.46.52-.74.7-.27.19-.62.36-.97.4-.36.06-.9 0-1.22-.49-.27-.42-.24-.95-.13-1.43l.05-.25c-.1.18-.2.39-.31.63-.3.7-.71 1.23-1.19 1.53-.47.31-1.15.44-1.7-.02-.47-.4-.6-1.07-.54-1.71.06-.67.3-1.5.79-2.44.55-1.08.75-1.76.8-2.13-.06.03-.13.06-.2.11-.18.11-.4.28-.64.5-.45.45-.91 1.06-1.26 1.76-.8 1.64-1.26 3.69-1.38 4.32-.07.4-.45.65-.84.58-.4-.07-.66-.45-.58-.85.12-.66.6-2.87 1.5-4.7.42-.85.98-1.6 1.56-2.14.54-.53 1.19-.98 1.8-1.08Z"></path><path d="m21 8-6-6H6C4.34 2 3 3.34 3 5v14c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V8ZM6 3.5h7.5v2.25c0 2.07 1.68 3.75 3.75 3.75h2.25V19c0 .83-.67 1.5-1.5 1.5H6c-.83 0-1.5-.67-1.5-1.5V5c0-.83.67-1.5 1.5-1.5Zm9 .62L18.88 8h-1.63C16.01 8 15 7 15 5.75V4.12Z"></path></svg>}>
                                Documents
                            </Nav.Item>
                            <Nav.Item eventKey="11" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="m15.97 12.22-3.22 3.22V3.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v11.69l-3.22-3.22c-.3-.3-.77-.3-1.06 0-.3.29-.3.76 0 1.06l4.5 4.5c.3.29.77.29 1.06 0l4.5-4.5c.3-.3.3-.77 0-1.06-.3-.3-.77-.3-1.06 0ZM4.5 15.75c0-.41-.34-.75-.75-.75-.42 0-.75.34-.75.75v4.5c0 .41.33.75.75.75h16.5c.41 0 .75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.75h-15v-3.75Z"></path></svg>}>
                                Import data
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>

                <Container className='maincontent'>
                    <HeaderComponent />
                    <Content className='maincontentinner'>
                        <AppRouter />
                    </Content>
                </Container>
            </Container>
        );
    };

    return <Drawer />;
}

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};

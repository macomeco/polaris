import { Frame, Page,Layout,  Navigation,DisplayText, AppProvider, Card, RadioButton, Stack } from "@shopify/polaris";
import {HomeMajor ,OrdersMajor,ProductsMajor,CustomersMajor, CategoriesMajor, FeaturedContentMajor,ShipmentMajor,SettingsMajor,StoreMajor} from "@shopify/polaris-icons";
import { useCallback, useState, VFC } from "react";

import Peach from './Peach';
//import ProductsMaster from "./ProductsMaster";
import Categories from "./Categories";
import Blogs from "./Blogs";
import News from './News';
import Sales from "./Sales";
import AddProducts from "./CreateProducts";
import Shipment from "./Shipment";
import Orders from "./Orders";
import Customers from "./Customers";
import AllProducts from "./AllProducts";
import ToDo from "./ToDo";
import SettingsSote from './Settings_store';

const Navi: VFC=(NaviProps)=>{
    const [flag,setFlag]=useState('Home');
    const handleflag=useCallback (
        (newflag)=>{setFlag(newflag);},[]
    );
    type pagetitle={
        title:string;
    };
    const PageTitle: React.VFC<pagetitle>=(props)=>(
        <Layout.Section>
            <DisplayText size="large">{props.title}</DisplayText>
        </Layout.Section>
    );
    //colorscheme
    type UserColorTheme="light" | "dark";
    const [UserTheme,setUserTheme]=useState<UserColorTheme>("light");
    const UserThemeToggle=useCallback(
        (e,newteheme)=>{setUserTheme(newteheme);
    },[]);
    const Settings = (
        <> 
        <Layout.Section>
            <Card primaryFooterAction={{content:'Save'}}>
                <Card.Section title="Theme">
                    <Stack vertical>
                        <RadioButton
                            label="Ligth"
                            onChange={UserThemeToggle}
                            checked={UserTheme === "light"}
                            id="light"
                            name="accounts"
                        />
                        <RadioButton
                            label="Dark"
                            onChange={UserThemeToggle}
                            checked={UserTheme === "dark"}
                            id="dark"
                            name="accounts"
                        />
                    </Stack>
                </Card.Section>
                <Card.Section title="Font Size">

                </Card.Section>
            </Card>
        </Layout.Section>
        </>
    );
    
    const NaviContents=(
        <Navigation location="/">
            <Navigation.Section
                items={[
                    {
                        url: '/',
                        label: 'Home',
                        icon: HomeMajor,
                        onClick: ()=>handleflag('Home'),
                    },
                    
                    {
                        url: '/',
                        label: 'All Products',
                        icon: ProductsMajor,
                        badge:'1',
                        onClick: ()=>{handleflag('All Products');},
                        /*
                        subNavigationItems:[
                            {
                                
                                onClick: ()=>{handleflag('All Products');},
                                url:'/',
                                label:'All Products',
                                //new:true,
                            },
                        ]
                        */
                    },
                    {
                        url:'/',
                        label:'Create Product',
                        icon:  ProductsMajor,
                        onClick: ()=>handleflag('Create Products')
                    },
                    {
                        url:'/',
                        label:'Categories',
                        icon:  CategoriesMajor,
                        onClick: ()=>handleflag('Categories')
                    },
                    {
                        url: '/',
                        label: 'Orders',
                        icon: OrdersMajor,
                        badge: '15',
                        onClick: ()=>handleflag('Orders')
                        
                    },
                    {
                        url: '/',   //該当ページにいる場合は緑になる
                        label: 'Customers',
                        icon: CustomersMajor,
                        badge: '15',
                        onClick: ()=>handleflag('Customers')
                    },
                    {
                        url: '/',
                        label: 'Contents',
                        icon:  FeaturedContentMajor,
                        onClick:()=>handleflag('Contents'),
                        
                    },
                    {
                        url: '/',
                        label: 'Shipment',
                        icon:  ShipmentMajor,
                        onClick: ()=>handleflag('Shipment'),
                        
                    },
                    {
                        url: '/',
                        label: 'Settings',
                        icon:  SettingsMajor,
                        onClick: ()=>{handleflag('Settings')}
                    },
                ]}
                rollup={{
                    after:8,    //可視数
                    view: 'view',
                    hide: 'hide',
                    activePath: '/',
                }}
            />
            <Navigation.Section
                title="Web Store"
                separator
                items={[
                    {
                        url: '/Page2',
                        label: 'Store',
                        icon: StoreMajor
                    }
                ]}
            />
        </Navigation>
    );
    return(<>
    <AppProvider
        i18n={{}}
        theme={{ colorScheme: UserTheme, }}
        
    >
        <Frame
            navigation={NaviContents}
        >
            {flag==='Create Products'&&
            <>
                <Page narrowWidth>
                    <Layout>
                        <PageTitle title='Create Products'/>
                        <AddProducts />
                    </Layout>
                </Page>
            </>}
                
            <Page fullWidth >
                <Layout>
                    {flag !== 'Create Products' && <PageTitle title={flag} />}
                    {flag==='Orders'&&<><Orders /></>}
                    {flag==='Home'&&<><Peach /><ToDo /></>}
                    {flag==='Customers'&&<><Customers /></>}
                    
                    {flag==='Categories'&&<><Categories /></>}
                    {flag==='All Products'&&<><AllProducts /></>}

                    {flag==='Contents'&&<><News /><Blogs /><Sales /></>}
                    {flag==='Shipment'&&<><Shipment /></>}
                    {flag==='Settings'&&<>{Settings}<SettingsSote /></>}
                </Layout>
            </Page>
        </Frame>
    </AppProvider>
    </>);
};
export default Navi;
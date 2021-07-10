import { Frame, Page,Layout,  Navigation,DisplayText } from "@shopify/polaris";
import {HomeMajor ,OrdersMajor,ProductsMajor,CustomersMajor, CategoriesMajor, FeaturedContentMajor,ShipmentMajor,SettingsMajor,StoreMajor} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

import Peach from './Peach';

//import ProductsMaster from "./ProductsMaster";
import Categories from "./Categories";
import Blogs from "./Blogs";
import News from './News';
import Sales from "./Sales";
import AddProducts from "./AddProducts";
import Shipment from "./Shipment";
import Orders from "./Orders";
import Customers from "./Customers";
import AllProducts from "./AllProducts";
import ToDo from "./ToDo";

export default function Navi(){
    /*
    const [NaviActive,setNaviActive]=useState(true);
    const toggleNavi = useCallback(
        ()=>setNaviActive((NaviActive) => !NaviActive)
    ,[]);
    */
    const [flag,setFlag]=useState('Home');
    const handleflag=useCallback (
        (newflag)=>{setFlag(newflag);console.log(newflag); console.log(newflag)},[]
    );
    type pagetitle={
        title:string,
    };
    const PageTitle: React.VFC<pagetitle>=(props)=>(
        <Layout.Section>
            <DisplayText size="large">{props.title}</DisplayText>
        </Layout.Section>
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
                                
                                onClick: ()=>{handleflag('Products');},
                                url:'/',
                                label:'All Products',
                                //new:true,
                            },
                            {
                                url:'/path',
                                label:'Create prduct',
                                onClick: ()=>handleflag('Create Product'),
                            }
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
                        onClick: ()=>{handleflag('Setting')}
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
    <Page fullWidth>
        <Frame
            navigation={NaviContents}
        >
            <Layout >
            <PageTitle title={flag}/>
            
                {flag==='Orders'&&<><Orders /></>}
                {flag==='Home'&&<><Peach /><ToDo /></>}
                {flag==='Customers'&&<><Customers /></>}
                
                {flag==='Categories'&&<><Categories /></>}
                {flag==='All Products'&&<><AllProducts /></>}
                {flag==='Create Products'&&<><AddProducts /></>}

                {flag==='Contents'&&<><News /><Blogs /><Sales /></>}
                {flag==='Shipment'&&<><Shipment /></>}
                
                
            </Layout>
        </Frame>
    </Page>
    </>);
};
import { Button, Card, Layout,ResourceItem,ResourceList,Stack,TextStyle} from "@shopify/polaris";
//対象商品
import {  DeleteMinor,EditMinor,ResetMinor } from '@shopify/polaris-icons';
import { Item } from "@shopify/polaris/dist/types/latest/src/components/FormLayout/components";
import { useCallback, useState } from "react";
import ShipmentSettings from "./ShipmentSettings";
import ShipmentSettingsVFC from "./ShipmentSettingsVFC";
export default function Shipment(){
    type categoryitem={
        id:string,
        name:string,
        num:number,
    };
    const categoriesItem=[
        {
            id:'1',
            name:'シロネコヤマト',
            num:1,
        },
        {
            id:'2',
            name:'佑川急便',
            num:5,
        },
        {
            id:'3',
            name:'Uパック',
            num:2,
            
        },
        {
            id:'4',
            name:'メール郵便',
            num:2,
        },
    ];

    return(
        <>
            <Layout.Section>
                <Card title="Shipment"  primaryFooterAction={{content:'Save'}} >
                    <Card.Section>
                        <ResourceList
                            items={categoriesItem}
                            renderItem={renderItem}
                            //selectedItems={}
                            />
                        
                    </Card.Section>
                </Card>
            </Layout.Section>
            <ShipmentSettingsVFC ShipmentCompany="" />
        </>
    );
    function renderItem(item:categoryitem){
        const {id,name,num}=item;
        return(
            <>
            <ResourceItem
                id={id}
                name={name}
                onClick={()=>{}}
            >
                
                <Stack>
                    <Stack.Item fill>
                        <TextStyle variation="strong">{name}</TextStyle>
                    </Stack.Item>
                    <p>aaa</p>
                    <TextStyle variation="subdued">全国一律・一部地域設定</TextStyle>
                    <Stack.Item>
                        <Button icon={EditMinor} primary onClick={()=>{}}></Button>
                    </Stack.Item>
                    <Stack.Item>
                        <Button icon={ ResetMinor} monochrome outline onClick={()=>{}}></Button>
                    </Stack.Item>
                </Stack>
            </ResourceItem>
            </>
        )
    }
}
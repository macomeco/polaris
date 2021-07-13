import { Card, FormLayout, IndexTable, Layout,TextField,TextStyle,useIndexResourceState} from "@shopify/polaris";
import { MobilePlusMajor } from '@shopify/polaris-icons';
import { useState, useCallback } from "react";
//news blog mail magazine sale
//sort
export default function Contents(){
    type blogType={
        date:string,
        title:string,
        id:string,
        show:boolean,
    };
    const blogs:blogType[]=[
        {
            date: 'Wen Jul 14 2020',
            title:'Sample title',
            id:'1',
            show:true,
        },
        {
            date: 'Thu Jul 15 2020',
            title:'Sample title 2',
            id: '2',
            show:false,
        },
        {
            date: 'Tue Jul 13 2020',
            title:'Sample title 3',
            id:'3',
            show:false,
        },
    ];
        const resourceName = {
            singular: 'article',
            plural: 'artciles',
        };
    
        const {
        selectedResources,
        allResourcesSelected,
        handleSelectionChange,
        } = useIndexResourceState(blogs);
    
        const rowMarkupII = blogs.map(
            ({id, title,date, show}, index) => (
                <IndexTable.Row
                    id={id}
                    key={id}
                    selected={selectedResources.includes(id)}
                    position={index}
                >
                    
                    <IndexTable.Cell>
                        <TextStyle variation="strong">{title}</TextStyle>
                        </IndexTable.Cell>
                    <IndexTable.Cell>{date}</IndexTable.Cell>
                    <IndexTable.Cell>{show?'show':'hide'}</IndexTable.Cell>
                </IndexTable.Row>
            ),
            );
            const [BlogCreate, setBlogCreate]=useState(false);
            const BlogCreateToggle = useCallback(
                ()=>{setBlogCreate((BlogCreate)=>true);}
            ,[]);
            const BlogCreateToggleCansel = useCallback(
                ()=>{setBlogCreate((BlogCreate)=>false);}
            ,[]);
            const today = new Date();
            const todaystr = today.toDateString();
    
        return (
            <Layout.Section>
            <Card primaryFooterAction={{icon:MobilePlusMajor,onAction:()=>{BlogCreateToggle()}}}>
            <Card.Header
                    title="Blog"
                    actions={[
                        {
                            content: 'action',
                            url: '/'
                        },
                        {
                            content:'action2',
                            url:'/'
                        }
                    ]}
                >
            </Card.Header>
                <Card.Section >
                <IndexTable
                    resourceName={resourceName}
                    itemCount={blogs.length}
                    selectedItemsCount={
                        allResourcesSelected ? 'All' : selectedResources.length
                    }
                    onSelectionChange={handleSelectionChange}
                    headings={[
                        {title: 'Title'},
                        {title: 'Date'},
                        {title: 'Show'},
                    ]}
                >
                    {rowMarkupII}
                </IndexTable>
                </Card.Section>
            </Card>
        {BlogCreate===true &&
            <Card title="Create new Article"primaryFooterAction={{content:'Add'}}secondaryFooterActions={[{content:'Cansel',onAction:()=>{BlogCreateToggleCansel()}}]}>
                <Card.Section >
                    <FormLayout>
                        <FormLayout.Group>
                        <TextField
                            label="title"
                            onChange={()=>{}}
                        />
                        <TextField
                            label="date"
                            onChange={()=>{}}
                            value={todaystr}
                        />
                        </FormLayout.Group>
                        <TextField
                            label="article"
                            onChange={()=>{}}
                            multiline={3}
                        />
                    </FormLayout>
                </Card.Section>
            </Card>
            }
        </Layout.Section>
        );
}
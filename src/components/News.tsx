import { Card, IndexTable, Layout,TextStyle,useIndexResourceState,TextField, FormLayout} from "@shopify/polaris";
import { MobilePlusMajor } from '@shopify/polaris-icons';
import { useCallback, useState } from "react";
//news blog mail magazine sale
//sort
export default function News(){
    type newsType={
        start:number,
        end:number,
        date:string,
        title:string,
        id:string,
        show:boolean,
    };
    const news:newsType[]=[
        {
            start: 20210101,
            end: 20200107,
            date: 'Oct 15, 2015',
            title:'Sample ',
            id:'1',
            show:true,
        },
        {
            start: 20210101,
            end: 20200107,
            date: 'Oct 20, 2015',
            title:'入荷しました',
            id:'2',
            show:true,
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
    } = useIndexResourceState(news);

    const rowMarkupII = news.map(
        ({id, title,date, show}, index) => (
            <IndexTable.Row
                id={id}
                key={id}
                selected={selectedResources.includes(id)}
                position={index}
            >
                <IndexTable.Cell>
                    <TextStyle variation="strong" >{title}</TextStyle>
                    </IndexTable.Cell>
                <IndexTable.Cell>{date}</IndexTable.Cell>
                <IndexTable.Cell>{show?'show':'hide'}</IndexTable.Cell>
            </IndexTable.Row>
        ),
    );
    const [NewsCreate, setNewsCreate]=useState(false);
    const NewsCreateToggle = useCallback(
        ()=>{setNewsCreate((NewsCreate)=>true);}
    ,[]);
    const NewsCreateToggleCansel = useCallback(
        ()=>{setNewsCreate((NewsCreate)=>false);}
    ,[]);

    const today = new Date();
    const todaystr = today.toDateString();
        return (
            <>
            <Layout.Section >
            <Card primaryFooterAction={{icon:MobilePlusMajor,onAction:()=>{NewsCreateToggle()}}}>
            <Card.Header
                    title="News"
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
            <Card.Section>
                <IndexTable
                    resourceName={resourceName}
                    itemCount={news.length}
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
            {NewsCreate===true &&
            <Card title="Create News"primaryFooterAction={{content:'Add'}}secondaryFooterActions={[{content:'Cansel',onAction:()=>{NewsCreateToggleCansel()}}]}>
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
        </>
        );
}
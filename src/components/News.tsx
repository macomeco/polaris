import { Card, IndexTable, Layout,TextStyle,useIndexResourceState,TextField} from "@shopify/polaris";
import {
    MobilePlusMajor
  } from '@shopify/polaris-icons';
//news blog mail magazine sale
//sort
export default function News(){
    type newsType={
        start:number,
        end:number,
        title:string,
        id:string,
        show:boolean,
    };
    const news:newsType[]=[
        {
            start: 20210101,
            end: 20200107,
            title:'Sample title',
            id:'1',
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
            ({id, title,start,end, show}, index) => (
                <IndexTable.Row
                    id={id}
                    key={id}
                    selected={selectedResources.includes(id)}
                    position={index}
                >
                    <IndexTable.Cell>
                        <TextStyle variation="strong" >{title}</TextStyle>
                        </IndexTable.Cell>
                    <IndexTable.Cell>{start} - {end}</IndexTable.Cell>
                    <IndexTable.Cell>{show?'show':'hide'}</IndexTable.Cell>
                </IndexTable.Row>
            ),
            );
    
        return (
            <>
            
            <Layout.Section >
            <Card primaryFooterAction={{icon:MobilePlusMajor}}>
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
                <Card.Section >
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
            <Card>
                <Card.Section title="Create">
                    <TextField
                        label="title"
                        onChange={()=>{}}
                    />
                    <TextField
                        label="article"
                        onChange={()=>{}}
                        multiline={3}
                    />
                </Card.Section>
            </Card>
        </Layout.Section>
        </>
        );
}
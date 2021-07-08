import { Card, IndexTable, Layout,TextStyle,useIndexResourceState} from "@shopify/polaris";
//news blog mail magazine sale
//sort
export default function Contents(){
    type blogType={
        date:number,
        title:string,
        id:string,
        show:boolean,
    };
    const blogs:blogType[]=[
        {
            date: 20210101,
            title:'Sample title',
            id:'1',
            show:true,
        },
        {
            date: 20210102,
            title:'Sample title 2',
            id: '2',
            show:false,
        },
        {
            date: 20210101,
            title:'Sample title 3',
            id:'3',
            show:false,
        },
        {
            date: 20210102,
            title:'Sample title 4',
            id: '4',
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
    
        return (
            <Layout.Section>
            <Card title="Blog">
                
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
        </Layout.Section>
        );
}
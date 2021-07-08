import { Avatar, Badge, Card, Layout, ResourceItem, ResourceList, ResourceListSelectedItems, Stack, TextStyle } from "@shopify/polaris";
import { useState } from "react";

export default function Customers(){
    type Items={
        id:string,
        name:string,
        url:string,
        location:string,
    };
    const [selectedItems, setSelectedItems] = useState<ResourceListSelectedItems>([]);

    const resourceName = {
        singular: 'customer',
        plural: 'customers',
    };

    const items:Items[] = [
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
        {
        id: '103',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        },
        {
        id: '203',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        },
    ];

    const promotedBulkActions = [
        {
        content: 'Edit customers',
        onAction: () => console.log('Todo: implement bulk edit'),
        },
    ];

    const bulkActions = [
        {
        content: 'Add tags',
        onAction: () => console.log('Todo: implement bulk add tags'),
        },
        {
        content: 'Remove tags',
        onAction: () => console.log('Todo: implement bulk remove tags'),
        },
        {
        content: 'Delete customers',
        onAction: () => console.log('Todo: implement bulk delete'),
        },
    ];

    return (
        <>
        <Layout.Section>
            <Card>
                <Card.Header
                    actions={[
                        {
                        //content: 'Total Sales',
                        },
                    ]}
                    title="Accounts"
                />
                <ResourceList
                    resourceName={resourceName}
                    items={items}
                    renderItem={renderItem}
                    selectedItems={selectedItems}
                    onSelectionChange={setSelectedItems}
                    promotedBulkActions={promotedBulkActions}
                    bulkActions={bulkActions}
                />
            </Card>
        </Layout.Section>
        <Layout.Section secondary>
            <Card primaryFooterAction={{content:'Sort'}} title="Sort">
                <Card.Section title="Name">
                </Card.Section>
            </Card>
        </Layout.Section>
        </>
    );

    function renderItem(item:Items) {
        const {id, url, name, location} = item;
        const media = <Avatar customer size="medium" name={name} />;

        return (
        <ResourceItem
            id={id}
            url={url}
            media={media}
            accessibilityLabel={`View details for ${name}`}
        >
            <h3>
            <TextStyle variation="strong">{name}</TextStyle>
            </h3>
            <div>{location}</div>
            <Stack>
                <Stack.Item fill>
                    <Badge status="attention">注意</Badge>
                </Stack.Item>
                <Badge status="success">成功</Badge>
                <Badge status="critical">クリティカル</Badge>
                <Badge status="warning">警告</Badge>
                <Badge status="new">DEFAULT</Badge>
                <Badge status="info">情報</Badge>
                <Stack.Item><p>3456</p></Stack.Item>
                <Stack.Item><p>¥123456</p></Stack.Item>

            </Stack>
            
        </ResourceItem>
        );
        
    }
    
}
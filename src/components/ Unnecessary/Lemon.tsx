import React, {useState} from 'react';
import {Avatar,Badge, TextStyle,TextContainer, Card, ResourceItem, ResourceList, ResourceListSelectedItems, Layout, Stack} from '@shopify/polaris';

export default function Lemon() {
  const [selectedItems, setSelectedItems] = useState<ResourceListSelectedItems>();  //ジェネリクス必須！

  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };

  const items = [
    {
      id: 103,
      url: 'customers/341',
      name: 'Mae Jemison',
      location: 'Decatur, USA',
    },
    {
      id: 203,
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
    <Layout.Section>
      <Card>
        <Card.Section title="TITLE LEMON">
          <TextContainer>lemon lemon lemon lemon</TextContainer>
        </Card.Section>
        <Card.Section>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          bulkActions={bulkActions}
        />
        </Card.Section>
        <Card.Section title="TITLE LEMON">
          <TextContainer>
            lemon lemon lemon lemon lemon
          </TextContainer>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
    
  function renderItem(item:any) {
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
        <div>
          
          <Stack>
            <Stack.Item fill> {/* fillを入れることでバッジが右に寄せられる */}
              <p>{location}</p>
            </Stack.Item>
            <Stack.Item>
              <Badge status="info">{id}</Badge>
            </Stack.Item>
            <Stack.Item>
            </Stack.Item>
          </Stack>
          
        </div>
      </ResourceItem>
    );
  }
}

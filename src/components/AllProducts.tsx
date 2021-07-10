import { Layout, Card, Filters, IndexTable, Select, TextField, TextStyle, useIndexResourceState } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function AllProducts(){
    const customers = [
        {
            id: '3417',
            url: 'customers/341',
            name: 'キャンバス',
            orders: 20,
            stock:30,
            code:1234567890,
            release:true,
            price:2345,
        },
        {
            id: '2567',
            url: 'customers/256',
            name: '水彩ペンセット(12色)',
            orders: 30,
            stock:30,
            code:1234567890,
            release:true,
            price:2345,
        },
        {
            id: '3417',
            url: 'customers/341',
            name: 'クロッキー帳',
            orders: 20,
            
            stock:30,
            code:1234567890,
            release:true,
            price:2345,
            },
            {
            id: '2567',
            url: 'customers/256',
            name: 'ペンケース',
            orders: 30,
            stock:30,
            code:1234567890,
            release:false,
            price:2345,
        },
        {
            id: '3417',
            url: 'customers/341',
            name: 'パレット',
            orders: 20,
            
            stock:30,
            code:1234567890,
            release:true,
            price:2345,
            },
            {
            id: '2567',
            url: 'customers/256',
            name: '練りゴム',
            orders: 30,
            stock:30,
            code:1234567890,
            release:true,
            price:2345,
        },
    ];
    const resourceName = {
        singular: 'customer',
        plural: 'customers',
    };
    
    const {
        selectedResources,
        allResourcesSelected,
        handleSelectionChange,
    } = useIndexResourceState(customers);
    const [taggedWith, setTaggedWith] = useState('VIP');
    const [queryValue, setQueryValue] = useState<string>('');
    const [sortValue, setSortValue] = useState('today');
    
    const handleTaggedWithChange = useCallback(
        (value) => setTaggedWith(value),
        [],
    );
    const handleTaggedWithRemove = useCallback(() => setTaggedWith(''), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
    const handleClearAll = useCallback(() => {
        handleTaggedWithRemove();
        handleQueryValueRemove();
    }, [handleQueryValueRemove, handleTaggedWithRemove]);
    const handleSortChange = useCallback((value) => setSortValue(value), []);
    
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
    
    const filters = [
        {
        key: 'taggedWith',
        label: 'Tagged with',
        filter: (
            <TextField
            label="Tagged with"
            value={taggedWith}
            onChange={handleTaggedWithChange}
            labelHidden
            />
        ),
        shortcut: true,
        },
    ];
    
    const appliedFilters = !isEmpty(taggedWith)
        ? [
            {
            key: 'taggedWith',
            label: disambiguateLabel('taggedWith', taggedWith),
            onRemove: handleTaggedWithRemove,
            },
        ]
        : [];
    
    const sortOptions = [
        {label: 'Today', value: 'today'},
        {label: 'Yesterday', value: 'yesterday'},
        {label: 'Last 7 days', value: 'lastWeek'},
    ];
    
    const rowMarkup = customers.map(
        ({id, name,stock,code,release,price,orders}, index) => (
        <IndexTable.Row
            id={id}
            key={id}
            selected={selectedResources.includes(id)}
            position={index}
        >
            <IndexTable.Cell>{id}</IndexTable.Cell>
            <IndexTable.Cell>
            <TextStyle variation="strong">{name}</TextStyle>
            </IndexTable.Cell>
            <IndexTable.Cell>{code}</IndexTable.Cell>
            <IndexTable.Cell>{stock}</IndexTable.Cell>
            <IndexTable.Cell>
                {release===true
                ?<TextStyle variation="positive">公開</TextStyle>
                :<TextStyle variation="negative">非公開</TextStyle>
                }
            </IndexTable.Cell>
            <IndexTable.Cell>¥{price}</IndexTable.Cell>
            <IndexTable.Cell>{orders}</IndexTable.Cell>
        </IndexTable.Row>
        ),
    );
    
    return (
        <Layout.Section>
        <Card>
        <div style={{padding: '16px', display: 'flex'}}>
            <div style={{flex: 1}}>
            <Filters
                queryValue={queryValue}
                filters={filters}
                appliedFilters={appliedFilters}
                onQueryChange={setQueryValue}
                onQueryClear={handleQueryValueRemove}
                onClearAll={handleClearAll}
            />
            </div>
            <div style={{paddingLeft: '0.4rem'}}>
            <Select
                labelInline
                label="Sort by"
                options={sortOptions}
                value={sortValue}
                onChange={handleSortChange}
            />
            </div>
        </div>
        <IndexTable
            resourceName={resourceName}
            itemCount={customers.length}
            selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            hasMoreItems
            bulkActions={bulkActions}
            promotedBulkActions={promotedBulkActions}
            headings={[
            {title: 'id'},
            {title: '商品名'},
            {title: '商品コード'},
            {title: '在庫'},
            {title: '状態'},
            {title: '販売価格'},
            {title: '注文数'},
            ]}
        >
            {rowMarkup}
        </IndexTable>
        </Card>
        </Layout.Section>
    );
    
    function disambiguateLabel(key:string, value:string) {
        switch (key) {
        case 'taggedWith':
            return `Tagged with ${value}`;
        default:
            return value;
        }
    }
    
    function isEmpty(value:string) {
        if (Array.isArray(value)) {
        return value.length === 0;
        } else {
        return value === '' || value == null;
        }
    }
}
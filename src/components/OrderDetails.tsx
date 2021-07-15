import { useIndexResourceState, TextField, IndexTable, TextStyle, Card, Filters, Select, Badge } from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function OrderDetails(){
    
    const customers = [
    {
        id: '3416',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        orders: 20,
        amountSpent: '$2,400',
        payment: 'succeess',
    },
    {
        id: '2566',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        orders: 30,
        amountSpent: '$140',
    },
    {
        id: '3416',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        orders: 20,
        amountSpent: '$2,400',
        payment: 'succeess',
    },
    {
        id: '3416',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        orders: 20,
        amountSpent: '$2,400',
        payment: '',
    },
    {
        id: '3416',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        orders: 20,
        amountSpent: '$2,400',
        payment: '',
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
    const [taggedWith, setTaggedWith] = useState<string>('VIP');
    const [queryValue, setQueryValue] = useState<string>('');
    const [sortValue, setSortValue] = useState<string>('today');

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
    ({id, name, location, orders, amountSpent,payment}, index) => (
        <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
        >
        <IndexTable.Cell>
            <TextStyle variation="strong">{name}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>DIAMOND</IndexTable.Cell>
        <IndexTable.Cell>{location}</IndexTable.Cell>
        <IndexTable.Cell>{orders}</IndexTable.Cell>
        <IndexTable.Cell>{amountSpent}</IndexTable.Cell>
        <IndexTable.Cell>{payment ==='succeess'?<Badge status='success'>済</Badge>:<Badge status='attention'>未</Badge>}</IndexTable.Cell>
        </IndexTable.Row>
    ),
    );

    return (
        
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
        headings={[
            {title: 'お名前'},
            {title: '会員ランク'},
            {title: '住所'},
            {title: '個数'},
            {title: '合計金額'},
            {title:　'入金'},
        ]}
        >
        {rowMarkup}
        </IndexTable>
    </Card>
    
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
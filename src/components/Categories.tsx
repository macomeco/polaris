import { Badge, Card, FormLayout, Layout,  ResourceList, ResourceItem, TextField, TextStyle, Stack, Form, Button} from "@shopify/polaris";
/*めも
クリック
編集モード
ソート
商品一覧
*/
export default function Categories(){
    type categoryitem={
        id:string,
        name:string,
        num:number,
    };
    const categoriesItem=[
        {
            id:'1',
            name:'pink',
            num:1,
        },
        {
            id:'2',
            name:'orange',
            num:5,
        },
        {
            id:'3',
            name:'black',
            num:2,
            
        },
        {
            id:'4',
            name:'summer',
            num:2,
        },
        {
            id:'5',
            name:'home',
            num:5,
        },
    ];
    
    return(
    <>
        <Layout.Section >
            <Card title="Categories">
                <Card.Section>
                    <ResourceList
                        items={categoriesItem}
                        renderItem={renderItem}
                        //selectedItems={}
                        />
                </Card.Section>
            </Card>
        </Layout.Section>
        <Layout.Section secondary>
            <Card>
                <Card.Section title="Category Add">
                    <Form onSubmit={()=>{}}>
                        <FormLayout>
                            <Stack>
                                <Stack.Item fill>
                                    <TextField
                                        label=""
                                        value="sample"
                                        onChange={()=>{}}
                                        placeholder="Category"
                                        maxLength={20}
                                        showCharacterCount
                                    />
                                </Stack.Item>
                                <Stack.Item>
                                    <Button submit primary>ADD</Button>
                                </Stack.Item>
                            </Stack>
                        </FormLayout>
                    </Form>
                </Card.Section>
            </Card>
            <Card>
                <Card.Section title="Category search">
                    <FormLayout>
                        <TextField
                            label=""
                            value="sample"
                            onChange={()=>{}}
                            placeholder="Category"
                            
                        />
                    </FormLayout>
                </Card.Section>
                <Card.Section>
                    <ResourceList
                        items={categoriesItem}
                        renderItem={renderItem}
                        //selectedItems={}
                        />
                </Card.Section>
            </Card>
        </Layout.Section>
    </>
    );
    function renderItem(item:categoryitem){
        const {id,name,num}=item;
        return(
            <ResourceItem
                id={id}
                name={name}
                onClick={()=>{}}
            >
                <Stack>
                    <Stack.Item fill>
                        <TextStyle variation="strong">{name}</TextStyle>
                    </Stack.Item>
                    <Stack.Item>
                        <Badge status="info">{id}</Badge>
                    </Stack.Item>
                    <Stack.Item>
                        {num}
                    </Stack.Item>
                </Stack>
            </ResourceItem>
        )
    }
};
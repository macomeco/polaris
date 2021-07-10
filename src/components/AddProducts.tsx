import { DropZone,FormLayout,Layout,Card,Form, TextField, ChoiceList, } from "@shopify/polaris";
import { ViewMinor,SaveMinor,DeleteMinor } from '@shopify/polaris-icons';
import AddProductsCategories from './AddProductsCategories'
//商品の売れ行き状況
export default function AddProducts(){
    
    return(
        <>
        <Layout.Section>
            <Form onSubmit={()=>{}}><FormLayout>
                <Card title="Create Products" primaryFooterAction={{content:'ADD'}} secondaryFooterActions={[{content:'Save',icon:SaveMinor},{content:'preview',icon:ViewMinor},{content:'Delete',destructive: true,icon:DeleteMinor}]}>
                    <Card.Section title="info">
                        <TextField
                            value=""
                            label="商品名"
                            placeholder="商品名"
                            maxLength={20}
                            showCharacterCount
                            onChange={()=>{}}
                        />
                        <TextField
                            value=""
                            label="商品の説明"
                            placeholder="商品の説明"
                            maxLength={300}
                            showCharacterCount
                            onChange={()=>{}}
                            multiline={3}
                            helpText="説明文を書くときの注意！説明文を書くときの注意！説明文を書くときの注意！説明文を書くときの注意！"
                        />
                    </Card.Section>
                    <Card.Section title="Image">
                        <DropZone label="Image files">
                            <DropZone.FileUpload />
                        </DropZone>
                    </Card.Section>
                    <Card.Section>
                    <FormLayout>
                    <FormLayout.Group>
                        <TextField
                            type="number"
                            value="11"
                            label="価格"
                            max={30}
                            onChange={()=>{}}
                            prefix="¥"
                        />
                        <TextField
                            type="number"
                            value="11"
                            label="在庫数"
                            max={30}
                            onChange={()=>{}}
                            align="right"
                        />
                            
                            
                            </FormLayout.Group>
                        </FormLayout>
                    </Card.Section>
                    <AddProductsCategories />
                    {/**いらないかも */}
                    
                    <Card.Section title="Wrapping size">
                        <FormLayout>
                            <FormLayout.Group>
                                <ChoiceList
                                title="巾着"
                                choices={[
                                    {label:'SS',value:'ss'},
                                    {label:'S',value:'s'},
                                    {label:'M',value:'m'},
                                    {label:'L',value:'l'},
                                ]}
                                selected={['ss']}
                                />
                            
                                <ChoiceList
                                    title="BOX"
                                    choices={[
                                        {label:'SS',value:'ss'},
                                        {label:'S',value:'s'},
                                        {label:'M',value:'m'},
                                        {label:'L',value:'l'},
                                    ]}
                                    selected={['s']}
                                />
                            </FormLayout.Group>
                        </FormLayout>
                    </Card.Section>
                </Card>
            </FormLayout>
            </Form>
            
        </Layout.Section>
        
        </>
    );
}
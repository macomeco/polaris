import { Card, Form, FormLayout,  Layout, TopBar, } from "@shopify/polaris";
import {  } from '@shopify/polaris-icons';
export default function ProductsMaster(){
    return(
        <>
        <Layout.Section secondary>
            <Card title="Search">
                <Card.Section title="Product Search">
                <Form onSubmit={()=>{}}>
                    <FormLayout>
                        <TopBar.SearchField
                            value="sample"
                            onChange={()=>{}}
                            placeholder="Search"
                            onCancel={()=>{}}
                            
                        />
                    </FormLayout>
                </Form>
                </Card.Section>
                <Card.Section title="Results"></Card.Section>
            </Card>
        </Layout.Section>
        </>
    );
};
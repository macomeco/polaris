import { Card, Layout,FormLayout,TextField, TextContainer  } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function Orange(){
    const [value,setValue]=useState('');
    const changeValue=useCallback(
        (newvalue)=>{setValue(newvalue)}
        ,[]);
    return(
        <>
        <Layout.Section secondary>
            <Card sectioned title="ORANGE">
                ORANGE ORANGE ORANGE ORANGE ORANGE ORANGE ORANGE ORANGE ORANGE ORANGE
            </Card>
            <Card sectioned title="ORANGE">
                <FormLayout>
                    <TextField label="ORANGE" onChange={changeValue} placeholder="Orange" value={value} />
                </FormLayout>
            </Card>
            <Card sectioned title="ORANGE">
                <FormLayout>
                    <TextContainer>orange</TextContainer>
                </FormLayout>
            </Card>

        </Layout.Section>
        </>
    );
};
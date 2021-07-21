import { Card, DisplayText, FormLayout, Layout, RadioButton, Stack, TextField} from "@shopify/polaris";
import { useCallback, useState, VFC } from "react";

const SettingsCopy: VFC=()=>{
    type ColorTheme="light" | "dark" | "inverse" | undefined;
    const [UserTheme,setUserTheme] = useState<ColorTheme>("light");
    const UserThemeToggle=useCallback(
        (newtheme)=>{setUserTheme(newtheme);
    },[]);
    
    return(
        <>
        <Layout.AnnotatedSection
            title="Store details"
            description="store details">
            <Card>
                <Card.Section title="detail-I">
                    <TextField label="I-I" onChange={()=>{}} />
                </Card.Section>
                <Card.Section title="detail-II">
                    <TextField label="II-I" onChange={()=>{}} />
                    <TextField label="II-II" onChange={()=>{}} />
                </Card.Section>
            </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
            title="Store Adress"
            description="store xxxxx">
            <Card>
            <Card.Section title="detail-I">
                    <TextField label="I-I" onChange={()=>{}} />
                </Card.Section>
                <Card.Section title="detail-II" >
                    <TextField label="II-I" onChange={()=>{}} />
                </Card.Section>
                <Card.Section title="detail-III" >
                    <FormLayout>
                        <FormLayout.Group>
                            <TextField label="III-I" onChange={()=>{}} />
                            <TextField label="III-I" onChange={()=>{}} />
                        </FormLayout.Group>
                    </FormLayout>
                </Card.Section>
            </Card>
        </Layout.AnnotatedSection>
        </>
    );
}
export default SettingsCopy;
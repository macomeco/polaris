import { Banner, Layout, TextContainer } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function Peach(){
    const [active,setActive]=useState(true);
    const toggleBaner=useCallback(()=>setActive((active)=>!active),[]);
    const bannerMarkup=active?(
        <Layout.Section fullWidth>
            <Banner
                title="TITLE PEACH"
                status="success"
                action={{content: 'Print label'}}
                onDismiss={toggleBaner}
            >
                <TextContainer> peach peach peach peach</TextContainer>
            </Banner>
        </Layout.Section>
    ):null;
    return(
        <>
        {bannerMarkup}
        </>

    );
};
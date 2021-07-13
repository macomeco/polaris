import { Card, Layout, RadioButton, Stack, ThemeProvider } from "@shopify/polaris";
import { useCallback, useState, VFC } from "react";

type SettingType={
    settingTheme:"light" | "dark" | "inverse" | undefined;
}

const SettingsCopy: VFC<SettingType>=({settingTheme})=>{
    type Theme="light" | "dark" | "inverse" | undefined;
    const [UserTheme,setUserTheme] = useState<Theme>(settingTheme);
    const UserThemeToggle=useCallback(
        (newtheme)=>{setUserTheme(newtheme);
            <Navi setcolor={UserTheme} />
    },[]);
    
    return(
        <>
        
        <ThemeProvider theme={{colorScheme: 'dark'}} />
        <Layout.Section>
            <Card>
                <Card.Section title="Theme">

                    <Stack vertical>
                        <RadioButton
                            label="Ligth"
                            onChange={()=>UserThemeToggle}
                            checked={UserTheme === 'light'}
                            id="light"
                            name="accounts"
                        />
                        <RadioButton
                            label="Dark"
                            onChange={()=>UserThemeToggle}
                            checked={UserTheme === 'dark'}
                            id="dark"
                            name="accounts"
                        />
                    </Stack>
                </Card.Section>
            </Card>
        </Layout.Section>
        </>
    );
}
export default SettingsCopy;
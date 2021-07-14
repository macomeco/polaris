import { Card, Layout, RadioButton, Stack} from "@shopify/polaris";
import { useCallback, useState, VFC } from "react";

const SettingsCopy: VFC=()=>{
    type ColorTheme="light" | "dark" | "inverse" | undefined;
    const [UserTheme,setUserTheme] = useState<ColorTheme>("light");
    const UserThemeToggle=useCallback(
        (newtheme)=>{setUserTheme(newtheme);
    },[]);
    
    return(
        <>
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
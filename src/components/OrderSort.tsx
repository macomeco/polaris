import { Card, DatePicker, FormLayout, Layout, TextField, TextStyle } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function OrderSort(){
    const [{month, year}, setDate] = useState({month: 1, year: 2018});
    const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Mon Feb 12 2018 00:00:00 GMT-0500 (EST)'),
    });

    const handleMonthChange = useCallback(
        (month, year) => setDate({month, year}),
        [],
    );
    return(<>
        <Layout.Section secondary>
            <Card title="絞り込み" primaryFooterAction={{content:'Sort'}}>
                <Card.Section title="期間">
                    <DatePicker
                        month={month}
                        year={year}
                        onChange={setSelectedDates}
                        onMonthChange={handleMonthChange}
                        selected={selectedDates}
                        //multiMonth //2ヶ月分
                        allowRange
                    />
                </Card.Section>
                <Card.Section title="売上">
                    <FormLayout>
                        <FormLayout.Group condensed>
                            <TextField type='number' label="Min" onChange={()=>{}}></TextField>
                            <TextField type='number' label="Max" onChange={()=>{}}></TextField>
                        </FormLayout.Group>
                    </FormLayout>
                </Card.Section>
                
            </Card>
        </Layout.Section>

    </>);
}
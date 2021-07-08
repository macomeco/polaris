import { Autocomplete, Card, Tag,TextContainer,Stack, } from "@shopify/polaris";
import { useCallback, useState } from "react";

export default function AddProductCategories() {
    type shipment={
        value:string,
        label:string,
    };
    const deselectedOptions = [
        {value: 'rustic', label: 'Rustic'},
        {value: 'antique', label: 'Antique'},
        {value: 'vinyl', label: 'Vinyl'},
        {value: 'vintage', label: 'Vintage'},
        {value: 'refurbished', label: 'Refurbished'},
    ];

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<shipment[]>(deselectedOptions);
    const updateText = useCallback (
        (value) => {
            setInputValue(value);
        if (value === '') {
            setOptions(deselectedOptions);
            return;
        }
        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter((option) =>
            option.label.match(filterRegex),
        );
        let endIndex:number = resultOptions.length - 1;
        if (resultOptions.length === 0) {
            endIndex = 0;
        }
        setOptions(resultOptions);
        },
    [deselectedOptions],
    );
    const removeTag = useCallback(
        (tag) => () => {
            const options = [...selectedOptions];
            options.splice(options.indexOf(tag), 1);
            setSelectedOptions(options);
        },
        [selectedOptions],
    );

    const tagsMarkup = selectedOptions.map((option) => {
        let tagLabel = '';
        tagLabel = option.replace('_', ' ');
        tagLabel = titleCase(tagLabel);
        return (
            <Tag key={`option${option}`} onRemove={removeTag(option)}>
            {tagLabel}
            </Tag>
        );
    });

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label=""
            value={inputValue}
            placeholder="Vintage, cotton, summer"
        />
    );

    return (
        <Card.Section title="Categories">
            <Autocomplete
                allowMultiple
                options={options}
                selected={selectedOptions}
                textField={textField}
                onSelect={setSelectedOptions}
                listTitle="Suggested Tags"
            />
            <br />
            <TextContainer>
                <Stack>{tagsMarkup}</Stack>
            </TextContainer>
        </Card.Section>
    );

    function titleCase(string:string) {
        return string
        .toLowerCase()
        .split(' ')
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join('');
    }
}
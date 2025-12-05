import { useState } from 'react';
import { EXAMPLES } from '../../data';
import Tabs from '../Tabs/Tabs';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';

export default function Examples() {
    let [selectedContent, setSelectedContent] = useState();

    function handleMenuSelect(selectedButton) {
        console.log(`${selectedButton} selected!`);
        setSelectedContent(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedContent) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedContent].title}</h3>
                <p>{EXAMPLES[selectedContent].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedContent].code}</code>
                </pre>
            </div>
        )
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={Object.keys(EXAMPLES).map((key) => (
                    <TabButton
                        key={key}
                        isSelected={selectedContent == key}
                        onClick={() => handleMenuSelect(key)}>
                        {EXAMPLES[key].title}
                    </TabButton>
                ))}
            >
                {tabContent}
            </Tabs>
        </Section>
    )
}

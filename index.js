import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect } from 'react';

import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';

const CheckBoxGrouping = () => {
    //define the data with category
    const vegetables = [
        { "Vegetable": "Cabbage", "Category": "Leafy and Salad", "Id": "item1" },
        { "Vegetable": "Chickpea", "Category": "Beans", "Id": "item2" },
        { "Vegetable": "Garlic", "Category": "Bulb and Stem", "Id": "item3" },
        { "Vegetable": "Green bean", "Category": "Beans", "Id": "item4" },
        { "Vegetable": "Horse gram", "Category": "Beans", "Id": "item5" },
        { "Vegetable": "Nopal", "Category": "Bulb and Stem", "Id": "item6" },
        { "Vegetable": "Onion", "Category": "Bulb and Stem", "Id": "item7" },
        { "Vegetable": "Pumpkins", "Category": "Leafy and Salad", "Id": "item8" },
        { "Vegetable": "Spinach", "Category": "Leafy and Salad", "Id": "item9" },
        { "Vegetable": "Wheat grass", "Category": "Leafy and Salad", "Id": "item10" },
        { "Vegetable": "Yarrow", "Category": "Leafy and Salad", "Id": "item11" }
    ];
    // map the groupBy field with category column
    const checkFields = { groupBy: 'Category', text: 'Vegetable', value: 'Id' };
    // set the placeholder to the MultiSelect input
    const checkWaterMark = 'Select vegetables';
    // set enableGroupCheckBox value to the Multiselect input
    const enableGroupCheckBox = true;
    // set mode value to the multiselect input
    const mode = 'CheckBox';
    // set the placeholder to the filter bar
    const filterBarPlaceholder = 'Search Vegetables';
    return (<div id="checkboxgroup" className='control-pane'>
            <div className='control-section col-lg-12'>
                <div id="multigroup" className="control-styles">
                    <h4>Grouping with CheckBox</h4>
                    <MultiSelectComponent id="checkbox" dataSource={vegetables} filterBarPlaceholder={filterBarPlaceholder} fields={checkFields} placeholder={checkWaterMark} mode={mode} showSelectAll={true} enableGroupCheckBox={enableGroupCheckBox} showDropDownIcon={true} enableSelectionOrder={false}>
                        <Inject services={[CheckBoxSelection]}/>
                    </MultiSelectComponent>
                </div>
            </div>
        </div>);
};
export default CheckBoxGrouping;

const root = createRoot(document.getElementById('sample'));
root.render(<CheckBoxGrouping />);
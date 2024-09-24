"use client";

import React, { useState } from 'react';
import Flor from '../../public/florDeCapomo.png';
import { useTheme } from "../components/theme-provider";

const htmlTags = [
    {
        "HTMLTag": "<html>",
        "Attributes": "lang",
        "Use": "Defines the language of the document",
        "ExampleCode": "<html lang='en'></html>"
    },
    {
        "HTMLTag": "<head>",
        "Attributes": "None",
        "Use": "Contains metadata and other information about the document",
        "ExampleCode": "<head></head>"
    },
    {
        "HTMLTag": "<title>",
        "Attributes": "None",
        "Use": "Defines the title of the document, which is displayed in the browser's title bar",
        "ExampleCode": "<title>My Page Title</title>"
    },
    {
        "HTMLTag": "<body>",
        "Attributes": "None",
        "Use": "Contains the visible content of the document",
        "ExampleCode": "<body>Tutuli yori etépo sione tutuli jiapsi.</body>"
    },
    {
        "HTMLTag": "<h1> to <h6>",
        "Attributes": "None",
        "Use": "Defines headings of various sizes",
        "ExampleCode": "<h1>Main Heading</h1>"
    },
    {
        "HTMLTag": "<p>",
        "Attributes": "None",
        "Use": "Defines a paragraph of text",
        "ExampleCode": "<p>Tutuli yori etépo sione tutuli jiapsi.</p>"
    },
    {
        "HTMLTag": "<br>",
        "Attributes": "None",
        "Use": "Inserts a line break within a paragraph or other block-level element",
        "ExampleCode": "<p>Tutuli yori etépo sione tutuli jiapsi.<br>Aani tutuli yo'owe vuite'ibo tutuli sewa. </p>"
    },
    {
        "HTMLTag": "<a>",
        "Attributes": "href, target",
        "Use": "Defines a hyperlink, which can be clicked to navigate to another page or resource. The href attribute specifies the URL of the destination, and the optional target attribute specifies where to open the link.",
        "ExampleCode": "<a href='https://www.codeproject.com' target='_blank'>Thankyou</a>"
    },
    {
        "HTMLTag": "<img>",
        "Attributes": "src, alt, width, height",
        "Use": "Inserts an image into the document. The src attribute specifies the location of the image file, the alt attribute provides alternative text for the image, and the optional width and height attributes control the size of the image.",
        "ExampleCode": "<iframe src='/flor-de-capomo.jpg' width='600' height='400' style={{ border: 'none' }} title='Flor de Capomo' />"
    },
    {
        "HTMLTag": "<ul> and <ol>",
        "Attributes": "None",
        "Use": "Defines unordered and ordered lists, respectively",
        "ExampleCode": "<ul><li>Tutuli yori etépo sione tutuli jiapsi</li><li>Aani tutuli yo'owe vuite'ibo tutuli sewa.</li></ul>"
    },
    {
        "HTMLTag": "<li>",
        "Attributes": "None",
        "Use": "Defines an ite\m in a list",
        "ExampleCode": "<ul><li>Tutuli yori etépo sione tutuli jiapsi</li></ul>"
    },
    {
        "HTMLTag": "<table>",
        "Attributes": "border, width",
        "Use": "Defines a table. The border attribute specifies the width of the border around the table, and the optional width attribute sets the width of the table.",
        "ExampleCode": "<table border='2' width='100%'><tr><td>Cell 1</td><td>Cell 2</td></tr></table>"
    },
    {
        "HTMLTag": "<tr>",
        "Attributes": "None",
        "Use": "Defines a row in a table",
        "ExampleCode": "<table><tr><td>Cell 1</td></tr></table>"
    },
    {
        "HTMLTag": "<td>",
        "Attributes": "colspan, rowspan",
        "Use": "Defines a cell in a table. The colspan attribute specifies the number of columns that the cell should span, and the rowspan attribute specifies the number of rows.",
        "ExampleCode": "<table><tr><td colspan='2'>Spanned Cell</td></tr></table>"
    },
    {
        "HTMLTag": "<th>",
        "Attributes": "colspan, rowspan",
        "Use": "Defines a header cell in a table. The colspan and rowspan attributes function the same as they do for <td>.",
        "ExampleCode": "<table><tr><th colspan='2'>Header</th></tr></table>"
    },
    {
        "HTMLTag": "<caption>",
        "Attributes": "None",
        "Use": "Defines a caption for a table",
        "ExampleCode": "<table><caption>Table Caption</caption></table>"
    },
    {
        "HTMLTag": "<form>",
        "Attributes": "action, method",
        "Use": "Defines a form for user input. The action attribute specifies the URL where the form data should be submitted, and the method attribute specifies the HTTP method to use (e.g., GET or POST).",
        "ExampleCode": "<label for='name'>Name:</label><br><input type='text' id='name' value=='Yori' name='name' required><br><br><label for='address'>Address:</label><br><input type='text' value='capomo avenue' id='address' name='address' required><br><br><button type='submit'>Submit</button>"
    },
    {
        "HTMLTag": "<input>",
        "Attributes": "type, name, value, checked, required",
        "Use": "Defines an input field, such as a text box or checkbox. The type attribute specifies the type of input (e.g., text, checkbox, or radio button), the name attribute gives the input a name for use in processing the form data, the optional value attribute sets the initial value of the input, the optional checked attribute specifies that a checkbox or radio button should be checked by default, and the optional required attribute specifies that the input must be filled in before the form can be submitted.",
        "ExampleCode": "<input type='text' name='username' required>"
    },
    {
        "HTMLTag": "<button>",
        "Attributes": "None",
        "Use": "Defines a clickable button",
        "ExampleCode": "<button>Click Me</button>"
    },
    {
        "HTMLTag": "<select>",
        "Attributes": "None",
        "Use": "Defines a drop-down list",
        "ExampleCode": "<select><option>Option 1</option><option>Option 2</option></select>"
    },
    {
        "HTMLTag": "<option>",
        "Attributes": "value, selected",
        "Use": "Defines an option in a drop-down list. The value attribute sets the value that should be submitted when the form is processed, and the optional selected attribute specifies that the option should be selected by default.",
        "ExampleCode": "<select><option value='1'>Option 1</option><option value='2' selected>Option 2</option></select>"
    }
];

function Selection() {
    const [selectedTag, setSelectedTag] = useState(null);
    const theme = useTheme();
    const handleSelectChange = (event) => {
        const selectedHTMLTag = event.target.value;
        const selectedTagObject = htmlTags.find(tag => tag.HTMLTag === selectedHTMLTag);
        setSelectedTag(selectedTagObject);
    };

    return (
        <div>
            <div > Learn hypertext (the language used to create  web pages)</div>
            <br />
            <label>
                Select an HTML tag:
                <select 
                className='bg-black'
                style={{ 
                    
                    color: theme.colors.terciary, 
                }}
                onChange={handleSelectChange}>
                    <option value="">Select a tag</option>
                    {htmlTags.map((tag, index) => (
                        <option key={index} value={tag.HTMLTag}>{tag.HTMLTag}</option>
                    ))}
                </select>
            </label>
            <br />
            {selectedTag && (
                <div className="space-y-2.5">
                    <h3>Selected Item Details:</h3>
                    <p><strong>HTML Tag:</strong> {selectedTag.HTMLTag}</p>
                    <p><strong>Attributes:</strong> {selectedTag.Attributes}</p>
                    <p><strong>Use:</strong> <i>{selectedTag.Use}</i></p>
                    <p><strong>Example Code:</strong></p>
                    <h2>HTML</h2>
                    <pre className="border border-black p-2.5 rounded">{selectedTag.ExampleCode}</pre>
                    <h2>Outcome</h2>
                    <iframe
                        title="exampleCode"
                        srcDoc={selectedTag.ExampleCode}
                        className="w-full h-[100px] border border-black mt-2.5 bg-white"
                        
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default Selection;

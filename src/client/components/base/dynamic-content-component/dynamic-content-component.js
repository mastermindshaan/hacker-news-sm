/*
 * 
 * This file contains code for creating  DynamicContent . This can create tags like label, div etc.
 * 
 */
import React from "react";
/**
  * DynamiContent is a component which render the provided htm dynamically we can use this
  * component in place of using dangerouslySetInnerHTML.
  * @param    {string}    tagName     wrapper html element for the provided html.
  * @param    {object}    attrs       html attributes of the wrapper element.
  * @param    {string}    innerHtml   inner html contents of the element.
  * @return   {[Object]}  Return a react element.
  */

const DynamicContent = ({ tagName, attrs, innerHtml, }) => {
    if (innerHtml) {
        return React.createElement(tagName, {
            ...attrs,
            dangerouslySetInnerHTML: { __html: innerHtml, },
        });
    } else {
        return null;
    }
};

export default DynamicContent;

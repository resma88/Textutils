import React from "react";

export default function AboutUs(props) {
  return (
    <div className="container my-4" style = {{color:props.mode === 'dark'?'white':'black'}}>
      <h2 className="mb-3">About TextUtils</h2>
      <p>
        <strong>TextUtils</strong> is a simple and efficient text manipulation tool
        built using <strong>React.js</strong>. It allows users to analyze, format, and
        enhance text instantly — making it ideal for students, developers, and content
        creators.
      </p>

      <h4 className="mt-4">Key Features</h4>
      <ul>
        <li>Convert text to <strong>Uppercase</strong> or <strong>Lowercase</strong></li>
        <li>Copy text to clipboard with one click</li>
        <li>Remove extra spaces automatically</li>
        <li>Instant word and character count</li>
        <li>Estimate reading time for your content</li>
        <li>Revert your text to its last edited state with the<strong>Undo</strong>  feature for better control while editing.</li>
        <li>Switch between <strong>Light</strong> and <strong>Dark</strong> modes</li>
      </ul>

      <h4 className="mt-4">Why Choose TextUtils?</h4>
      <p>
        TextUtils provides a clean, responsive, and fast user interface that makes text
        handling smooth and effortless. Whether you're cleaning up copied text or doing
        quick text analysis, this app gives you all the tools you need in one place.
      </p>

      <p className="mt-4 text-center">
        <em>Developed with ❤️ by <strong>Resma Meher</strong></em>
      </p>
    </div>
  );
}

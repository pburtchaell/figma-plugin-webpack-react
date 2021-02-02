import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from "react-figma-plugin-ds"

declare global {
    interface Window {
        figma: any;
    }
}

function Plugin() {
    return (
        <div>
            Hello World!
            <Button>Save Status</Button>
        </div>
    )
}

ReactDOM.render(<Plugin />, document.getElementById('plugin'))

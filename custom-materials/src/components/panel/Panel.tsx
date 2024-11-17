import React, { createElement } from 'react'
import './index.scss'

export interface PanelProps {
    title: string
    content: string
    style?: object
}

const Panel: React.FC<PanelProps> = (props) => {
    const { title, content, style = {}, ...otherProps } = props
    const _style = style || {} as any
    const _otherProps = otherProps || {} as any
    _otherProps.style = _style

    return (
        <div className={'panel'} {...otherProps}>
            <div className={'title'}>{title || 'Panel标题'}</div>
            <div className={'content'}>{content || 'Panel内容'}</div>
        </div>
    )
}

export default Panel
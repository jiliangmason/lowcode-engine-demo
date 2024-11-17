import React, { createElement } from 'react'
import { Card } from 'antd'
import './index.scss'

export interface ContainerProps {
    title?: string;
    style?: object
}

const Container: React.FC<ContainerProps> = (props) => {
    const { title, children, style = {}, ...otherProps } = props
    const _style = style || {} as any
    const _otherProps = otherProps || {} as any
    _otherProps.style = _style

    return (
        <Card title={title}>
            <div className={'container-wrapper'} {..._otherProps}>{children}</div>
        </Card>
    )
}

export default Container
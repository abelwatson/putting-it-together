import React from 'react'
type BalanceViewProps = {
    balance: number
}
// React.Component<Props, State>
export class BalanceView extends React.Component<BalanceViewProps, {}> {
    render() {
        const { balance } = this.props
        return (
            <>
                {balance}
            </>
        )
    }
}
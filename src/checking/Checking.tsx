import React from 'react';
import { BalanceView } from './BalanceView';
import { TransactionForm } from './TrannsactionForm';
import { TransHistory } from './TransHistory';

//React.Component<Props, State>
export class Checking extends React.Component {
    render() {
        return (
            <>
                <section>
                    <BalanceView />
                    <TransactionForm />
                </section>
                <section>
                    <TransHistory />
                </section>
            </>
        )
    }
}
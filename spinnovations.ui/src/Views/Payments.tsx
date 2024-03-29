import React, { Component } from 'react';
import {PaymentInfoCard} from '../Components/Cards/PaymentInfoCard';
import paymentData from '../Helpers/Data/PaymentData';
import {PaymentProps, Payment} from '../Helpers/Interfaces/PaymentInterfaces';
import {User} from '../Helpers/Interfaces/UserInterfaces';
import PaymentInfoModal from '../Components/Modals/PaymentInfoModal';

type PaymentState = {
    user: User,
    payments: Payment[]
}

class Payments extends Component<PaymentProps> {
    state: PaymentState = {
        user: this.props.location.state.user,
        payments: [],
    };

    componentDidMount(): void {
        paymentData.getUserPayments(this.state.user.id).then((response: Payment[]) => {
            this.setState({
                payments: response
            })
        });
    }
    onUpdate = (): void => {
        paymentData.getUserPayments(this.state.user.id).then((response: Payment[]) => {
          this.setState({payments: response})
        })
      }
    render() : JSX.Element {
        const { payments, user } = this.state
        const paymentCard = (payment: Payment): JSX.Element => {
            return <PaymentInfoCard key={payment.id} payment={payment} user={user} onUpdate={this.onUpdate}/>
        };

        const cards = payments.map(paymentCard)
        return (
            <div className="d-flex flex-column justify-content-center mt-4">
                <PaymentInfoModal user={user} onUpdate={this.onUpdate} title={"Add New Card"}/>
                <div className="d-flex mt-4 flex-wrap justify-content-center">
                {cards}
                </div>
            </div>
        )
    }
}

export default Payments;

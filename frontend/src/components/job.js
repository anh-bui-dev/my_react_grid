import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

class Job extends Component {
    // Initialization
    constructor(props) {
        super(props);
        this.state = {
            detail: this.props.detail
        }
    }

    render() {
        const { detail } = this.state;
        return (
            <div>
                <Table borderless>
                        <tbody>
                            <tr>
                                <td className='label' colSpan={1}>Title:</td>
                                <td colSpan={5}>{detail.title}</td>
                            </tr>
                            <tr>
                                <td className='label'>Date:</td>
                                <td>{moment(detail.date).format("DD/MM/YYYY")}</td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                                <td className='label'>Location:</td>
                                <td>{detail.location}</td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            <tr>
                                <td className='label' colSpan={1}>Applicants:</td>
                                <td colSpan={5}>{detail.applicants}</td>
                            </tr>
                            <tr>
                                <td className='label' colSpan={1}>Description:</td>
                                <td colSpan={5}>{detail.description}</td>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        )
    }
}

export default Job;
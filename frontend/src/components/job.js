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
        if(detail) {
            return (
                <div className="table-responsive div-responsive">
                    <Table borderless>
                        <tbody>
                            <tr>
                                <td className='label' colSpan={1}>Title:</td>
                                <td colSpan={10}>{detail.title}</td>
                                <td colSpan={1}>&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            <tr>
                                <td className='label' colSpan={1}>Date:</td>
                                <td colSpan={4}>{moment(detail.date).format("DD/MM/YYYY")}</td>
                                <td colSpan={1}>&nbsp;&nbsp;&nbsp;</td>
                                <td className='label' colSpan={1}>Location:</td>
                                <td colSpan={4}>{detail.location}</td>
                                <td colSpan={1}>&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            <tr>
                                <td className='label' colSpan={1}>Description:</td>
                                <td colSpan={4}>&nbsp;&nbsp;&nbsp;</td>
                                <td colSpan={1}>&nbsp;&nbsp;&nbsp;</td>
                                <td className='label' colSpan={1}>Type:</td>
                                <td colSpan={4}>{detail.job_type.name}</td>
                                <td colSpan={1}>&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan={12}>
                                    <div className="responsive"><textarea className="form-control noresize" rows="5" disabled value={detail.description} /></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='label' colSpan={1}>Applicants:</td>
                                <td colSpan={11}>
                                    {
                                        detail.applicants.map((item, index) => {
                                            if(item)
                                            return (<span key={index}>{item.name}{index === detail.applicants.length - 1 ? '' : ', '}</span>)
                                        })
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export default Job;